import { newE2EPage } from '@stencil/core/testing';

describe('ip-show-more', () => {
  it('should display "Show More" initially', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<ip-show-more><div slot="content">Here is the additional content.</div></ip-show-more>',
    );

    // Trouver le bouton
    const button = await page.find('ip-show-more >>> button');
    expect(await button.textContent).toBe('Show More');
  });

  it('should display "Show Less" after clicking', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<ip-show-more><div slot="content">Here is the additional content.</div></ip-show-more>',
    );

    // Trouver le bouton
    const button = await page.find('ip-show-more >>> button');
    await button.click();
    await page.waitForChanges();
    expect(await button.textContent).toBe('Show Less');
  });
  it('should toggle content visibility on button click', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<ip-show-more><div slot="content">Here is the additional content.</div></ip-show-more>',
    );

    // Trouver le bouton
    const button = await page.find('ip-show-more >>> button');

    // Vérifier que le contenu est caché initialement
    let content = await page.find('ip-show-more >>> .content');
    expect(content).toBeNull();

    // Cliquer sur le bouton pour afficher le contenu
    await button.click();
    await page.waitForChanges();

    // // Vérifier que le contenu est maintenant visible
    content = await page.find('ip-show-more >>> .content');
    expect(content).not.toBeNull();

    // Cliquer sur le bouton pour masquer le contenu
    await button.click();
    await page.waitForChanges();

    // Vérifier que le contenu est de nouveau caché
    content = await page.find('ip-show-more >>> .content');
    expect(content).toBeNull();
  });
});
