import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doc-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doc-table.component.html',
  styleUrl: './doc-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocTableComponent {}
