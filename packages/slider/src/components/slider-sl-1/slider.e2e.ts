import { newE2EPage } from '@stencil/core/testing';

describe('ip-slider-sl-1', () => {
  it('renders and initializes correctly', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<ip-slider-sl-1 item-to-show="1"><div class="slot-content" slot="slide-1"><h2>Slot 1 Title</h2><p>Content for Slot 1</p></div><div class="slot-content" slot="slide-2"></div><div class="slot-content" slot="slide-3"><p>Content for Slot 3</p></div></ip-slider-sl-1>',
    );

    const element = await page.find('ip-slider-sl-1');
    expect(element).not.toBeNull();

    const sliderItems = await page.findAll('ip-slider-sl-1 >>> .slider__li');
    expect(sliderItems.length).toBe(3);

    const sliderBullets = await page.findAll(
      'ip-slider-sl-1 >>> .slider-bullets__li',
    );
    expect(sliderBullets.length).toBe(0);
  });

  it('navigates to the next slide', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<ip-slider-sl-1 item-to-show="1"><div class="slot-content" slot="slide-1"><h2>Slot 1 Title</h2><p>Content for Slot 1</p></div><div class="slot-content" slot="slide-2"></div><div class="slot-content" slot="slide-3"><p>Content for Slot 3</p></div></ip-slider-sl-1>',
    );

    const nextButton = await page.find('ip-slider-sl-1 >>> .btn-next');
    expect(nextButton).not.toBeNull();

    await nextButton.click();
    await page.waitForChanges();

    const sliderUl = await page.find('ip-slider-sl-1 >>> .slider__ul');
    const leftPosition = await sliderUl.getComputedStyle('left');
    expect(leftPosition).not.toBe('0px');
  });
});
