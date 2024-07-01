import { newE2EPage } from "@stencil/core/testing";

describe("ip-table", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<ip-table></ip-table>");

    const element = await page.find("ip-table");
    expect(element).toHaveClass("hydrated");
  });

  it("renders and displays products", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ip-table 
      state-1="Available"
      state-2="Unavailable"
      options='[
        {"name": "Product 1", "number": "1", "category": "Category 1", "price": 100, "status": "Available"},
        {"name": "Product 2", "number": "2", "category": "Category 2", "price": 200, "status": "Unavailable"}
      ]'></ip-table>
    `);

    const table = await page.find("ip-table >>> table");
    expect(table).not.toBeNull();

    const rows = await page.findAll("ip-table >>> table tbody tr");
    expect(rows.length).toBe(2);

    const firstRowColumns = await rows[0].findAll("td");
    expect(firstRowColumns.length).toBe(5);
    expect(await firstRowColumns[0].innerText).toBe("Product 1");
    expect(await firstRowColumns[1].innerText).toBe("1");
    expect(await firstRowColumns[2].innerText).toBe("Category 1");
    expect(await firstRowColumns[3].innerText).toBe("$ 100");
    expect(await firstRowColumns[4].innerText).toBe("Available");
  });

  it("sorts products by name", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ip-table options='[
        {"name": "Product B", "number": 1, "category": "Category 1", "price": 100, "status": "In Stock"},
        {"name": "Product A", "number": 2, "category": "Category 2", "price": 200, "status": "Backorder"}
      ]'></ip-table>
    `);

    const nameSortButton = await page.find(
      "ip-table >>> table thead th button"
    );
    await nameSortButton.click();

    const rows = await page.findAll("ip-table >>> table tbody tr");
    const firstRowColumns = await rows[0].findAll("td");
    expect(await firstRowColumns[0].innerText).toBe("Product A");
  });

  it("displays correct status SVG", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ip-table options='[
        {"name": "Product 1", "number": 1, "category": "Category 1", "price": 100, "status": "In Stock"}
      ]'></ip-table>
    `);

    const statusSvg = await page.find(
      "ip-table >>> table tbody tr td .status-svg"
    );
    expect(statusSvg).toHaveClass("status-svg");
  });
});
