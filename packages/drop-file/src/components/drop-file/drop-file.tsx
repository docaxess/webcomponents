import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'ip-drop-file',
  styleUrl: 'drop-file.scss',
  shadow: true,
})
export class FileUpload {
  @State() files: File[] = [];
  @State() uploadProgress: { [name: string]: number } = {};
  @State() uploadPaused: { [name: string]: boolean } = {};
  @State() uploadUrls: { [name: string]: string } = {};
  @State() fileStatuses: {
    [name: string]: 'uploading' | 'completed' | 'paused' | 'error';
  } = {};
  @State() errorMessages: { [name: string]: string } = {};
  @State() uploadStartTime: { [name: string]: number } = {};

  @Prop() accept: string = '*/*';
  @Prop() maxFileSize: number = 20 * 1024 * 1024;
  @Prop() placeholder: string =
    'Glissez-déposez vos fichiers ici ou cliquez pour les sélectionner';
  @Prop() downloadLabel: string = 'Télécharger';
  @Prop() pauseLabel: string = 'Mettre en pause le téléchargement';
  @Prop() resumeLabel: string = 'Reprendre le téléchargement';
  @Prop() removeFileLabel: string = 'Supprimer';
  @Prop() timeLeft: string = 'secondes restants';
  @Prop() fileSize: string = 'Taille';

  @Event() fileUploaded: EventEmitter<File>;

  private dropZone: HTMLDivElement;
  private fileInput: HTMLInputElement;

  componentDidLoad() {
    this.setupDropZone();
  }

