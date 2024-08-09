import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetComponent } from '../../features/code-snippet/code-snippet.component';
import { CardComponent } from '../../features/card/card.component';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';
import { ModalComponent } from '../../features/modal/modal.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetComponent } from '../code-snippet/code-snippet.component';
import { CardComponent } from '../card/card.component';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';
import { ModalComponent } from '../../features/modal/modal.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, CardComponent, ModalComponent],
  imports: [CommonModule, CardComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  modalVisible = false;
  modalTitle = '';
  selectedContentComponent: any;
  cards = [
    {
      title: 'Login with email',
      imageUrl: 'assets/images/tab-img-1.png',
      contentComponent: Login1Component,
    },
    {
      title: 'Login with username',
      imageUrl: 'assets/images/tab-img-1.png',
      contentComponent: Login2Component,
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
  cards = [
    {
      title: 'Login with email',
      imageUrl: 'assets/images/tab-img-1.png',
      contentComponent: Login1Component,
    },
    {
      title: 'Login with username',
      imageUrl: 'assets/images/tab-img-1.png',
      contentComponent: Login2Component,
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
