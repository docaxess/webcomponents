import { newSpecPage } from '@stencil/core/testing';
import { ShowMoreButton } from './show-more';

describe('ip-show-more', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ShowMoreButton],
      html: `<ip-show-more></ip-show-more>`,
    });
    expect(page.root).toEqualHtml(`
        <ip-show-more>
        <mock:shadow-root>
            <div class="container">
                <div class="button-container">
                    <button aria-label="Show More" style="--svg-color: white;">
                        Show More
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.2806 14.0306L12.5306 20.7806C12.461 20.8504 12.3782 20.9057 12.2872 20.9434C12.1961 20.9812 12.0986 21.0006 12 21.0006C11.9014 21.0006 11.8038 20.9812 11.7128 20.9434C11.6217 20.9057 11.539 20.8504 11.4694 20.7806L4.71936 14.0306C4.57863 13.8899 4.49957 13.699 4.49957 13.5C4.49957 13.301 4.57863 13.1101 4.71936 12.9694C4.8601 12.8286 5.05097 12.7496 5.24999 12.7496C5.44901 12.7496 5.63988 12.8286 5.78061 12.9694L11.25 18.4397V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V18.4397L18.2194 12.9694C18.3601 12.8286 18.551 12.7496 18.75 12.7496C18.949 12.7496 19.1399 12.8286 19.2806 12.9694C19.4213 13.1101 19.5004 13.301 19.5004 13.5C19.5004 13.699 19.4213 13.8899 19.2806 14.0306Z" 
                        fill="currentColor"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </mock:shadow-root>
        </ip-show-more>
     `);
  });
  it('renders with content', async () => {
    const page = await newSpecPage({
      components: [ShowMoreButton],
      html: `<ip-show-more><div slot="content">Here is the additional content.</div></ip-show-more>`,
    });
    expect(page.root).toEqualHtml(`
        <ip-show-more>
        <mock:shadow-root>
            <div class="container">
                <div class="button-container">
                    <button aria-label="Show More" style="--svg-color: white;">
                        Show More
                       <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.2806 14.0306L12.5306 20.7806C12.461 20.8504 12.3782 20.9057 12.2872 20.9434C12.1961 20.9812 12.0986 21.0006 12 21.0006C11.9014 21.0006 11.8038 20.9812 11.7128 20.9434C11.6217 20.9057 11.539 20.8504 11.4694 20.7806L4.71936 14.0306C4.57863 13.8899 4.49957 13.699 4.49957 13.5C4.49957 13.301 4.57863 13.1101 4.71936 12.9694C4.8601 12.8286 5.05097 12.7496 5.24999 12.7496C5.44901 12.7496 5.63988 12.8286 5.78061 12.9694L11.25 18.4397V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V18.4397L18.2194 12.9694C18.3601 12.8286 18.551 12.7496 18.75 12.7496C18.949 12.7496 19.1399 12.8286 19.2806 12.9694C19.4213 13.1101 19.5004 13.301 19.5004 13.5C19.5004 13.699 19.4213 13.8899 19.2806 14.0306Z" 
                        fill="currentColor"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </mock:shadow-root>
            <div slot="content">
                Here is the additional content.
            </div>
        </ip-show-more>
     `);
  });
});
