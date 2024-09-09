import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  @Input() title: string = '';
  @Input() alwaysOpen: boolean = false;
  isOpen: boolean = false;
  contentId: string = '';
  headerId: string = '';
  ngOnInit() {
    this.contentId = `accordion-content-${Math.random().toString(36).substr(2, 9)}`;
    this.headerId = `accordion-header-${Math.random().toString(36).substr(2, 9)}`;
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggle();
    }
  }
}
