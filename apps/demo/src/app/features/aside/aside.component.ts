import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output, OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-demo-aside',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideComponent implements OnInit {
  @Output() focusCards = new EventEmitter<void>();
  isOpen: { [key: string]: boolean } = {};

  ngOnInit(): void {
    this.isOpen['global-elements'] = true;
    this.isOpen['overview'] = true;
  }

  toggleSection(section: string): void {
    this.isOpen[section] = !this.isOpen[section];
  }

  handleKeydown(event: KeyboardEvent, section: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleSection(section);
    }
  }
}