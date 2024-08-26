import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../features/card/card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-demo-tooltip',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterLink],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent {
  cards = [
    {
      title: 'Clickable tooltip',
      imageUrl: 'assets/images/tooltip1.png',
      route: '/tooltip/tooltip1',
    },
    {
      title: 'Hover tooltip',
      imageUrl: 'assets/images/tooltip2.png',
      route: '/tooltip/tooltip2',
    },
    {
      title: 'Tooltip with button',
      imageUrl: 'assets/images/tooltipWithBtn.png',
      route: '/tooltip/tooltip3',
    },
    {
      title: 'Clickable tooltip',
      imageUrl: 'assets/images/tooltip1.png',
      route: '/tooltip/tooltip1',
    },
    {
      title: 'Hover tooltip',
      imageUrl: 'assets/images/tooltip2.png',
      route: '/tooltip/tooltip2',
    },
    {
      title: 'Tooltip with button',
      imageUrl: 'assets/images/tooltipWithBtn.png',
      route: '/tooltip/tooltip3',
    },
  ];
}
