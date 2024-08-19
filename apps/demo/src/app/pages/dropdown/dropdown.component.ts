import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../features/card/card.component';
import { ModalComponent } from '../../features/modal/modal.component';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, CardComponent, ModalComponent],
  imports: [CommonModule, CardComponent, ModalComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  cards = [
    {
      title: 'Dropdown 1',
      imageUrl: 'assets/images/tab-img-1.png',
      route: '/dropdown/dropdown1',
    },
  ];
  cards = [
    {
      title: 'Dropdown 1',
      imageUrl: 'assets/images/tab-img-1.png',
      route: '/dropdown/dropdown1',
    },
  ];
}
