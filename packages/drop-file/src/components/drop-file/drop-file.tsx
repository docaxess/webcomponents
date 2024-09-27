import { Component, Prop, State, h } from '@stencil/core';

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

  @Prop() accept: string = '*/*'; // Types de fichiers autorisés
  @Prop() maxFileSize: number = 20 * 1024 * 1024; // Taille maximale en octets

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
      input.value = ''; // Clear the input
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
      // const startTime = this.uploadStartTime[file.name];
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
          resolve();
        }
      }, 500);

      setTimeout(() => {
        if (Math.random() < 0.1) {
          // Simule une erreur avec 10% de chance
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
    const elapsedTime = (Date.now() - startTime) / 1000; // En secondes
    const estimatedTime = (elapsedTime * 100) / progress; // Estimation en secondes

    return progress < 100
      ? `${Math.max(Math.round(estimatedTime - elapsedTime), 0)} s`
      : 'Terminé';
  }

  private calculateUploadedSize(file: File): string {
    const progress = this.uploadProgress[file.name] || 0;
    const uploadedSize = (file.size * progress) / 100;
    return this.formatBytes(uploadedSize);
  }

  render() {
    return (
      <div>
        <div
          class="drop-zone"
          ref={(el) => (this.dropZone = el as HTMLDivElement)}
        >
          <p>
            Glissez-déposez vos fichiers ici ou cliquez pour les sélectionner
          </p>
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
            <span>{file.name}</span>
            <div class="file-details">
              <div class="file-size">
                Taille totale: {this.formatBytes(file.size)}
              </div>
              {this.fileStatuses[file.name] === 'uploading' && (
                <div>
                  <div class="progress-bar">
                    <div
                      class="progress-bar-fill"
                      style={{ width: `${this.uploadProgress[file.name]}%` }}
                    ></div>
                  </div>
                  <div class="uploaded-size">
                    Uploadé: {this.calculateUploadedSize(file)}
                  </div>
                  <div class="time-remaining">
                    Temps restant: {this.calculateRemainingTime(file.name)}
                  </div>
                </div>
              )}
              {this.fileStatuses[file.name] === 'error' && (
                <div class="error-message">{this.errorMessages[file.name]}</div>
              )}
              {this.fileStatuses[file.name] === 'completed' &&
                this.uploadUrls[file.name] && (
                  <a
                    href={this.uploadUrls[file.name]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Télécharger {file.name}
                  </a>
                )}
            </div>
            <button
              onClick={() =>
                this.fileStatuses[file.name] === 'uploading'
                  ? this.handlePauseResume(file)
                  : this.handleRemove(file)
              }
              class="icon-button"
            >
              {this.fileStatuses[file.name] === 'uploading' ? (
                this.uploadPaused[file.name] ? (
                  <svg
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
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 6H5V18H3V6ZM19 6H21V18H19V6ZM11 6H13V18H11V6Z"
                    fill="#000"
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
