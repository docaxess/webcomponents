import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

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

  constructor(private router: Router) {}

  handleKeydown(event: KeyboardEvent, link?: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (link) {
        this.router.navigate([link]);
      }
    }
  }
}
