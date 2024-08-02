import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() title: string = 'Default Title';
  @Input() isVisible: boolean = false;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  activeTab: 'preview' | 'code' | 'doc' = 'preview';

  selectTab(tab: 'preview' | 'code' | 'doc'): void {
    this.activeTab = tab;
  }

  onClose(): void {
    this.closeModal.emit();
  }
}
