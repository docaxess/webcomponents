import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ModalComponent, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() title: string = 'Card title';
  @Input() imageUrl: string = 'assets/images/tab-img-1.png';
  @Output() cardClick = new EventEmitter<void>();

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.code === 'Enter' || event.code === 'Space') {
      event.preventDefault();
      this.onCardClick();
    }
  }

  onCardClick(): void {
    this.cardClick.emit();
  }
}
