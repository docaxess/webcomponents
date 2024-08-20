import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../features/card/card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterLink],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonComponent {

  cards = [
    {
      title: 'Radio button 1',
      imageUrl: 'assets/images/radio-button.png',
      route: '/radio-button/radio-button1',
    },
  ];



