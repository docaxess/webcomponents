import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-doc-login',
  standalone: true,
  imports: [CommonModule, Highlight],
  templateUrl: './doc-login.component.html',
  styleUrl: './doc-login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocLoginComponent {
  installationScript = `npm install ip-login`;

  import = `import '../node_modules/ip-login/dist/ip-login/ip-login.esm';`;

  custom = `ip-email {
  --primary-color: #006342;
  --secondary-color: #000000;
  --focus-color: #3aa593;
}
ip-email::part(email-input) {
  width: 150px;
  height: 40px;
}

ip-password {
  --primary-color: #006342;
  --secondary-color: #000000;
  --focus-color: #3aa593;
}

ip-password::part(password-input) {
  width: 150px;
  height: 40px;
}
`;
}
