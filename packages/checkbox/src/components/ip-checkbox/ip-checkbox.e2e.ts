import { newE2EPage } from '@stencil/core/testing';

describe('ip-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ip-checkbox></ip-checkbox>');
    const element = await page.find('ip-checkbox');
    expect(element).toHaveClass('hydrated');
  });

  it("should have a type attribute with value 'checkbox'", async () => {
    const page = await newE2EPage();
    await page.setContent('<ip-checkbox></ip-checkbox>');
    const input = await page.find('ip-checkbox >>> input');
    expect(input).toEqualAttribute('type', 'checkbox');
  });

  it('should have attribute checked when clicked and should drop attribute checked when clicked again', async () => {
    const page = await newE2EPage();
    await page.setContent('<ip-checkbox></ip-checkbox>');
    const input = await page.find('ip-checkbox >>> input');
    expect(input).not.toHaveAttribute('checked');

    await input.click();
    await page.waitForChanges();
    expect(input).toHaveAttribute('checked');

    await input.click();
    await page.waitForChanges();
    expect(input).not.toHaveAttribute('checked');
  });

  it('should toggle the checked attribute when the space keyboard is pressed', async () => {
    const page = await newE2EPage();
    await page.setContent('<ip-checkbox></ip-checkbox>');
    const input = await page.find('ip-checkbox >>> input');
    expect(input).not.toHaveAttribute('checked');

    await input.focus();
    await page.waitForChanges();
    await input.press('Space');
    await page.waitForChanges();
    expect(input).toHaveAttribute('checked');
  });

  it('should render label properly', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<ip-checkbox identifier="firstCheckbox">Check me !</ip-checkbox>',
    );

    const input = await page.find('ip-checkbox >>> input');
    expect(input).toEqualAttribute('id', 'firstCheckbox');

    const label = await page.find('ip-checkbox >>> label');
    expect(label).toEqualAttribute('for', 'firstCheckbox');
  });
});
