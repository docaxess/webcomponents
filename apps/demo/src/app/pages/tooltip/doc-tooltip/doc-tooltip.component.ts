import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doc-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doc-tooltip.component.html',
  styleUrl: './doc-tooltip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocTooltipComponent {}
