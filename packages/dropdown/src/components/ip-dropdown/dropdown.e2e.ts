import { newE2EPage } from "@stencil/core/testing";

describe("ip-dropdown", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<ip-dropdown></ip-dropdown>");
    const element = await page.find("ip-dropdown");

    expect(element).toHaveClass("hydrated");
  });

  it("should have a dropdown title", async () => {
    const page = await newE2EPage();

    await page.setContent(
      "<ip-dropdown dropdown-title='Select an option'></ip-dropdown>"
    );
    const dropdownTitle = await page.find("ip-dropdown >>> .dropdown-title");

    expect(dropdownTitle.textContent).toBe("Select an option");
  });

  it("should have attribute aria-expanded when clicked", async () => {
    const page = await newE2EPage();

    await page.setContent("<ip-dropdown></ip-dropdown>");
    const dropdown = await page.find("ip-dropdown >>> .dropdown-content");

    expect(await dropdown.getAttribute("aria-expanded")).toBe("false");

    await dropdown.click();
    await page.waitForChanges();

    expect(await dropdown.getAttribute("aria-expanded")).toBe("true");
  });

  it("should display options when opened", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<ip-dropdown dropdown-title=\'Select an option\' items-options=\'["Option 1", "Option 2", "Option 3"]\'></ip-dropdown>'
    );

    const dropdownContent = await page.find(
      "ip-dropdown >>> .dropdown-content"
    );
    const dropdownArrow = await page.find("ip-dropdown >>> .dropdown-arrow");

    expect(await dropdownContent.getAttribute("aria-expanded")).toBe("false");

    await dropdownArrow.click();
    await page.waitForChanges();

    expect(await dropdownContent.getAttribute("aria-expanded")).toBe("true");

    const options = await page.findAll("ip-dropdown >>> .dropdown-list li");

    expect(options.length).toBe(3);

    expect(await options[0].textContent).toBe("Option 1");
    expect(await options[1].textContent).toBe("Option 2");
    expect(await options[2].textContent).toBe("Option 3");
  });

  it("should select item from dropdown", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<ip-dropdown dropdown-title=\'Select an option\' items-options=\'["Option 1", "Option 2", "Option 3"]\'></ip-dropdown>'
    );

    const dropdownContent = await page.find(
      "ip-dropdown >>> .dropdown-content"
    );
    const dropdownArrow = await page.find("ip-dropdown >>> .dropdown-arrow");

    await dropdownArrow.click();
    await page.waitForChanges();

    const option2 = await page.find(
      "ip-dropdown >>> .dropdown-list li:nth-child(2)"
    );
    await option2.click();
    await page.waitForChanges();

    const selectedOption = await page.find("ip-dropdown >>> .dropdown-head");

    expect(await selectedOption.textContent).toBe("Option 2");

    expect(await dropdownContent.getAttribute("aria-expanded")).toBe("false");
  });
});
