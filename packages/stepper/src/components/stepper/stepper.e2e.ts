import { newE2EPage } from '@stencil/core/testing';

describe('ip-stepper', () => {
  it('should render and display the initial step correctly', async () => {
    const page = await newE2EPage();

    await page.setContent('<ip-stepper steps="3"></ip-stepper>');

    const stepIndicator = await page.find(
      'ip-stepper >>> .step-indicator span',
    );

    expect(stepIndicator.textContent).toBe('Step 1 / 3');
  });

  it('should update the step when clicking continue button', async () => {
    const page = await newE2EPage();

    await page.setContent('<ip-stepper steps="3"></ip-stepper>');

    const continueButton = await page.find('ip-stepper >>> .continue-button');
    await continueButton.click();

    await page.waitForChanges();

    const stepIndicator = await page.find(
      'ip-stepper >>> .step-indicator span',
    );
    expect(stepIndicator.textContent).toBe('Step 2 / 3');
  });

  it('should show back button when not on the first step', async () => {
    const page = await newE2EPage();

    await page.setContent('<ip-stepper steps="3"></ip-stepper>');

    const continueButton = await page.find('ip-stepper >>> .continue-button');
    await continueButton.click();

    await page.waitForChanges();

    const backButton = await page.find('ip-stepper >>> .back-button');
    expect(backButton).not.toBeNull();
  });

  it('should hide back button on the first step', async () => {
    const page = await newE2EPage();

    await page.setContent('<ip-stepper steps="3"></ip-stepper>');

    const backButton = await page.find('ip-stepper >>> .back-button');
    expect(backButton).toBeNull();
  });

  it('should render step content correctly', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ip-stepper steps="2">
        <div slot="step1">Content for Step 1</div>
        <div slot="step2">Content for Step 2</div>
      </ip-stepper>
    `);

    let stepContent = await page.find('ip-stepper >>> .step-content');
    expect(stepContent.innerHTML).toContain('<slot name="step1"></slot>');

    const continueButton = await page.find('ip-stepper >>> .continue-button');
    await continueButton.click();

    await page.waitForChanges();

    stepContent = await page.find('ip-stepper >>> .step-content');
    expect(stepContent.innerHTML).toContain('<slot name="step2"></slot>');
  });
});
