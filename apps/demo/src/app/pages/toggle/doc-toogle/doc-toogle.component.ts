import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doc-toogle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doc-toogle.component.html',
  styleUrl: './doc-toogle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocToogleComponent {}
