import { newE2EPage } from "@stencil/core/testing";

describe("ip-toggle", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<ip-toggle></ip-toggle>");
    const toggle = await page.find("ip-toggle");
    const button = await page.find("ip-toggle >>> input[type='checkbox']");

    expect(toggle).toHaveClass("hydrated");
    expect(button).toEqualAttribute("role", "switch");
  });

  it("renders changes when label change", async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<ip-toggle active-label="Oui" inactive-label="Non"></ip-toggle>',
    );
    const toggle = await page.find("ip-toggle");
    const paragraph = await page.find("ip-toggle >>> p");

    expect(paragraph.textContent).toEqual(`Non`);

    toggle.setProperty("inactiveLabel", "Nop");
    await page.waitForChanges();

    expect(paragraph.textContent).toEqual("Nop");
  });

  it("should be unchecked by default", async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<ip-toggle active-label="Oui" inactive-label="Non"></ip-toggle>',
    );
    const button = await page.find("ip-toggle >>> input[type='checkbox']");
    const paragraph = await page.find("ip-toggle >>> p");

    expect(button).toEqualAttribute("aria-checked", "false");
    expect(button).not.toHaveClass("active");
    expect(paragraph.textContent).toEqual(`Non`);
  });

  it("should be checked when clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<ip-toggle active-label="Oui" inactive-label="Non"></ip-toggle>',
    );
    const button = await page.find("ip-toggle >>> input[type='checkbox']");
    const paragraph = await page.find("ip-toggle >>> p");

    await button.click();
    await page.waitForChanges();

    expect(button).toEqualAttribute("aria-checked", "true");
    expect(button).toHaveClass("active");
    expect(paragraph.textContent).toEqual(`Oui`);
  });
});
