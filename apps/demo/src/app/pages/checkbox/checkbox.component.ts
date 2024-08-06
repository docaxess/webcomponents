import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../features/card/card.component';
import { Checkbox1Component } from './checkbox1/checkbox1.component';
import { CheckboxListComponent } from './checkbox-list/checkbox-list.component';
import { ModalComponent } from '../../features/modal/modal.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterLink],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  modalVisible = false;
  modalTitle = '';
  selectedContentComponent: any;

  cards = [
    {
      title: 'Simple Checkbox',
      route: '/checkbox/checkbox1',
      imageUrl: 'assets/images/tab-img-1.png',
    },
    {
      title: 'Checkbox List',
      route: '/checkbox/checkbox-list',
      imageUrl: 'assets/images/tab-img-1.png',
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
