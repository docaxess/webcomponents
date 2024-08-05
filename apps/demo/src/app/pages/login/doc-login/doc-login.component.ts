import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doc-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doc-login.component.html',
  styleUrl: './doc-login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocLoginComponent {}
