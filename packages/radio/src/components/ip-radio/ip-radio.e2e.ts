import { newE2EPage } from '@stencil/core/testing';

describe('ip-radio', () => {
  it('renders correctly with default values', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ip-radio options='[{"id": "1", "label": "Option 1"}, {"id": "2", "label": "Option 2"}]'></ip-radio>
    `);

    const element = await page.find('ip-radio');
    expect(element).toHaveClass('hydrated');

    const radioInputs = await page.findAll('ip-radio >>> input');
    expect(radioInputs).toHaveLength(2);
    expect(radioInputs[0]).not.toBeNull();
    expect(radioInputs[1]).not.toBeNull();

    const labels = await page.findAll('ip-radio >>> label');
    expect(labels).toHaveLength(2);
    expect(await labels[0].getProperty('textContent')).toBe('Option 1');
    expect(await labels[1].getProperty('textContent')).toBe('Option 2');

    expect(await radioInputs[0].getProperty('value')).toBe('1');
    expect(await radioInputs[1].getProperty('value')).toBe('2');
  });

  it('emits selectionChanged event on option change', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ip-radio options='[{"id": "1", "label": "Option 1"}, {"id": "2", "label": "Option 2"}]'></ip-radio>
    `);

    const radioComponent = await page.find('ip-radio');
    const radioInput = await page.find('ip-radio >>> input');

    const selectionChanged =
      await radioComponent.spyOnEvent('selectionChanged');

    await radioInput.click();

    expect(selectionChanged).toHaveReceivedEventTimes(1);
    expect(selectionChanged).toHaveReceivedEventDetail({
      id: '1',
      label: 'Option 1',
    });
  });

  it('disables and does not emit selectionChanged event on disabled option', async () => {
    const page = await newE2EPage();
    await page.setContent(`
        <ip-radio options='[{"id": "1", "label": "Option 1"}, {"id": "2", "label": "Option 2", "disabled": true}]'></ip-radio>
      `);

    const radioComponent = await page.find('ip-radio');
    const disabledRadioInput = await page.find('ip-radio >>> input[disabled]');

    const selectionChanged =
      await radioComponent.spyOnEvent('selectionChanged');

    await disabledRadioInput.click();

    expect(selectionChanged).toHaveReceivedEventTimes(0);

    expect(await disabledRadioInput.getProperty('disabled')).toBe(true);

    expect(await disabledRadioInput.getProperty('checked')).toBe(false);
  });
  it('updates options and reflects changes', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ip-radio options='[{"id": "1", "label": "Option 1"}]'></ip-radio>
    `);

    let radioInputs = await page.findAll('ip-radio >>> input');
    expect(radioInputs).toHaveLength(1);

    await page.$eval('ip-radio', (element: any) => {
      element.options =
        '[{"id": "1", "label": "Option 1"}, {"id": "2", "label": "Option 2"}]';
    });
    await page.waitForChanges();

    radioInputs = await page.findAll('ip-radio >>> input');
    expect(radioInputs).toHaveLength(2);

    const labels = await page.findAll('ip-radio >>> label');
    expect(await labels[1].getProperty('textContent')).toBe('Option 2');
  });

  it('sets aria-checked attribute correctly', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ip-radio options='[{"id": "1", "label": "Option 1"}, {"id": "2", "label": "Option 2"}]'></ip-radio>
    `);

    const radioInputs = await page.findAll('ip-radio >>> input');
    expect(await radioInputs[0].getAttribute('aria-checked')).toBe('false');
    expect(await radioInputs[1].getAttribute('aria-checked')).toBe('false');

    await radioInputs[0].click();
    await page.waitForChanges();

    expect(await radioInputs[0].getAttribute('aria-checked')).toBe('true');
    expect(await radioInputs[1].getAttribute('aria-checked')).toBe('false');

    await radioInputs[1].click();
    await page.waitForChanges();

    expect(await radioInputs[0].getAttribute('aria-checked')).toBe('false');
    expect(await radioInputs[1].getAttribute('aria-checked')).toBe('true');
  });
});
