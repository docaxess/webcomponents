import { Component, 
  CUSTOM_ELEMENTS_SCHEMA, 
  ChangeDetectionStrategy, 
  PLATFORM_ID, 
  inject 
} from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { CodeSnippetComponent } from '../../../features/code-snippet/code-snippet.component';
import { DocSliderComponent } from '../doc-slider/doc-slider.component';
import { AccordionComponent } from '../../../features/accordion/accordion.component';
import { defineCustomElements as sliderElements } from '@ipedis/slider/loader';

@Component({
  selector: 'app-slider-1',
  standalone: true,
  imports: [CommonModule, CodeSnippetComponent, DocSliderComponent, AccordionComponent],
  templateUrl: './slider-1.component.html',
  styleUrl: './slider-1.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Slider1Component {

  sliderCss=`.slot-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        gap: 10px;
        background-color: #f9f9f9;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        text-align: center;
        margin-left: 10px;
      }
        `

  sliderCode = `
  <ip-slider-sl-1 item-to-show="2" slide-gap="30">
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
          <div class="slot-content" slot="slide-4">
            <h2>Slot 4 Title</h2>
            <p>Content for Slot 4</p>
            <a href="#">Link on Slot 4</a>
          </div>
          <div class="slot-content" slot="slide-5">
            <h2>Slot 5 Title</h2>
            <p>Content for Slot 5</p>
            <a href="#">Link on Slot 5</a>
          </div>
          <div class="slot-content" slot="slide-6">
            <h2>Slot 6 Title</h2>
            <p>Content for Slot 6</p>
            <a href="#">Link on Slot 6</a>
          </div>
          <div class="slot-content" slot="slide-7">
            <h2>Slot 7 Title</h2>
            <p>Content for Slot 7</p>
            <a href="#">Link on Slot 7</a>
          </div>
          <div class="slot-content" slot="slide-8">
            <h2>Slot 8 Title</h2>
            <p>Content for Slot 8</p>
            <a href="#">Link on Slot 8</a>
          </div>
          <div class="slot-content" slot="slide-9">
            <h2>Slot 9 Title</h2>
            <p>Content for Slot 9</p>
            <a href="#">Link on Slot 9</a>
          </div>
        </ip-slider-sl-1>
        `;

  constructor() { 
    if (isPlatformBrowser(inject (PLATFORM_ID)) && sliderElements) {
      sliderElements((inject(DOCUMENT) as Document).defaultView as Window);
    }
  }
}
