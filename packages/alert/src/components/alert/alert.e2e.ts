import { newE2EPage } from '@stencil/core/testing';

describe('ip-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ip-alert></ip-alert>');
    const element = await page.find('ip-alert');
    expect(element).toHaveClass('hydrated');
  });
  it('should render with the correct title and message', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<ip-alert alert-title="Test Title" message="Test Message"></ip-alert>',
    );
    const title = await page.find('ip-alert >>> .title');
    const message = await page.find('ip-alert >>> .message');
    expect(title.textContent).toEqual(' Test Title');
    expect(message.textContent).toEqual('Test Message');
  });
  it('should have a type attribute with value "info"', async () => {
    const page = await newE2EPage();
    await page.setContent('<ip-alert type="info"></ip-alert>');
    const alert = await page.find('ip-alert >>> .alert');
    const alertClass = await alert.getAttribute('class');
    expect(alertClass).toContain('alert-info');
  });

  it('should hide when the close button is clicked', async () => {
    const page = await newE2EPage();
    await page.setContent('<ip-alert></ip-alert>');
    const closeButton = await page.find('ip-alert >>> .close-button');
    await closeButton.click();
    await page.waitForChanges();
    const alert = await page.find('ip-alert');
    expect(alert).toHaveClass('hydrated');
    const hasContent = await page.evaluate(() => {
      const shadowRootElement = document.querySelector('ip-alert').shadowRoot;
      return shadowRootElement && shadowRootElement.querySelector('*') !== null;
    });
    expect(hasContent).toBe(false);
  });
});
