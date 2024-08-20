import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent {
  @Input() title = '';
  @Input() breadcrumbItems: Array<{ label: string; link?: string }> = [];

  handleKeydown(event: KeyboardEvent, link?: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (link) {
        window.location.href = link;
      }
    }
  }
}
