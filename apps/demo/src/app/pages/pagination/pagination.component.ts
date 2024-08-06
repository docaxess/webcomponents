import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Pagination1Component } from './pagination1/pagination1.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, CardComponent, ModalComponent],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  modalVisible = false;
  modalTitle = '';
  selectedContentComponent: any;
  currentView: 'preview' | 'code' | 'doc' = 'preview';

  cards = [
    {
      title: 'Pagination 1',
      imageUrl: 'assets/images/tab-img-1.png',
      contentComponent: Pagination1Component,
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
