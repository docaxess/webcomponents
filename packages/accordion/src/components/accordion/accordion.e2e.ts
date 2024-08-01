import { newE2EPage } from '@stencil/core/testing';

describe('ip-accordion', () => {
  it('renders without errors', async () => {
    const page = await newE2EPage();
    await page.setContent('<ip-accordion></ip-accordion>');

    const element = await page.find('ip-accordion');
    expect(element).toHaveClass('hydrated');
  });

  it('opens the first panel when isFirstPanelOpen is true', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ip-accordion is-first-panel-open='true' accordion-headers='[{"title":"Panel 1","ariaText":"panel-1"}]'>
        <div slot="accordion-1">Content 1</div>
      </ip-accordion>
    `);

    const firstPanel = await page.find('ip-accordion >>> .js-panel');
    const style = await firstPanel.getComputedStyle();

    expect(style.display).toBe('block');
  });

  it('sets aria-expanded attribute correctly when toggling panels', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ip-accordion accordion-headers='[{"title":"Panel 1","ariaText":"panel-1"}]'>
        <div slot="accordion-1">Content 1</div>
      </ip-accordion>
    `);

    const headerButton = await page.find(
      'ip-accordion >>> .js-acc-button button',
    );

    expect(await headerButton.getAttribute('aria-expanded')).toBe('false');

    await headerButton.click();
    await page.waitForChanges();

    expect(await headerButton.getAttribute('aria-expanded')).toBe('true');

    await headerButton.click();
    await page.waitForChanges();

    expect(await headerButton.getAttribute('aria-expanded')).toBe('false');
  });

  it('toggles panel visibility when a header button is clicked', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ip-accordion accordion-headers='[{"title":"Panel 1","ariaText":"panel-1"}]'>
        <div slot="accordion-1">Content 1</div>
      </ip-accordion>
    `);

    const headerButton = await page.find(
      'ip-accordion >>> .js-acc-button button',
    );
    const panel = await page.find('ip-accordion >>> .js-panel');

    await headerButton?.click();
    await page.waitForChanges();

    const visibleStyle = await panel?.getComputedStyle();
    expect(visibleStyle?.display).toBe('block');

    await headerButton?.click();
    await page.waitForChanges();

    const hiddenStyle = await panel?.getComputedStyle();
    expect(hiddenStyle?.display).toBe('none');
  });
});
