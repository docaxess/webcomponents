import { newE2EPage } from '@stencil/core/testing';

describe('ip-tooltip', () => {
  it('renders and toggles on click', async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ip-tooltip tooltip-trigger="Trigger Text" tooltip-content="Tooltip content"></ip-tooltip>`,
    );
    const tooltip = await page.find('ip-tooltip');
    const trigger = await page.find('ip-tooltip >>> .tooltip-trigger');

    await trigger.click();

    expect(tooltip).toHaveClass('hydrated');
    expect(trigger).toEqualAttribute('role', 'button');
  });

  it('renders tooltip trigger and content', async () => {
    const page = await newE2EPage();

    await page.setContent(`
        <ip-tooltip
          tooltip-content="Content of tooltip"
          tooltip-trigger="Trigger"
        ></ip-tooltip>
      `);

    const tooltip = await page.find('ip-tooltip');
    const trigger = await page.find('ip-tooltip >>> .tooltip-trigger');

    expect(tooltip).toHaveClass('hydrated');
    expect(trigger).toEqualText('Trigger');

    await trigger.hover();
    await page.waitForChanges();

    const tooltipContent = await page.find('ip-tooltip >>> .tooltip-content');

    expect(tooltipContent).toBeTruthy();
    expect(tooltipContent).toEqualText('Content of tooltip');
  });

  it('displays tooltip title if provided', async () => {
    const page = await newE2EPage();

    await page.setContent(`
        <ip-tooltip
          tooltip-content="Content of tooltip"
          tooltip-trigger="Trigger"
          tooltip-title="Tooltip Title"
          type="click"
        ></ip-tooltip>
      `);

    const trigger = await page.find('ip-tooltip >>> .tooltip-trigger');
    await trigger.click();
    await page.waitForChanges();

    const tooltipTitle = await page.find('ip-tooltip >>> .tooltip-title');

    expect(tooltipTitle).toBeTruthy();
    expect(tooltipTitle).toEqualText('Tooltip Title');
  });

  it('shows tooltip on hover', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ip-tooltip
        tooltip-content="Tooltip Content"
        tooltip-trigger="Trigger"
        tooltip-title="Title"
      ></ip-tooltip>
    `);

    const tooltipTrigger = await page.find('ip-tooltip >>> .tooltip-trigger');

    await tooltipTrigger.hover();
    await page.waitForChanges();

    const tooltipContent = await page.find('ip-tooltip >>> .tooltip-content');

    expect(tooltipContent).toBeTruthy();
  });

  it('closes tooltip on outside click', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <div id="outside-element">Outside Element</div>
      <ip-tooltip
        tooltip-content="Content of tooltip"
        tooltip-trigger="Trigger"
        tooltip-title="Tooltip Title"
        type="click"
      ></ip-tooltip>
    `);

    const tooltipTrigger = await page.find('ip-tooltip >>> .tooltip-trigger');

    await tooltipTrigger.click();
    await page.waitForChanges();

    const outsideElement = await page.find('#outside-element');
    await outsideElement.click();
    await page.waitForChanges();

    const tooltipContent = await page.find('ip-tooltip >>> .tooltip-content');

    expect(tooltipContent).not.toBeTruthy();
  });

  it('is accessible for screen readers', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ip-tooltip
        tooltip-content="Content of tooltip"
        tooltip-trigger="Trigger"
        tooltip-title="Tooltip Title"
      ></ip-tooltip>
    `);

    const tooltipTrigger = await page.find('ip-tooltip >>> .tooltip-trigger');

    expect(tooltipTrigger).toEqualAttribute('role', 'button');

    await tooltipTrigger.hover();
    await page.waitForChanges();

    const tooltipContent = await page.find('ip-tooltip >>> .tooltip-content');

    expect(await tooltipContent.getAttribute('aria-hidden')).toBe('false');
  });
});
