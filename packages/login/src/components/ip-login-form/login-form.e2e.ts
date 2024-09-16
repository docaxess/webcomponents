import { newE2EPage } from '@stencil/core/testing';

describe('ip-login', () => {
  it('renders and interacts correctly', async () => {
    const page = await newE2EPage();
    await page.setContent('<ip-login></ip-login>');

    const element = await page.find('ip-login');
    expect(element).not.toBeNull();

    const title = await page.find('ip-login >>> .title p');
    expect(title).not.toBeNull();
    expect(title.textContent).toBe('Login');

    const usernameInput = await page.find(
      'ip-login >>> input[name="username"]',
    );
    expect(usernameInput).not.toBeNull();
    await usernameInput.type('testuser');
    expect(await usernameInput.getProperty('value')).toBe('testuser');

    const passwordInput = await page.find(
      'ip-login >>> input[name="password"]',
    );
    expect(passwordInput).not.toBeNull();
    await passwordInput.type('TestPassword1');
    expect(await passwordInput.getProperty('value')).toBe('TestPassword1');

    const submitButton = await page.find('ip-login >>> button[type="submit"]');
    expect(submitButton).not.toBeNull();
    await submitButton.click();

    expect(await usernameInput.getProperty('value')).toBe('');
    expect(await passwordInput.getProperty('value')).toBe('');
  });
});
