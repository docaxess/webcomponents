import { newE2EPage } from "@stencil/core/testing";

describe("ip-checkbox-list", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<ip-checkbox-list ></ip-checkbox-list>");
    const element = await page.find("ip-checkbox-list");

    expect(element).toHaveClass("hydrated");
  });
});
