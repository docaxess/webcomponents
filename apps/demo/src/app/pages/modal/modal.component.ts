import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../features/card/card.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  cards = [
    {
      title: 'Modal 1',
      imageUrl: 'assets/images/tab-img-1.png',
      route: '/modal/modal1',
    },
  ];
}
