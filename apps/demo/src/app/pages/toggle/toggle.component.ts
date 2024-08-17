import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../../features/card/card.component';

import { ModalComponent } from '../../features/modal/modal.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule, CardComponent, ModalComponent, RouterLink],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleComponent {
  cards = [
    {
      title: 'Simple toggle',
      imageUrl: 'assets/images/tab-img-1.png',
      route: '/toggle/toggle1',
    },
    {
      title: 'Toggle with text',
      imageUrl: 'assets/images/tab-img-1.png',
      route: '/toggle/toggle2',
    },
    {
      title: 'Toggle with indication',
      imageUrl: 'assets/images/tab-img-1.png',
      route: '/toggle/toggle3',
    },
  ];
}
