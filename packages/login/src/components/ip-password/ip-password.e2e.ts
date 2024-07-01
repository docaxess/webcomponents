import { newE2EPage } from "@stencil/core/testing";

describe("ip-password", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<ip-password></ip-password>");
    const password = await page.find("ip-password");
    const input = await page.find("ip-password >>> input");

    expect(password).toHaveClass("hydrated");
    expect(input).toEqualAttribute("type", "password");
  });

  it("toogles password visibility", async () => {
    const page = await newE2EPage();
    await page.setContent("<ip-password></ip-password>");
    const password = await page.find("ip-password");
    const input = await page.find("ip-password >>> input");
    const button = await page.find("ip-password >>> button");

    expect(password).toHaveClass("hydrated");
    expect(input).toEqualAttribute("type", "password");

    await button.click();
    await page.waitForChanges();

    expect(input).toEqualAttribute("type", "text");

    await button.click();
    await page.waitForChanges();

    expect(input).toEqualAttribute("type", "password");
  });
});
