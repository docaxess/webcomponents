import { newE2EPage } from '@stencil/core/testing';

describe('ip-breadcrumb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ip-breadcrumb></ip-breadcrumb>');
    const element = await page.find('ip-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });

  it('renders breadcrumb title with correct attributes', async () => {
    const page = await newE2EPage();
    await page.setContent(`
        <ip-breadcrumb
          breadcrumb-title="Bread"
          breadcrumb-items='[
            {"label": "Home", "link": "/home"},
            {"label": "Category", "link": "/Category"},
            {"label": "Item"}
          ]'
        ></ip-breadcrumb>
      `);

    const breadcrumbTitle = await page.find(
      'ip-breadcrumb >>> h1[part="title"]',
    );
    expect(breadcrumbTitle).toEqualText('Bread');
    expect(breadcrumbTitle).toEqualAttribute('part', 'title');
  });

  it('renders breadcrumb items correctly', async () => {
    const page = await newE2EPage();
    await page.setContent(`
        <ip-breadcrumb
          breadcrumb-title="Bread"
          breadcrumb-items='[
            {"label": "Home", "link": "/home"},
            {"label": "Category", "link": "/Category"},
            {"label": "Item"}
          ]'
        ></ip-breadcrumb>
      `);

    const breadcrumbItems = await page.findAll(
      'ip-breadcrumb >>> .breadcrumb-item',
    );
    expect(breadcrumbItems.length).toBe(3);

    const firstItem = await breadcrumbItems[0].find('a');
    expect(firstItem).toEqualText('Home');
    expect(firstItem).toEqualAttribute('href', '/home');

    const secondItem = await breadcrumbItems[1].find('a');
    expect(secondItem).toEqualText('Category');
    expect(secondItem).toEqualAttribute('href', '/Category');

    const thirdItem = await breadcrumbItems[2].find('span');
    expect(thirdItem).toEqualText('Item');
  });
});
