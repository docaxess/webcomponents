import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../features/card/card.component';
import { ModalComponent } from '../../features/modal/modal.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [CommonModule, CardComponent, ModalComponent, RouterLink],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonComponent {
  modalVisible = false;
  modalTitle = '';
  selectedContentComponent: any;
  cards = [
    {
      title: 'Radio button 1',
      imageUrl: 'assets/images/tab-img-1.png',
      route: '/radio-button/radio-button1',
    },
  ];
  constructor(private cdRef: ChangeDetectorRef) {}

  openModal(contentComponent: any, title: string) {
    this.modalVisible = true;
    this.modalTitle = title;
    this.selectedContentComponent = contentComponent;
    this.cdRef.markForCheck();
  }

  closeModal() {
    this.modalVisible = false;
    this.selectedContentComponent = null;
    this.cdRef.markForCheck();
  }
}
