import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetComponent } from '../../features/code-snippet/code-snippet.component';
import { CardComponent } from '../../features/card/card.component';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';
import { ModalComponent } from '../../features/modal/modal.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  cards = [
    {
      title: 'Login with email',
      imageUrl: 'assets/images/tab-img-1.png',
      route: '/login/login1',
    },
    {
      title: 'Login with username',
      imageUrl: 'assets/images/tab-img-1.png',
      route: '/login/login2',
    },
  ];
}
