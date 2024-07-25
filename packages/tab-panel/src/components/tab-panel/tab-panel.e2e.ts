import { newE2EPage } from '@stencil/core/testing';
describe('ip-tab-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<ip-tab-panel title-tag="h1" selected-tab="tab-content-1" tab-panel-title="Audit RGAA" tab-panel-headers=\'[{"title":"Accessibilité"}, {"title":"Pdf Document"}, {"title":"Statistical"}, {"title":"Certification"}, {"title":"Legislation"}]\'> </ip-tab-panel>',
    );
    const tabPanel = await page.find('ip-tab-panel');
    expect(tabPanel).toHaveClass('hydrated');
  });

  it('renders changes when tabPanelTitle change', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<ip-tab-panel title-tag="h1" selected-tab="tab-content-1" tab-panel-title="Audit RGAA" tab-panel-headers=\'[{"title":"Accessibilité"}, {"title":"Pdf Document"}, {"title":"Statistical"}, {"title":"Certification"}, {"title":"Legislation"}]\'> </ip-tab-panel>',
    );
    const tabPanel = await page.find('ip-tab-panel');
    const title = await page.find('ip-tab-panel >>> h1');
    expect(title.textContent).toEqual('Audit RGAA');
    tabPanel.setProperty('tabPanelTitle', 'New Title');
    await page.waitForChanges();
    expect(title.textContent).toEqual('New Title');
  });
});
