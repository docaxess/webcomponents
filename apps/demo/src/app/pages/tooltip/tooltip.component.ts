import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../features/card/card.component';
import { Tooltip1Component } from './tooltip1/tooltip1.component';
import { Tooltip2Component } from './tooltip2/tooltip2.component';
import { Tooltip3Component } from './tooltip3/tooltip3.component';
import { ModalComponent } from '../../features/modal/modal.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-demo-tooltip',
  standalone: true,
  imports: [CommonModule, CardComponent, ModalComponent, RouterLink],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent {
  modalVisible = false;
  modalTitle = '';
  selectedContentComponent: any;
  cards = [
    {
      title: 'Clickable tooltip',
      imageUrl: 'assets/images/tab-img-1.png',
      route: '/tooltip/tooltip1',
    },
    {
      title: 'Hover tooltip',
      imageUrl: 'assets/images/tab-img-1.png',
      route: '/tooltip/tooltip2',
    },
    {
      title: 'Tooltip with button',
      imageUrl: 'assets/images/tab-img-1.png',
      route: '/tooltip/tooltip3',
    },
  ];
}
