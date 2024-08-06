import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../card/card.component';
import { Toogle1Component } from './toogle1/toogle1.component';
import { Toogle2Component } from './toogle2/toogle2.component';
import { Toogle3Component } from './toogle3/toogle3.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule, CardComponent, ModalComponent],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleComponent {
  modalVisible = false;
  modalTitle = '';
  selectedContentComponent: any;
  cards = [
    {
      title: 'Simple toggle',
      imageUrl: 'assets/images/tab-img-1.png',
      contentComponent: Toogle1Component,
    },
    {
      title: 'Toggle with text',
      imageUrl: 'assets/images/tab-img-1.png',
      contentComponent: Toogle2Component,
    },
    {
      title: 'Toggle with indication',
      imageUrl: 'assets/images/tab-img-1.png',
      contentComponent: Toogle3Component,
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
