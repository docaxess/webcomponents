import {
  Component,
  h,
  State,
  Element,
  Prop,
  Watch,
  Event,
  EventEmitter,
} from '@stencil/core';

@Component({
  tag: 'ip-carousel-1',
  styleUrl: './carousel.scss',
  shadow: true,
})
export class IpCarousel {
  @Element() el: HTMLElement;
  @Prop() btnPrevAriaLabel: string = 'Previous Slide';
  @Prop() btnNextAriaLabel: string = 'Next Slide';
  @Prop() svgColor = 'grey';
  @State() currentIndex: number = 0;
  @State() slidesPerView: number = 3;
  @State() canPrev: boolean = false;
  @State() canNext: boolean = true;

  @Event() slideChanged: EventEmitter<number>;
  slidesCount: number;

  @Watch('children')
  childrenWatcher() {
    this.updateSlideCount();
  }

  componentWillLoad() {
    this.updateSlideCount();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  componentDidLoad() {
    this.el.addEventListener('keydown', this.onKeyboard.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.onResize.bind(this));
    this.el.removeEventListener('keydown', this.onKeyboard.bind(this));
  }

  onResize() {
    this.updateSlideCount();
  }

  updateSlideCount() {
    const width = window.innerWidth;
    this.slidesPerView = width <= 480 ? 1 : 3;
    this.slidesCount = Math.ceil(this.el.children.length / this.slidesPerView);
    if (this.currentIndex >= this.slidesCount) {
      this.currentIndex = this.slidesCount - 1;
    }
    this.updateButtonStates();
  }

  updateButtonStates() {
    this.canPrev = this.currentIndex > 0;
    this.canNext = this.currentIndex < this.slidesCount - 1;
  }

  handlePrevious() {
    if (this.canPrev) {
      this.currentIndex =
        this.currentIndex === 0 ? this.slidesCount - 1 : this.currentIndex - 1;
      this.slideChanged.emit(this.currentIndex);
      this.updateButtonStates();
    }
  }

  handleNext() {
    if (this.canNext) {
      this.currentIndex =
        this.currentIndex === this.slidesCount - 1 ? 0 : this.currentIndex + 1;
      this.slideChanged.emit(this.currentIndex);
      this.updateButtonStates();
    }
  }

  handleIndicatorClick(index: number) {
    this.currentIndex = index;
    this.slideChanged.emit(this.currentIndex);
    this.updateButtonStates();
  }

  onKeyboard(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft':
        this.handlePrevious();
        event.preventDefault();
        break;

      case 'ArrowRight':
        this.handleNext();
        event.preventDefault();
        break;

      case 'Tab':
        this.handleTab(event);
        break;

      default:
        break;
    }
  }

  handleTab(event: KeyboardEvent) {
    const focusableElements = Array.from(
      this.el.shadowRoot.querySelectorAll(
        'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
      ),
    ) as HTMLElement[];
    const currentIndex = focusableElements.indexOf(
      document.activeElement as HTMLElement,
    );

    if (event.shiftKey && currentIndex === 0) {
      focusableElements[focusableElements.length - 1].focus();
      event.preventDefault();
    } else if (
      !event.shiftKey &&
      currentIndex === focusableElements.length - 1
    ) {
      focusableElements[0].focus();
      event.preventDefault();
    }
  }

  render() {
    const startIndex = this.currentIndex * this.slidesPerView;
    const endIndex = startIndex + this.slidesPerView;
    const itemsToShow = Array.from(this.el.children).slice(
      startIndex,
      endIndex,
    );

    const indicatorButtons = Array.from({ length: this.slidesCount }).map(
      (_, index) => (
        <button
          class={{
            'ip-carousel-indicator': true,
            'ip-carousel-indicator-active': index === this.currentIndex,
          }}
          aria-label={`Slide ${index + 1}`}
          onClick={() => this.handleIndicatorClick(index)}
          key={index}
          role="tab"
          aria-selected={index === this.currentIndex ? 'true' : 'false'}
        ></button>
      ),
    );

    return (
      <div class="ip-carousel" role="region">
        <div class="ip-carousel-content" part="content-wrapper">
          <button
            class={`ip-carousel-button ip-carousel-prev `}
            aria-label={this.btnPrevAriaLabel}
            onClick={() => this.handlePrevious()}
            disabled={!this.canPrev}
          >
            <svg
              class="svg-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="24"
              viewBox="0 0 14 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.2534 0.561123L0.505371 11.9971L11.2507 23.506C11.6956 23.9826 12.4163 23.9818 12.8604 23.5044C13.2704 23.0637 13.3013 22.3708 12.9537 21.892L12.8589 21.777L3.7316 12.0025L12.8563 2.2958C13.2683 1.85736 13.3026 1.16468 12.9573 0.683949L12.8631 0.568451C12.4545 0.126282 11.809 0.0894733 11.361 0.460003L11.2534 0.561123Z"
                fill="var(--svg-color)"
              />
            </svg>
          </button>
          <div
            class="ip-carousel-slides"
            role="group"
            aria-roledescription="carousel"
            aria-live="polite"
            part="slides-wrapper"
          >
            {itemsToShow.map((_, index) => {
              const slotName = `slide-${startIndex + index + 1}`;
              return (
                <div
                  part="slide-card"
                  class="ip-carousel-item"
                  tabindex="0"
                  role="tabpanel"
                  aria-labelledby={`carousel-item-${startIndex + index + 1}`}
                  key={index}
                >
                  <slot name={slotName}></slot>
                </div>
              );
            })}
          </div>
          <button
            class={`ip-carousel-button ip-carousel-next `}
            aria-label={this.btnNextAriaLabel}
            onClick={() => this.handleNext()}
            disabled={!this.canNext}
          >
            <svg
              class="svg-icon"
              aria-hidden="true"
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
                fill="var(--svg-color)"
              />
            </svg>
          </button>
        </div>
        <div class="ip-carousel-indicators" role="tablist" tabindex="-1">
          {indicatorButtons}
        </div>
      </div>
    );
  }
}
