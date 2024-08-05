import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetComponent } from '../code-snippet/code-snippet.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  cards = [
    {
      title: 'login with email',
      link: '/login',
      imageUrl: 'assets/images/tab-img-1.png',
    },
    {
      title: 'login with username',
      link: '/login',
      imageUrl: 'assets/images/tab-img-1.png',
    },
  ];
}
