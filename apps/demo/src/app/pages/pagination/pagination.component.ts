import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterOutlet],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  cards = [
    {
      title: 'Pagination 1',
      link: '/pagination1',
      imageUrl: 'assets/images/tab-img-1.png',
    },
  ];
}
