import { newE2EPage } from '@stencil/core/testing';

describe('ip-pagination', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ip-pagination></ip-pagination>');

    const element = await page.find('ip-pagination');
    expect(element).toHaveClass('hydrated');
  });

  it('should navigate to the next page', async () => {
    const page = await newE2EPage();
    await page.setContent('<ip-pagination></ip-pagination>');

    const element = await page.find('ip-pagination');
    const nextButton = await page.find('ip-pagination >>> .next');

    await nextButton.click();
    await page.waitForChanges();

    const currentPage = await element.getProperty('currentPage');
    expect(currentPage).toBe(2);
  });
  it('should navigate to the previous page', async () => {
    const page = await newE2EPage();
    await page.setContent('<ip-pagination current-page=3></ip-pagination>');
    const element = await page.find('ip-pagination');
    const prevButton = await page.find('ip-pagination >>> .previous');

    await prevButton.click();
    await page.waitForChanges();

    const currentPage = await element.getProperty('currentPage');
    expect(currentPage).toBe(2);
  });

  it('should navigate to the last page and the first page', async () => {
    const page = await newE2EPage();
    await page.setContent('<ip-pagination></ip-pagination>');
    const element = await page.find('ip-pagination');
    const lastButton = await page.find('ip-pagination >>> .last');
    const firstButton = await page.find('ip-pagination >>> .first');

    await lastButton.click();
    await page.waitForChanges();
    const currentPage = await element.getProperty('currentPage');
    expect(currentPage).toBe(10);

    await firstButton.click();
    await page.waitForChanges();
    const currentPage2 = await element.getProperty('currentPage');
    expect(currentPage2).toBe(1);
  });
});
