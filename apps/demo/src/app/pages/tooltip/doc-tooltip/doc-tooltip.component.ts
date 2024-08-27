import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-doc-tooltip',
  standalone: true,
  imports: [CommonModule, Highlight],
  templateUrl: './doc-tooltip.component.html',
  styleUrl: './doc-tooltip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocTooltipComponent {
  installationScript = `npm install ip-tooltip`;
  import = `import '../node_modules/ip-tooltip/dist/ip-tooltip/ip-tooltip.esm';`;
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

  eventHandlingExample = `document.addEventListener('DOMContentLoaded', function () {
  const tooltip = document.querySelector('#clicked-tooltip');
  tooltip.addEventListener('btn1Click', function () {
    console.log('Event btn1Click captured from index.html');
  });
  tooltip.addEventListener('btn2Click', function () {
    console.log('Event btn2Click captured from index.html');
  });
  document.querySelector('#btn1').addEventListener('click', function () {
    const event = new CustomEvent('btn1Click');
    tooltip.dispatchEvent(event);
  });
  document.querySelector('#btn2').addEventListener('click', function () {
    const event = new CustomEvent('btn2Click');
    tooltip.dispatchEvent(event);
  });
});
`;
}
