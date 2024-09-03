import { Component, h, State, Element } from '@stencil/core';

@Component({
  tag: 'ip-carousel-slider',
  styleUrl: 'slider.scss',
  shadow: true,
})
export class Slider {
  @Element() el: HTMLElement;
  @State() currentIndex: number = 0;

  private slides: HTMLElement[][] = [] as HTMLElement[][];

  componentDidLoad() {
    const slot = this.el.shadowRoot.querySelector('slot') as HTMLSlotElement;
    const allSlides = Array.from(slot.assignedElements()) as HTMLElement[];
    this.slides = this.chunkArray(allSlides, 3);
  }

  chunkArray(array: any[], size: number): any[][] {
    const result: any[][] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }
  nextSlide() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.slides.length - 1;
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  render() {
    return (
      <div class="carousel-container">
        <div class="slider-wrapper">
          <button class="prev" onClick={() => this.prevSlide()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="24"
              viewBox="0 0 14 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.2534 0.561123L0.505371 11.9971L11.2507 23.506C11.6956 23.9826 12.4163 23.9818 12.8604 23.5044C13.2704 23.0637 13.3013 22.3708 12.9537 21.892L12.8589 21.777L3.7316 12.0025L12.8563 2.2958C13.2683 1.85736 13.3026 1.16468 12.9573 0.683949L12.8631 0.568451C12.4545 0.126282 11.809 0.0894733 11.361 0.460003L11.2534 0.561123Z"
                fill="#504DA2"
              />
            </svg>
          </button>
          <div class="slider">
            <div
              class="slides"
              style={{ transform: `translateX(-${this.currentIndex * 100}%)` }}
            >
              <slot></slot>
            </div>
          </div>
          <button class="next" onClick={() => this.nextSlide()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.07713 23.6408L15.0908 12.0385L3.08011 0.362144C2.58278 -0.121338 1.77721 -0.120604 1.28081 0.363785C0.822602 0.810913 0.787999 1.51385 1.17655 1.99962L1.2825 2.11627L11.4847 12.033L1.28548 21.8809C0.824898 22.3257 0.786557 23.0284 1.17252 23.5161L1.27785 23.6333C1.73454 24.0819 2.45607 24.1193 2.95682 23.7433L3.07713 23.6408Z"
                fill="#504DA2"
              />
            </svg>
          </button>
        </div>

        <div class="indicators">
          {this.slides.map((_, index) => (
            <span
              class={{ indicator: true, active: index === this.currentIndex }}
              onClick={() => this.goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    );
  }
}