  private setupDropZone() {
    if (!this.dropZone) return;

    this.dropZone.addEventListener('dragover', this.handleDragOver);
    this.dropZone.addEventListener('dragleave', this.handleDragLeave);
    this.dropZone.addEventListener('drop', this.handleDrop);
    this.dropZone.addEventListener('click', () => this.fileInput.click());
    this.dropZone.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') this.fileInput.click();
    });
  }

  private handleDragOver = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    this.dropZone.classList.add('drag-over');
  };

  private handleDragLeave = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    this.dropZone.classList.remove('drag-over');
  };

  private handleDrop = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    this.dropZone.classList.remove('drag-over');
    if (event.dataTransfer?.files) {
      this.uploadFiles(event.dataTransfer.files);
    }
  };

  private handleFileChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.uploadFiles(input.files);
      input.value = '';
    }
  };

  private async uploadFiles(files: FileList) {
    for (const file of Array.from(files)) {
      if (file.size > this.maxFileSize) {
        this.errorMessages = {
          ...this.errorMessages,
          [file.name]: `Le fichier ${file.name} dépasse la taille maximale autorisée.`,
        };
        continue;
      }

      this.files = [...this.files, file];
      this.uploadProgress = { ...this.uploadProgress, [file.name]: 0 };
      this.uploadPaused = { ...this.uploadPaused, [file.name]: false };
      this.fileStatuses = { ...this.fileStatuses, [file.name]: 'uploading' };
      this.uploadStartTime = {
        ...this.uploadStartTime,
        [file.name]: Date.now(),
      };

      try {
        await this.uploadFile(file);
      } catch (error) {
        this.fileStatuses = { ...this.fileStatuses, [file.name]: 'error' };
        this.errorMessages = {
          ...this.errorMessages,
          [file.name]: 'Une erreur est survenue lors du téléchargement.',
        };
      }
    }
  }

  private async uploadFile(file: File) {
    return new Promise<void>((resolve, reject) => {
      const uploadInterval = setInterval(() => {
        if (this.uploadPaused[file.name]) {
          clearInterval(uploadInterval);
          return;
        }

        const progress = Math.min(
          (this.uploadProgress[file.name] || 0) + 10,
          100,
        );
        this.uploadProgress = { ...this.uploadProgress, [file.name]: progress };

        if (progress === 100) {
          clearInterval(uploadInterval);
          this.fileStatuses = {
            ...this.fileStatuses,
            [file.name]: 'completed',
          };
          this.uploadUrls = {
            ...this.uploadUrls,
            [file.name]: URL.createObjectURL(file),
          };

          this.fileUploaded.emit(file);

          resolve();
        }
      }, 500);

      setTimeout(() => {
        if (Math.random() < 0.1) {
          clearInterval(uploadInterval);
          reject(new Error('Erreur simulée'));
        }
      }, 2000);
    });
  }

  private handlePauseResume = (file: File) => {
    if (this.uploadPaused[file.name]) {
      this.uploadPaused = { ...this.uploadPaused, [file.name]: false };
      this.uploadFile(file).catch((_error) => {
        this.fileStatuses = { ...this.fileStatuses, [file.name]: 'error' };
        this.errorMessages = {
          ...this.errorMessages,
          [file.name]: 'Une erreur est survenue lors du téléchargement.',
        };
      });
    } else {
      this.uploadPaused = { ...this.uploadPaused, [file.name]: true };
    }
  };

  private handleRemove = (file: File) => {
    this.files = this.files.filter((f) => f.name !== file.name);
    this.uploadProgress = { ...this.uploadProgress, [file.name]: undefined };
    this.fileStatuses = { ...this.fileStatuses, [file.name]: undefined };
    this.uploadUrls = { ...this.uploadUrls, [file.name]: undefined };
    this.errorMessages = { ...this.errorMessages, [file.name]: undefined };
    this.uploadStartTime = { ...this.uploadStartTime, [file.name]: undefined };
  };

  private formatBytes(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    else if (bytes < 1048576) return `${(bytes / 1024).toFixed(2)} KB`;
    else return `${(bytes / 1048576).toFixed(2)} MB`;
  }

  private calculateRemainingTime(fileName: string): string {
    const progress = this.uploadProgress[fileName] || 0;
    const startTime = this.uploadStartTime[fileName] || Date.now();
    const elapsedTime = (Date.now() - startTime) / 1000;
    const estimatedTime = (elapsedTime * 100) / progress;

    return progress < 100
      ? `${Math.max(Math.round(estimatedTime - elapsedTime), 0)}`
      : 'Terminé';
  }

  private calculateUploadedSize(file: File): string {
    const progress = this.uploadProgress[file.name] || 0;
    const uploadedSize = (file.size * progress) / 100;
    return this.formatBytes(uploadedSize);
  }

  private downloadFile(file: File) {
    const url = URL.createObjectURL(file);
    const a = document.createElement('a') as HTMLAnchorElement;
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  render() {
    return (
      <div>
        <div
          class="drop-zone"
          ref={(el) => (this.dropZone = el as HTMLDivElement)}
          tabindex="0"
          role="document"
          aria-label={this.placeholder}
        >
          <p>{this.placeholder}</p>
          <input
            class="default-input"
            type="file"
            multiple
            accept={this.accept}
            ref={(el) => (this.fileInput = el as HTMLInputElement)}
            onChange={this.handleFileChange}
          />
        </div>
        {this.files.map((file) => (
          <div key={file.name} class="file-container">
            <div class="uploaded">
            <span>{file.name}</span>
            {this.fileStatuses[file.name]=== 'uploading' && (
                  <div class="progress-bar">
                    <div class="uploaded-size">
                   {this.calculateUploadedSize(file)}/{this.formatBytes(file.size)} 
                   <span class="dot">.</span>
                   {this.calculateRemainingTime(file.name)} {this.timeLeft} 
                  </div>
                  <div
                    class="progress-bar-fill"
                    style={{ width: `${this.uploadProgress[file.name]}%` }}
                  ></div>
                </div>              
            )}
            
              {this.fileStatuses[file.name] === 'error' && (
                <div class="error-message">{this.errorMessages[file.name]}</div>
              )}
            </div>

            {this.fileStatuses[file.name] === 'completed' &&
                this.uploadUrls[file.name] && (
                  <button
                    onClick={() => this.downloadFile(file)}
                    aria-label={`${this.downloadLabel} ${file.name}`}
                    class="download-button"
                  >
                    <svg
                      aria-hideen="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M6.71875 8.59375L10 11.875L13.2812 8.59375"
                        stroke="#2E3243"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 3.125V11.875"
                        stroke="#2E3243"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.875 11.875V16.25C16.875 16.4158 16.8092 16.5747 16.6919 16.6919C16.5747 16.8092 16.4158 16.875 16.25 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V11.875"
                        stroke="#2E3243"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                )}

            <button
              onClick={() =>
                this.fileStatuses[file.name] === 'uploading'
                  ? this.handlePauseResume(file)
                  : this.handleRemove(file)
              }
              aria-label={
                this.fileStatuses[file.name] === 'uploading'
                  ? this.uploadPaused[file.name]
                    ? `${this.resumeLabel} ${file.name}`
                    : `${this.pauseLabel} ${file.name}`
                  : `${this.removeFileLabel} ${file.name}`
              }
              class="icon-button"
            >
              {this.fileStatuses[file.name] === 'uploading' ? (
                this.uploadPaused[file.name] ? (
                  <svg
                    aria-hideen="true"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5V19L19 12L8 5Z" fill="#000" />
                  </svg>
                ) : (
                  <svg
                    aria-hideen="true"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" fill="#000" />
                  </svg>
                )
              ) : (
                <svg
                  aria-hideen="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M15.625 4.375L4.375 15.625"
                    stroke="#2E3243"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.625 15.625L4.375 4.375"
                    stroke="#2E3243"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        ))}
      </div>
    );
  }
}
