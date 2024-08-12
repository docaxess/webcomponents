import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doc-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doc-pagination.component.html',
  styleUrl: './doc-pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocPaginationComponent {}
