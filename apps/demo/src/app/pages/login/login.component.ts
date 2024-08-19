import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../features/card/card.component';

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
