import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-doc-table',
  standalone: true,
  imports: [CommonModule, Highlight],
  templateUrl: './doc-table.component.html',
  styleUrl: './doc-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocTableComponent {
  installationScript = `npm install ip-show-more`;
  import = `import '../node_modules/ip-show-more/dist/ip-show-more/ip-show-more.esm';`;
  example = `<ip-show-more show-more-text="Read More" show-less-text="Read Less">
  <div slot="content">
    This is the expanded content that will be shown or hidden when the button is
    clicked.
  </div>
</ip-show-more>`;
  custom = `ip-show-more {
  --ip-primary-color: #006342;
  --ip-secondary-color: #000000;
  --ip-font-size: 16px;
  --ip-font-color: #333;
  --ip-font-family: Arial, sans-serif;
  --ip-svg-color: #fff;
}
`;
}
