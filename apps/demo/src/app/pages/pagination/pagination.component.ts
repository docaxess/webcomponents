import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  cards = [
    {
      title: 'Pagination 1',
      link: '/pagination',
      imageUrl: 'assets/images/tab-img-1.png',
    },
  ];
}
