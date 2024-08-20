import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../features/card/card.component';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterLink],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  currentView: 'preview' | 'code' | 'doc' = 'preview';

  cards = [
    {
      title: 'Pagination 1',
      imageUrl: 'assets/images/pagination.png',
      route: '/pagination/pagination1',
    },
  ];
}
