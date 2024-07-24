import { newE2EPage } from '@stencil/core/testing';

describe('ip-email', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ip-email></ip-email>');
    const email = await page.find('ip-email');
    const input = await page.find('ip-email >>> input');

    expect(email).toHaveClass('hydrated');
    expect(input).toEqualAttribute('type', 'email');
  });

  it('renders with values', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<ip-email input-label="Username" required></ip-email>',
    );
    const email = await page.find('ip-email');
    const label = await page.find('ip-email >>> label');

    expect(email).toHaveClass('hydrated');
    expect(label.textContent).toEqual('Username*');
  });
});
