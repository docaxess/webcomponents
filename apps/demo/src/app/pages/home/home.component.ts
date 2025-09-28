import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Tooltip1Component } from '../tooltip/tooltip1/tooltip1.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Tooltip1Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
