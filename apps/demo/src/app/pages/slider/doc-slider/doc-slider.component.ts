import { Component , ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from 'ngx-highlightjs';


@Component({
  selector: 'app-doc-slider',
  standalone: true,
  imports: [CommonModule,Highlight],
  templateUrl: './doc-slider.component.html',
  styleUrl: './doc-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class DocSliderComponent {
  import = `import '../node_modules/ip-slider/dist/ip-slider/ip-slider.esm';
  `;

  example=`<ip-slider-sl-1 item-to-show="2" slide-gap="30">
            <div class="slot-content" slot="slide-1">
              <h2>Slot 1 Title</h2>
              <p>Content for Slot 1</p>
              <a href="#">Link on Slot 1</a>
            </div>
            <div class="slot-content" slot="slide-2">
              <h2>Slot 2 Title</h2>
              <p>Content for Slot 2</p>
              <a href="#">Link on Slot 2</a>
            </div>
            <div class="slot-content" slot="slide-3">
              <h2>Slot 3 Title</h2>
              <p>Content for Slot 3</p>
              <a href="#">Link on Slot 3</a>
            </div>
            </ip-slider-sl-1>
  `;

  custom=`ip-slider-sl-1 {
  --ip-sl-primary-color: #006342;
  --ip-sl-secondary-color: #000000;
}

ip-slider-sl-1::part(bullet-btn) {
  width: 10px;
  height: 10px;
}`
}
