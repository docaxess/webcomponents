import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetComponent } from '../../features/code-snippet/code-snippet.component';
import { CardComponent } from '../../features/card/card.component';
import { ModalComponent } from '../../features/modal/modal.component';
import { TabPanel1Component } from './tab-panel1/tab-panel1.component';

@Component({
  selector: 'app-tab-panel',
  standalone: true,
  imports: [CommonModule, CodeSnippetComponent, CardComponent, ModalComponent],
  templateUrl: './tab-panel.component.html',
  styleUrl: './tab-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabPanelComponent {
  modalVisible = false;
  modalTitle = '';
  selectedContentComponent: any;
  cards = [
    {
      title: 'Tab-panel 1',
      imageUrl: 'assets/images/tab-img-1.png',
      contentComponent: TabPanel1Component,
    },
  ];
  openModal(contentComponent: any, title: string) {
    this.modalVisible = true;
    this.modalTitle = title;
    this.selectedContentComponent = contentComponent;
  }

  handleCloseModal(): void {
    this.modalVisible = false;
    this.selectedContentComponent = null;
  }
}
