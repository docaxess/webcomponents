import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonComponent {
  cards = [
    {
      title: 'Radio button 1',
      link: '/radio',
      imageUrl: 'assets/images/tab-img-1.png',
    },
  ];
}
