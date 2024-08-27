import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doc-tab-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doc-tab-panel.component.html',
  styleUrl: './doc-tab-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocTabPanelComponent {}
