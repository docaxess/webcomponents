import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  cards = [
    {
      title: 'Dropdown 1',
      link: '/dropdown',
      imageUrl: 'assets/images/tab-img-1.png',
    },
  ];
}
