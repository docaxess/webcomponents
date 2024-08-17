import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetComponent } from '../../features/code-snippet/code-snippet.component';
import { CardComponent } from '../../features/card/card.component';
import { ModalComponent } from '../../features/modal/modal.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab-panel',
  standalone: true,
  imports: [CommonModule, CodeSnippetComponent, CardComponent, RouterLink],
  templateUrl: './tab-panel.component.html',
  styleUrl: './tab-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabPanelComponent {
  cards = [
    {
      title: 'Tab-panel 1',
      imageUrl: 'assets/images/tab-img-1.png',
      route: '/tab-panel/tab-panel1',
    },
  ];
}
