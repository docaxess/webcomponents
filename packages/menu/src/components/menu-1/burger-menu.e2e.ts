import { newE2EPage } from '@stencil/core/testing';

describe('ip-burger-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ip-burger-menu></ip-burger-menu>');

    const element = await page.find('ip-burger-menu');
    expect(element).toHaveClass('hydrated');
  });

  it('has correct ARIA attributes on the menu button', async () => {
    const page = await newE2EPage();
    await page.setContent('<ip-burger-menu></ip-burger-menu>');

    const menuButton = await page.find('ip-burger-menu >>> .burger-menu-btn');
    expect(menuButton).toBeTruthy();
    expect(await menuButton.getAttribute('aria-label')).toBe('Open menu');
    expect(await menuButton.getAttribute('aria-controls')).toBe('burger-menu');
  });

  it('hides the menu initially', async () => {
    const page = await newE2EPage();
    await page.setContent('<ip-burger-menu></ip-burger-menu>');

    const menu = await page.find('ip-burger-menu >>> #burger-menu');
    expect(menu).toBeFalsy();
  });

  it('should show the menu when the button is clicked', async () => {
    const page = await newE2EPage();
    await page.setContent('<ip-burger-menu></ip-burger-menu>');

    const menuButton = await page.find('ip-burger-menu >>> .burger-menu-btn');
    await menuButton.click();
    await page.waitForChanges();

    const menu = await page.waitForSelector('ip-burger-menu >>> #burger-menu');
    expect(menu).toBeTruthy();
    expect(await menuButton.getAttribute('aria-expanded')).toBe('true');
  });

  it('hides the menu when the button is clicked again', async () => {
    const page = await newE2EPage();
    await page.setContent('<ip-burger-menu></ip-burger-menu>');

    const menuButton = await page.find('ip-burger-menu >>> .burger-menu-btn');
    await menuButton.click();
    await page.waitForChanges();

    const menuOpen = await page.find('ip-burger-menu >>> #burger-menu');
    expect(menuOpen).toBeTruthy();
    expect(await menuButton.getAttribute('aria-expanded')).toBe('true');

    await menuButton.click();
    await page.waitForChanges();

    const menuClosed = await page.find('ip-burger-menu >>> #burger-menu');
    expect(menuClosed).toBeFalsy();
    expect(await menuButton.getAttribute('aria-expanded')).toBe('false');
  });
});
