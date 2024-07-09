// ip-table.e2e.ts

import { newE2EPage } from '@stencil/core/testing';

describe('ip-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ip-table></ip-table>');

    const element = await page.find('ip-table');
    expect(element).toHaveClass('hydrated');
  });

  it('renders table with headers and rows', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ip-table thead='[{"header": "Name", "type": "string"}, {"header": "Age", "type": "number"}]'
                tbody='[["Alice", "25"], ["Bob", "30"]]'></ip-table>
    `);

    await page.waitForChanges();

    const headers = await page.findAll('ip-table >>> th');
    expect(headers).toHaveLength(2);
    expect(await headers[0].innerText).toBe('Name');
    expect(await headers[1].innerText).toBe('Age');

    const rows = await page.findAll('ip-table >>> tbody >>> tr');
    expect(rows).toHaveLength(2);
    expect(await rows[0].innerText).toContain('Alice');
    expect(await rows[0].innerText).toContain('25');
    expect(await rows[1].innerText).toContain('Bob');
    expect(await rows[1].innerText).toContain('30');
  });

  it('sorts columns correctly', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ip-table thead='[{"header": "Name", "type": "string"}, {"header": "Age", "type": "number"}]'
                tbody='[["Alice", "25"], ["Bob", "30"]]'></ip-table>
    `);

    await page.waitForChanges();

    const nameHeader = await page.find(
      'ip-table >>> th:first-of-type >>> button',
    );
    expect(nameHeader).not.toBeNull();

    await nameHeader.click();

    await page.waitForChanges();

    const sortedRows = await page.findAll('ip-table >>> tbody >>> tr');
    expect(await sortedRows[0].innerText).toContain('Alice');
    expect(await sortedRows[1].innerText).toContain('Bob');

    await nameHeader.click();

    await page.waitForChanges();

    const reverseSortedRows = await page.findAll('ip-table >>> tbody >>> tr');
    expect(await reverseSortedRows[0].innerText).toContain('Bob');
    expect(await reverseSortedRows[1].innerText).toContain('Alice');
  });
});
