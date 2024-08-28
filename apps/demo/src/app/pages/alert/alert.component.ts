import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../features/card/card.component';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  cards = [
    {
      title: 'Success Alert',
      route: '/alert/success-alert',
      imageUrl: 'assets/images/alertSuccess.png',
    },
    {
      title: 'Info Alert',
      route: '/alert/info-alert',
      imageUrl: 'assets/images/alertInfo.png',
    },
    {
      title: 'Warning Alert',
      route: '/alert/warning-alert',
      imageUrl: 'assets/images/alertWarning.png',
    },
    {
      title: 'Danger Alert',
      route: '/alert/danger-alert',
      imageUrl: 'assets/images/alertDanger.png',
    },
  ];
}
