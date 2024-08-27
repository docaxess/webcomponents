import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doc-radio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doc-radio.component.html',
  styleUrl: './doc-radio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocRadioComponent {}
