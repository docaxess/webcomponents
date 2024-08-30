import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../features/card/card.component';
import { title } from 'process';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  cards = [
    {
      title: 'Search Bar 1',
      route: '/search-bar/search-bar1',
      imageUrl: 'assets/images/searchBar1.png',
    },
  ];
}
