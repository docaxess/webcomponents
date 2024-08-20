import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../features/card/card.component';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterLink],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  cards = [
    {
      title: 'Simple Checkbox',
      route: '/checkbox/checkbox1',
      imageUrl: 'assets/images/checkboxSimple.jpg',
    },
    {
      title: 'Checkbox List',
      route: '/checkbox/checkbox-list',
      imageUrl: 'assets/images/checkbox.png',
    },
  ];
}
