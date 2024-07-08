import { newSpecPage } from '@stencil/core/testing';
import { IpRadio } from './ip-radio';

describe('IpRadio Component', () => {
  it('renders options correctly', async () => {
    const page = await newSpecPage({
      components: [IpRadio],
      html: `<ip-radio options='[{"id": "1", "label": "Option 1"}, {"id": "2", "label": "Option 2"}]'></ip-radio>`,
    });

    expect(page.root).toEqualHtml(`
      <ip-radio options='[{"id": "1", "label": "Option 1"}, {"id": "2", "label": "Option 2"}]'>
        <mock:shadow-root>
          <div class="container after">
            <div class="radio">
              <input type="radio" value="1" id="radio-1" name="radio1" aria-checked="false" aria-labelledby="label-radio-1">
              <div class="radio-background">
                <div class="outer-circle"></div>
                <div class="inner-circle"></div>
              </div>
            </div>
            <label id="label-radio-1" htmlfor="radio-1">Option 1</label>
          </div>
          <div class="container after">
            <div class="radio">
              <input type="radio" value="2" id="radio-2" name="radio2" aria-checked="false" aria-labelledby="label-radio-2">
              <div class="radio-background">
                <div class="outer-circle"></div>
                <div class="inner-circle"></div>
              </div>
            </div>
            <label id="label-radio-2" htmlfor="radio-2">Option 2</label>
          </div>
        </mock:shadow-root>
      </ip-radio>
    `);
  });
  it('emits selectionChanged event on option change', async () => {
    const page = await newSpecPage({
      components: [IpRadio],
      html: `<ip-radio options='[{"id": "1", "label": "Option 1"}, {"id": "2", "label": "Option 2"}]'></ip-radio>`,
    });

    const inputElements = page.root.shadowRoot.querySelectorAll('input');
    const eventSpy = jest.fn();
    page.root.addEventListener('selectionChanged', eventSpy);

    inputElements[0].dispatchEvent(new Event('change'));

    expect(eventSpy).toHaveBeenCalled();
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <ip-radio options='[{"id": "1", "label": "Option 1"}, {"id": "2", "label": "Option 2"}]'>
        <mock:shadow-root>
          <div class="container after">
            <div class="radio">
              <input type="radio" value="1" id="radio-1" name="radio1" aria-checked="true" aria-labelledby="label-radio-1" checked>
              <div class="radio-background">
                <div class="outer-circle"></div>
                <div class="inner-circle"></div>
              </div>
            </div>
            <label id="label-radio-1" htmlfor="radio-1">Option 1</label>
          </div>
          <div class="container after">
            <div class="radio">
              <input type="radio" value="2" id="radio-2" name="radio2" aria-checked="false" aria-labelledby="label-radio-2">
              <div class="radio-background">
                <div class="outer-circle"></div>
                <div class="inner-circle"></div>
              </div>
            </div>
            <label id="label-radio-2" htmlfor="radio-2">Option 2</label>
          </div>
        </mock:shadow-root>
      </ip-radio>
    `);
  });

  it('initializes selectedOption state to null', async () => {
    const page = await newSpecPage({
      components: [IpRadio],
      html: `<ip-radio options='[{"id": "1", "label": "Option 1"}]'></ip-radio>`,
    });

    expect(page.root).toEqualHtml(`
      <ip-radio options='[{"id": "1", "label": "Option 1"}]'>
        <mock:shadow-root>
          <div class="container after">
            <div class="radio">
              <input type="radio" value="1" id="radio-1" name="radio1" aria-checked="false" aria-labelledby="label-radio-1">
              <div class="radio-background">
                <div class="outer-circle"></div>
                <div class="inner-circle"></div>
              </div>
            </div>
            <label id="label-radio-1" htmlfor="radio-1">Option 1</label>
          </div>
        </mock:shadow-root>
      </ip-radio>
    `);

    expect(page.rootInstance.selectedOption).toBeNull();
  });

  it('passes accessibility standards', async () => {
    const page = await newSpecPage({
      components: [IpRadio],
      html: `<ip-radio options='[{"id": "1", "label": "Option 1"}, {"id": "2", "label": "Option 2"}]'></ip-radio>`,
    });

    const inputElements = page.root.shadowRoot.querySelectorAll('input');
    const labels = page.root.shadowRoot.querySelectorAll('label');

    inputElements.forEach((input, index) => {
      expect(input.getAttribute('id')).toBe(`radio-${index + 1}`);
      expect(labels[index].getAttribute('htmlFor')).toBe(`radio-${index + 1}`);
    });

    inputElements.forEach((input) => {
      input.click();
      expect(input.getAttribute('aria-checked')).toBe('false');
    });
  });
});
