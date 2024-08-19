import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../features/card/card.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  cards = [
    {
      title: 'Table 1',
      imageUrl: 'assets/images/tab-img-1.png',
      route: '/table/table1',
    },
  ];
}
