import { newE2EPage } from "@stencil/core/testing";

describe("ip-tooltip", () => {
  it("renders and toggles on click", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<ip-tooltip tooltip-trigger="Trigger Text" tooltip-content="Tooltip content"></ip-tooltip>`
    );
    const tooltip = await page.find("ip-tooltip");
    const trigger = await page.find("ip-tooltip >>> .tooltip-trigger");

    await trigger.click();

    expect(tooltip).toHaveClass("hydrated");
    expect(trigger).toEqualAttribute("role", "button");
  });

  it("renders tooltip trigger and content", async () => {
    const page = await newE2EPage();

    await page.setContent(`
        <ip-tooltip
          tooltip-content="Contenu de l'info-bulle"
          tooltip-trigger="Trigger"
        ></ip-tooltip>
      `);

    const tooltip = await page.find("ip-tooltip");
    const trigger = await page.find("ip-tooltip >>> .tooltip-trigger");

    expect(tooltip).toHaveClass("hydrated");
    expect(trigger).toEqualText("Trigger");

    await trigger.click();
    await page.waitForChanges();

    const tooltipContent = await page.find("ip-tooltip >>> .tooltip-content");

    expect(tooltipContent).toBeTruthy();
    expect(tooltipContent).toEqualText("Contenu de l'info-bulle");
  });

  it("displays tooltip title if provided", async () => {
    const page = await newE2EPage();

    await page.setContent(`
        <ip-tooltip
          tooltip-content="Contenu de l'info-bulle"
          tooltip-trigger="Trigger"
          tooltip-title="Titre de l'info-bulle"
        ></ip-tooltip>
      `);

    const trigger = await page.find("ip-tooltip >>> .tooltip-trigger");
    await trigger.click();
    await page.waitForChanges();

    const tooltipTitle = await page.find("ip-tooltip >>> .tooltip-title");

    expect(tooltipTitle).toBeTruthy();
    expect(tooltipTitle).toEqualText("Titre de l'info-bulle");
  });

  it("shows tooltip on hover", async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ip-tooltip
        tooltip-content="Tooltip Content"
        tooltip-trigger="Trigger"
        tooltip-title="Title"
        hover-tooltip="true"
      ></ip-tooltip>
    `);

    const tooltipTrigger = await page.find("ip-tooltip >>> .tooltip-trigger");

    await tooltipTrigger.hover();
    await page.waitForChanges();

    const tooltipContent = await page.find("ip-tooltip >>> .tooltip-content");

    expect(tooltipContent).toBeTruthy();
  });

  it("closes tooltip on outside click", async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <div id="outside-element">Outside Element</div>
      <ip-tooltip
        tooltip-content="Contenu de l'info-bulle"
        tooltip-trigger="Trigger"
        tooltip-title="Titre de l'info-bulle"
      ></ip-tooltip>
    `);

    const tooltipTrigger = await page.find("ip-tooltip >>> .tooltip-trigger");

    // Ouvre l'info-bulle en cliquant sur le déclencheur
    await tooltipTrigger.click();
    await page.waitForChanges();

    // Clique à l'extérieur de l'info-bulle
    const outsideElement = await page.find("#outside-element");
    await outsideElement.click();
    await page.waitForChanges();

    const tooltipContent = await page.find("ip-tooltip >>> .tooltip-content");

    // Vérifie que l'info-bulle est fermée
    expect(tooltipContent).not.toBeTruthy();
  });
});
