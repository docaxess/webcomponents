import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-demo-aside',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss',
})
export class AsideComponent {
  constructor(
    private router: Router,
  ) { }
  
  goToTooltip() {
    console.log('goToTooltip');
    
    this.router.navigate(['/tooltip']);
  }

}
