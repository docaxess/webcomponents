import { newSpecPage } from '@stencil/core/testing';
import { IpTooltip } from './tooltip';

describe('ip tooltip', () => {
  it('renders and shows content', async () => {
    const page = await newSpecPage({
      components: [IpTooltip],
      html: `
      <ip-tooltip  tooltip-trigger="Trigger Text" tooltip-content="tooltip-content"></ip-tooltip>
    `,
    });
    expect(page.root).toEqualHtml(`
      <ip-tooltip tooltip-trigger="Trigger Text" tooltip-content="tooltip-content" >
          <mock:shadow-root>
              <div class="tooltip-container">
                  <div class="tooltip-trigger" role="button" tabindex="0" aria-describedby="desc-tooltip" >Trigger Text</div>
              </div>
          </mock:shadow-root>
      </ip-tooltip>
      `);
    const tooltipTrigger = page.root.shadowRoot.querySelector(
      '.tooltip-trigger',
    ) as HTMLButtonElement;
    tooltipTrigger.focus();

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <ip-tooltip  tooltip-trigger="Trigger Text" tooltip-content="tooltip-content">
          <mock:shadow-root>
              <div class="tooltip-container">
                  <div class="tooltip-trigger" role="button" aria-describedby="desc-tooltip" tabindex="0" >Trigger Text</div>
                  <div aria-hidden="false" class="tooltip-content" id="desc-tooltip" role="tooltip">
                      <p>
                          tooltip-content
                      </p>
                      <div class="btn-inside"></div>
                  </div>
              </div>
          </mock:shadow-root>
      </ip-tooltip>
  `);
  });

  it('renders and shows title', async () => {
    const page = await newSpecPage({
      components: [IpTooltip],
      html: `
                <ip-tooltip tooltip-trigger="Trigger Text" tooltip-content="tooltip-content" tooltip-title="Title" type="click"></ip-tooltip>
            `,
    });
    expect(page.root).toEqualHtml(`
            <ip-tooltip tooltip-trigger="Trigger Text" tooltip-content="tooltip-content" tooltip-title="Title" type="click">
                <mock:shadow-root>
                    <div class="tooltip-container">
                        <div class="tooltip-trigger" role="button" tabindex="0" aria-describedby="desc-tooltip" >Trigger Text</div>
                    </div>
                </mock:shadow-root>
            </ip-tooltip>
            `);

    const tooltipTrigger = page.root.shadowRoot.querySelector(
      '.tooltip-trigger',
    ) as HTMLButtonElement;
    tooltipTrigger.click();
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
            <ip-tooltip tooltip-trigger="Trigger Text" tooltip-content="tooltip-content" tooltip-title="Title" type="click">
                <mock:shadow-root>
                    <div class="tooltip-container">
                        <div class="tooltip-trigger" role="button" tabindex="0" aria-describedby="desc-tooltip" >Trigger Text</div>
                        <div class="tooltip-content" role="tooltip" id="desc-tooltip" aria-hidden="false">
                            <h3 aria-label="Title" class="tooltip-title">Title</h3>
                            <p> tooltip-content </p>
                            <div class="btn-inside"></div>
                        </div>  
                    </div>
                </mock:shadow-root>
            </ip-tooltip>
        `);
  });

  it('renders and shows close button', async () => {
    const page = await newSpecPage({
      components: [IpTooltip],
      html: `
                <ip-tooltip tooltip-trigger="Trigger Text" type="click" tooltip-content="tooltip-content" tooltip-title="Title" tooltip-btn-close="true"></ip-tooltip>
            `,
    });

    expect(page.root).toEqualHtml(`
            <ip-tooltip tooltip-trigger="Trigger Text" tooltip-content="tooltip-content" tooltip-title="Title" tooltip-btn-close="true" type="click">
                <mock:shadow-root>
                    <div class="tooltip-container">
                        <div class="tooltip-trigger" role="button" tabindex="0" aria-describedby="desc-tooltip" >Trigger Text</div>
                    </div>    
                </mock:shadow-root>
            </ip-tooltip>
    `);

    const tooltipTrigger = page.root.shadowRoot.querySelector(
      '.tooltip-trigger',
    ) as HTMLButtonElement;
    tooltipTrigger.click();

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
            <ip-tooltip tooltip-trigger="Trigger Text" tooltip-content="tooltip-content" tooltip-title="Title" tooltip-btn-close="true" type="click">
                <mock:shadow-root>
                <div class="tooltip-container">
                    <div class="tooltip-trigger" role="button" tabindex="0" aria-describedby="desc-tooltip" >Trigger Text</div>
                    <div aria-hidden="false" class="tooltip-content" id="desc-tooltip" role="tooltip" aria-hidden="false">
                              <h3 class="tooltip-title" aria-label="Title">
                                Title
                              </h3>
                              <button aria-label="Close tooltip" class="close" role="button" tabindex="0">
                                <span>
                                  x
                                </span>
                              </button>
                              <p>
                                tooltip-content
                              </p>
                              <div class="btn-inside"></div>
                            </div>
                </div>    
                </mock:shadow-root>
            </ip-tooltip>
        `);
  });

  it('renders and has two buttons', async () => {
    const page = await newSpecPage({
      components: [IpTooltip],
      html: `
            <ip-tooltip tooltip-trigger="Trigger Text" tooltip-content="tooltip-content" type="click" tooltip-title="Title" tooltip-btn-close="true" tooltip-btn-1="Cancel" tooltip-btn-2="Learn More"></ip-tooltip>
        `,
    });

    expect(page.root).toEqualHtml(`
    <ip-tooltip tooltip-btn-close="true" tooltip-btn-1="Cancel" tooltip-btn-2="Learn More" type="click" tooltip-content="tooltip-content" tooltip-title="Title" tooltip-trigger="Trigger Text">
        <mock:shadow-root>
            <div class="tooltip-container">
                <div class="tooltip-trigger" role="button" tabindex="0" aria-describedby="desc-tooltip" >Trigger Text</div>
            </div>
        </mock:shadow-root>
    </ip-tooltip>
    `);

    const tooltipTrigger = page.root.shadowRoot.querySelector(
      '.tooltip-trigger',
    ) as HTMLButtonElement;

    tooltipTrigger.click();

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
            <ip-tooltip tooltip-btn-close="true" tooltip-btn-1="Cancel" tooltip-btn-2="Learn More" type="click" tooltip-content="tooltip-content" tooltip-title="Title" tooltip-trigger="Trigger Text">
                <mock:shadow-root>
                <div class="tooltip-container">
                    <div class="tooltip-trigger" role="button" tabindex="0" aria-describedby="desc-tooltip" >Trigger Text</div>
                    <div  class="tooltip-content" id="desc-tooltip" role="tooltip" aria-hidden="false">
                        <h3 class="tooltip-title" aria-label="Title">
                            Title
                        </h3>
                        <button aria-label="Close tooltip" class="close" role="button" tabindex="0">
                            <span>
                              x
                            </span>
                        </button>
                        <p>
                            tooltip-content
                        </p>
                        <div class="btn-inside">
                            <button class="cancel" role="button" tabindex="0">
                                Cancel
                            </button>
                            <button class="learn-more" role="button" tabindex="0">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
                </mock:shadow-root>
            </ip-tooltip>
    `);
  });
});
