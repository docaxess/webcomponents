import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doc-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doc-dropdown.component.html',
  styleUrl: './doc-dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocDropdownComponent {}
