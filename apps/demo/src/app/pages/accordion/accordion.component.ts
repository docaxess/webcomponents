import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../features/card/card.component';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, RouterLink, CardComponent],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  cards = [
    {
      title: 'Accordion 1',
      imageUrl: 'assets/images/accordeon.png',
      route: '/accordion/accordion1',
    },
  ];
}
