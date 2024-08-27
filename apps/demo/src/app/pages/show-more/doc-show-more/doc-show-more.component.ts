import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-doc-show-more',
  standalone: true,
  imports: [CommonModule, Highlight],
  templateUrl: './doc-show-more.component.html',
  styleUrl: './doc-show-more.component.scss',
})
export class DocShowMoreComponent {
  installationScript = `npm install ip-table`;
  import = `import '../node_modules/ip-table/dist/ip-table/ip-table.esm';`;
  example = `<ip-table
  columns='[
      { "header": "Name" , "type": "string"},
      { "header": "Age", "type": "number" }
      ]'
  rows='[
      {"Name":"Benoit", "Age":25},
      {"Name":"Linda", "Age":23}
    ]'
>
</ip-table>`;
  custom = `ip-table {
  --primary-color: #006342;
  --secondary-color: #000000;
  --thead-color: #f4f4f4;
  --hover-color: #e7f3ff;
  --font-size: 16px;
  --font-family: Arial, sans-serif;
}
`;
}
