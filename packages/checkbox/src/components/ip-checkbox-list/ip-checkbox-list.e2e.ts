import { newE2EPage } from '@stencil/core/testing';

describe('ip-checkbox-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ip-checkbox-list ></ip-checkbox-list>');
    const element = await page.find('ip-checkbox-list');

    expect(element).toHaveClass('hydrated');
  });

  it('renders and simulate click', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ip-checkbox-list
        options='[
          {"id": "1", "label": "Option 1"},
          {"id": "2", "label": "Option 2"}
        ]'
      ></ip-checkbox-list>
    `);

    await page.$eval('ip-checkbox-list', (component: any) => {
      const input = component.shadowRoot.querySelector('input[id="2"]') as HTMLInputElement;
      input.click();
    });

    await page.waitForChanges();

    const isChecked = await page.$eval('ip-checkbox-list', (component: any) => {
      const input = component.shadowRoot.querySelector('input[id="2"]') as HTMLInputElement;
      return input.checked;
    });
    expect(isChecked).toBe(true);

    await page.$eval('ip-checkbox-list', (component: any) => {
      const input = component.shadowRoot.querySelector('input[id="1"]') as HTMLInputElement;
      input.click();
    });
    await page.waitForChanges();
      const isChecked1 = await page.$eval('ip-checkbox-list', (component: any) => {
      const input = component.shadowRoot.querySelector('input[id="1"]') as HTMLInputElement;
      return input.checked;
      });
    expect(isChecked1).toBe(true);
    expect(isChecked).toBe(true);
  });
});
