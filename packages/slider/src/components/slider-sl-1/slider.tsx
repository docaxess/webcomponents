import { Component, Element, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'ip-slider-sl-1',
  styleUrl: './slider.scss',
  shadow: true,
})
export class IpSliderSl1 {
  @Element() el: HTMLElement;

  private slides: Element[] = [];

  @Prop() slideTitleAria = 'Carousel Slider';
  @Prop() slideGap = 30;
  @Prop() isSlideBullet = true;
  @Prop() isPreviousNextNavigation = true;
  @Prop() itemToShow: number;
  @Prop() previousBtnAria = 'Previous slide';
  @Prop() nextBtnAria = 'Next slide';
  @Prop() bulletBtnAria = 'Go to slide';

  @State() sliderItemWidth: number;
  @State() sliderPosition = 0;
  @State() sliderUl: HTMLElement;
  @State() sliderPreviousBtn: HTMLElement;
  @State() sliderNextBtn: HTMLElement;
  @State() sliderCounts: number;
  @State() isMobilePortrait = false;
  @State() sliderBullets = [];

  componentWillLoad() {
    this.slides = Array.from(this.el.querySelectorAll('[slot]'));

    requestAnimationFrame(() => {
      this.initializeSlider();
    });

    this.checkIfMobile();
  }

  private initializeSlider() {
    this.getSliderInfo();
    this.computeSlideWidth();
    this.computeBullets();
    (this.sliderPreviousBtn as HTMLButtonElement).disabled = true;
    this.onResize();
    this.handleTabNavigation();
  }

  private computeSlideWidth() {
    const sliderContainerWidth = this.el.shadowRoot
      .querySelector('.slider-items')
      .getBoundingClientRect().width;
    const slideGap = (this.itemToShow - 1) * this.slideGap;
    this.sliderItemWidth = (sliderContainerWidth - slideGap) / this.itemToShow;
    this.setItemSize(this.sliderItemWidth);
  }

  private setItemSize(itemWidth: number) {
    const itemViewportWidth = this.convertPXToVW(itemWidth);
    this.el.shadowRoot.querySelectorAll('.slider__li').forEach((elem) => {
      (elem as HTMLElement).style.width = `${itemViewportWidth}vw`;
    });
  }

  private convertPXToVW(px: number) {
    const scrollbarWidth = 15;
    return (px * 100) / (document.documentElement.clientWidth + scrollbarWidth);
  }

  private setSliderPosition(position: number) {
    const leftPosition = -this.sliderItemWidth * (position * this.itemToShow);
    const elemGap = this.slideGap * (this.itemToShow * position);
    this.sliderUl.style.left = `${leftPosition - elemGap}px`;
  }

  previous() {
    if (this.sliderPosition > 0) {
      this.sliderPosition--;
      this.updateSlider();
    }
  }

  next() {
    const maxPosition = Math.ceil(this.sliderCounts / this.itemToShow) - 1;
    if (this.sliderPosition < maxPosition) {
      this.sliderPosition++;
      this.updateSlider();
    }
  }

  private getSliderInfo() {
    this.sliderUl = this.el.shadowRoot.querySelector(
      '.slider__ul',
    ) as HTMLElement;
    this.sliderPreviousBtn = this.el.shadowRoot.querySelector(
      '.btn-previous',
    ) as HTMLElement;
    this.sliderNextBtn = this.el.shadowRoot.querySelector(
      '.btn-next',
    ) as HTMLElement;
    this.sliderCounts =
      this.el.shadowRoot.querySelectorAll('.slider__li').length;
  }

  private onResize() {
    window.addEventListener('resize', () => {
      this.computeSlideWidth();
      this.setSliderPosition(this.sliderPosition);
      this.checkIfMobile();
    });
  }

  private checkIfMobile() {
    this.isMobilePortrait = window.matchMedia(
      `(max-width: 767px) and (orientation: portrait)`,
    ).matches;
    this.itemToShow = this.isMobilePortrait ? 1 : this.itemToShow;
  }

  private computeBullets() {
    const numBullets = Math.ceil(this.sliderCounts / this.itemToShow);
    this.sliderBullets = Array.from({ length: numBullets }, (_, i) => i);
  }

  selectSlide(index: number) {
    this.sliderPosition = index;
    this.updateSlider();
  }

  private updateSlider() {
    this.setSliderPosition(this.sliderPosition);
    this.updateButtonStates();
    this.handleTabNavigation();
  }

  private updateButtonStates() {
    (this.sliderPreviousBtn as HTMLButtonElement).disabled =
      this.sliderPosition === 0;
    (this.sliderNextBtn as HTMLButtonElement).disabled =
      this.sliderPosition >= Math.ceil(this.sliderCounts / this.itemToShow) - 1;
  }

  private handleTabNavigation() {
    this.slides.forEach((elem) => {
      const linkElement = elem.querySelector('a');
      linkElement?.setAttribute('tabindex', '-1');
    });

    const startingIndex = this.sliderPosition * this.itemToShow;
    for (
      let i = startingIndex;
      i < startingIndex + this.itemToShow && i < this.slides.length;
      i++
    ) {
      const linkElement = this.slides[i]?.querySelector('a');
      linkElement?.setAttribute('tabindex', '0');
    }
  }

  forceFocus(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const startingIndex = this.sliderPosition * this.itemToShow;
      this.slides[startingIndex]?.querySelector('a')?.focus();
    }
  }

  render() {
    const slideGap = this.convertPXToVW(this.slideGap);

    return (
      <div class="slider" role="group" aria-label={this.slideTitleAria}>
        <div class="slider-items">
          <ul class="slider__ul" style={{ gap: `${slideGap}vw` }} role="list">
            {this.slides.map((_slide, index) => (
              <li class="slider__li" role="listitem">
                <slot name={`slide-${index + 1}`}></slot>
              </li>
            ))}
          </ul>
        </div>

        {this.isPreviousNextNavigation && this.renderNavigationButtons()}
        {this.isSlideBullet && this.renderBullets()}
      </div>
    );
  }

  private renderNavigationButtons() {
    return (
      <div>
        <button
          part="left-btn"
          aria-label={this.previousBtnAria}
          class="btn btn-previous"
          onClick={() => this.previous()}
          onKeyPress={(event) => this.forceFocus(event)}
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
        <button
          part="right-btn"
          aria-label={this.nextBtnAria}
          class="btn btn-next"
          onClick={() => this.next()}
          onKeyPress={(event) => this.forceFocus(event)}
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
    );
  }

  private renderBullets() {
    return (
      <div class="slider-bullets" role="group" aria-label="Carousel Pagination">
        <ul class="slider-bullets__ul">
          {this.sliderBullets.map((index) => (
            <li class="slider-bullets__li">
              <button
                part="bullet-btn"
                aria-pressed={this.sliderPosition === index ? 'true' : 'false'}
                aria-label={`${this.bulletBtnAria} ${index + 1} `}
                onClick={() => this.selectSlide(index)}
                onKeyPress={(event) => this.forceFocus(event)}
                class={this.sliderPosition === index ? 'btn-active' : ''}
              ></button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
