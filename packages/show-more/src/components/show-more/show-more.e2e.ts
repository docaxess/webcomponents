import { newE2EPage } from '@stencil/core/testing';

describe('ip-show-more', () => {
  it('should display "Show More" initially', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<ip-show-more><div slot="content">Here is the additional content.</div></ip-show-more>',
    );

    const button = await page.find('ip-show-more >>> button');
    expect(await button.textContent).toBe('Show More');
  });

  it('should display "Show Less" after clicking', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<ip-show-more><div slot="content">Here is the additional content.</div></ip-show-more>',
    );

    const button = await page.find('ip-show-more >>> button');
    await button.click();
    await page.waitForChanges();
    expect(await button.textContent).toBe('Show Less');
  });
  it('should toggle content visibility on button click', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<ip-show-more><div slot="content">Here is the additional content.</div></ip-show-more>',
    );

    const button = await page.find('ip-show-more >>> button');

    let content = await page.find('ip-show-more >>> .content');
    expect(content).toBeNull();

    await button.click();
    await page.waitForChanges();

    content = await page.find('ip-show-more >>> .content');
    expect(content).not.toBeNull();

    await button.click();
    await page.waitForChanges();

    content = await page.find('ip-show-more >>> .content');
    expect(content).toBeNull();
  });
});
