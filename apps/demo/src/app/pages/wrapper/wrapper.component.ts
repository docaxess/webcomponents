import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss',
})
export class WrapperComponent {
  @Input() title: string = 'Default Title';
  activeTab: string = 'preview';

  selectTab(tab: string): void {
    this.activeTab = tab;
  }
}
