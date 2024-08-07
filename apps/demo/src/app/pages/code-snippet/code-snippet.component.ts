import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-snippet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-snippet.component.html',
  styleUrl: './code-snippet.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CodeSnippetComponent {
  @Input() code = '';
  showCode = false;
  
  toggleCode() {
    this.showCode = !this.showCode;
  }

  copyCode() {
    const textarea = document.createElement('textarea');
    textarea.value = this.code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
}
