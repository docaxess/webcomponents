import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'demo-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class TooltipComponent {}
