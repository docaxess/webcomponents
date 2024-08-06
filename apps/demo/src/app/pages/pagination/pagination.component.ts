import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../features/card/card.component';
import { Pagination1Component } from './pagination1/pagination1.component';
import { ModalComponent } from '../../features/modal/modal.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterLink],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  currentView: 'preview' | 'code' | 'doc' = 'preview';

  cards = [
    {
      title: 'Pagination 1',
      imageUrl: 'assets/images/tab-img-1.png',
      route: '/pagination/pagination1',
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
