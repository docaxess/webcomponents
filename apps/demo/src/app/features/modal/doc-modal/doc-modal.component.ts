import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doc-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doc-modal.component.html',
  styleUrl: './doc-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocModalComponent {}
