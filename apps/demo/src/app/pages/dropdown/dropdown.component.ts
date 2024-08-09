import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../features/card/card.component';
import { Dropdown1Component } from './dropdown1/dropdown1.component';
import { ModalComponent } from '../../features/modal/modal.component';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, CardComponent, ModalComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  modalVisible = false;
  modalTitle = '';
  selectedContentComponent: any;
  cards = [
    {
      title: 'Dropdown 1',
      imageUrl: 'assets/images/tab-img-1.png',
      contentComponent: Dropdown1Component,
    },
  ];
  openModal(contentComponent: any, title: string) {
    this.modalVisible = true;
    this.modalTitle = title;
    this.selectedContentComponent = contentComponent;
  }

  closeModal() {
    this.modalVisible = false;
    this.selectedContentComponent = null;
  }
}
