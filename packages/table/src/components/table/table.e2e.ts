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
      <ip-table
        columns='[
          { "header": "Name" , "type": "string"},
          { "header": "Age", "type": "number" }
        ]'
        rows='[
          {"Name":"Alice", "Age":25},
          {"Name":"Bob", "Age":30}
        ]'
      ></ip-table>
    `);

    await page.waitForChanges();

    const headers = await page.findAll('ip-table >>> th');
    expect(headers).toHaveLength(2);
    expect(await headers[0].innerText).toBe('Name ');
    expect(await headers[1].innerText).toBe('Age ');

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
      <ip-table
        columns='[
          { "header": "Name" , "type": "string"},
          { "header": "Age", "type": "number" }
        ]'
        rows='[
          {"Name":"Alice", "Age":25},
          {"Name":"Bob", "Age":30}
        ]'
      ></ip-table>
    `);

    await page.waitForChanges();

    const nameHeaderButton = await page.find(
      'ip-table >>> th:nth-of-type(1) >>> button',
    );
    expect(nameHeaderButton).not.toBeNull();
    await nameHeaderButton.click();
    await page.waitForChanges();

    let sortedRows = await page.findAll('ip-table >>> tbody >>> tr');
    expect(await sortedRows[0].innerText).toContain('Alice');
    expect(await sortedRows[1].innerText).toContain('Bob');

    await nameHeaderButton.click();
    await page.waitForChanges();

    sortedRows = await page.findAll('ip-table >>> tbody >>> tr');
    expect(await sortedRows[0].innerText).toContain('Bob');
    expect(await sortedRows[1].innerText).toContain('Alice');
  });

  it('sorts numeric columns correctly', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ip-table
        columns='[
          { "header": "Name" , "type": "string"},
          { "header": "Age", "type": "number" }
        ]'
        rows='[
          {"Name":"Alice", "Age":25},
          {"Name":"Bob", "Age":30},
          {"Name":"Charlie", "Age":20}
        ]'
      ></ip-table>
    `);

    await page.waitForChanges();

    const ageHeaderButton = await page.find(
      'ip-table >>> th:nth-of-type(2) >>> button',
    );
    expect(ageHeaderButton).not.toBeNull();
    await ageHeaderButton.click();
    await page.waitForChanges();

    let sortedRows = await page.findAll('ip-table >>> tbody >>> tr');
    expect(await sortedRows[0].innerText).toContain('Charlie');
    expect(await sortedRows[1].innerText).toContain('Alice');
    expect(await sortedRows[2].innerText).toContain('Bob');

    await ageHeaderButton.click();
    await page.waitForChanges();

    sortedRows = await page.findAll('ip-table >>> tbody >>> tr');
    expect(await sortedRows[0].innerText).toContain('Bob');
    expect(await sortedRows[1].innerText).toContain('Alice');
    expect(await sortedRows[2].innerText).toContain('Charlie');
  });
});
