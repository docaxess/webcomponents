import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  cards = [
    {
      title: 'Simple Checkbox',
      link: '/checkbox',
      imageUrl: 'assets/images/tab-img-1.png',
    },
    {
      title: 'Checkbox List',
      link: '/checkbox',
      imageUrl: 'assets/images/tab-img-1.png',
    },
  ];
}
