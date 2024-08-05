import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleComponent {
  cards = [
    {
      title: 'Simple toggle',
      link: '/toggle',
      imageUrl: 'assets/images/tab-img-1.png',
    },
    {
      title: 'Toggle with text',
      link: '/toggle',
      imageUrl: 'assets/images/tab-img-1.png',
    },
    {
      title: 'Toggle with indication',
      link: '/toggle',
      imageUrl: 'assets/images/tab-img-1.png',
    },
  ];
}
