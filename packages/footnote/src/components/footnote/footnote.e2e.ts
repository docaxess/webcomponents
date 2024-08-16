import { newE2EPage } from '@stencil/core/testing';

describe('ip-footnote', () => {
  it('renders correctly', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<ip-footnote identifier="1" text="This is a footnote."></ip-footnote>',
    );

    const component = await page.find('ip-footnote');
    expect(component).toBeTruthy();

    await page.waitForSelector('ip-footnote');
    expect(await component.getAttribute('class')).toContain('hydrated');
  });
});
