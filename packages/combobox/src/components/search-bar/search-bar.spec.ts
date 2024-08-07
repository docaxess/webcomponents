import { newSpecPage } from '@stencil/core/testing';
import { IpSearchBar } from './search-bar';

describe('ip-search-bar', () => {
  it('renders correctly with default properties', async () => {
    const page = await newSpecPage({
      components: [IpSearchBar],
      html: `<ip-search-bar placeholder="Search..." label-button="Search" suggestions-data='[]'></ip-search-bar>`,
    });

    expect(page.root).toEqualHtml(`
      <ip-search-bar placeholder="Search..." label-button="Search" suggestions-data="[]">
        <mock:shadow-root>
          <div class="search-bar">
            <div class="input-wrapper">
              <div class="ico">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32" fill="black">
                  <path d="M28.7075 27.2925L22.4488 21.035C24.2628 18.8572 25.1674 16.0638 24.9743 13.236C24.7813 10.4081 23.5054 7.76361 21.4122 5.85251C19.319 3.9414 16.5696 2.91086 13.7359 2.97526C10.9023 3.03966 8.20249 4.19404 6.19827 6.19827C4.19404 8.20249 3.03966 10.9023 2.97526 13.7359C2.91086 16.5696 3.9414 19.319 5.85251 21.4122C7.76361 23.5054 10.4081 24.7813 13.236 24.9743C16.0638 25.1674 18.8572 24.2628 21.035 22.4488L27.2925 28.7075C27.3855 28.8005 27.4958 28.8742 27.6171 28.9244C27.7385 28.9747 27.8686 29.0006 28 29.0006C28.1314 29.0006 28.2615 28.9747 28.3829 28.9244C28.5043 28.8742 28.6146 28.8005 28.7075 28.7075C28.8005 28.6146 28.8742 28.5043 28.9244 28.3829C28.9747 28.2615 29.0006 28.1314 29.0006 28C29.0006 27.8686 28.9747 27.7385 28.9244 27.6171C28.8742 27.4958 28.8005 27.3855 28.7075 27.2925ZM5.00004 14C5.00004 12.22 5.52788 10.48 6.51681 8.99991C7.50575 7.51987 8.91136 6.36631 10.5559 5.68513C12.2004 5.00394 14.01 4.82571 15.7559 5.17297C17.5017 5.52024 19.1053 6.37741 20.364 7.63608C21.6227 8.89475 22.4798 10.4984 22.8271 12.2442C23.1744 13.9901 22.9961 15.7997 22.315 17.4442C21.6338 19.0887 20.4802 20.4943 19.0002 21.4833C17.5201 22.4722 15.7801 23 14 23C11.6139 22.9974 9.32626 22.0483 7.639 20.3611C5.95175 18.6738 5.00269 16.3862 5.00004 14Z" fill="black"/>
                </svg>
              </div>
              <div class="input">
                <input id="search-input" type="text" placeholder="Search..." aria-autocomplete="list" value="">
              </div>
              <div class="button">
                <button aria-label="Search">Search</button>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </ip-search-bar>
    `);
  });

  it('renders with suggestions', async () => {
    const page = await newSpecPage({
      components: [IpSearchBar],
      html: `<ip-search-bar placeholder="Search..." label-button="Search" suggestions-data='["Apple", "Banana", "Cherry"]'></ip-search-bar>`,
    });

    expect(page.root).toEqualHtml(`
      <ip-search-bar placeholder="Search..." label-button="Search" suggestions-data='["Apple", "Banana", "Cherry"]'>
        <mock:shadow-root>
         <div class="search-bar">
      <div class="input-wrapper">
        <div class="ico">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 32 32"
            fill="black"
          >
            <path
              d="M28.7075 27.2925L22.4488 21.035C24.2628 18.8572 25.1674 16.0638 24.9743 13.236C24.7813 10.4081 23.5054 7.76361 21.4122 5.85251C19.319 3.9414 16.5696 2.91086 13.7359 2.97526C10.9023 3.03966 8.20249 4.19404 6.19827 6.19827C4.19404 8.20249 3.03966 10.9023 2.97526 13.7359C2.91086 16.5696 3.9414 19.319 5.85251 21.4122C7.76361 23.5054 10.4081 24.7813 13.236 24.9743C16.0638 25.1674 18.8572 24.2628 21.035 22.4488L27.2925 28.7075C27.3855 28.8005 27.4958 28.8742 27.6171 28.9244C27.7385 28.9747 27.8686 29.0006 28 29.0006C28.1314 29.0006 28.2615 28.9747 28.3829 28.9244C28.5043 28.8742 28.6146 28.8005 28.7075 28.7075C28.8005 28.6146 28.8742 28.5043 28.9244 28.3829C28.9747 28.2615 29.0006 28.1314 29.0006 28C29.0006 27.8686 28.9747 27.7385 28.9244 27.6171C28.8742 27.4958 28.8005 27.3855 28.7075 27.2925ZM5.00004 14C5.00004 12.22 5.52788 10.48 6.51681 8.99991C7.50575 7.51987 8.91136 6.36631 10.5559 5.68513C12.2004 5.00394 14.01 4.82571 15.7559 5.17297C17.5017 5.52024 19.1053 6.37741 20.364 7.63608C21.6227 8.89475 22.4798 10.4984 22.8271 12.2442C23.1744 13.9901 22.9961 15.7997 22.315 17.4442C21.6338 19.0887 20.4802 20.4943 19.0002 21.4833C17.5201 22.4722 15.7801 23 14 23C11.6139 22.9974 9.32626 22.0483 7.639 20.3611C5.95175 18.6738 5.00269 16.3862 5.00004 14Z"
              fill="black"
            ></path>
          </svg>
        </div>
        <div class="input">
          <input
            id="search-input"
            type="text"
            placeholder="Search..."
            aria-autocomplete="list"
            value=""
          />
        </div>
        <div class="button"><button aria-label="Search">Search</button></div>
      </div>
    </div>
        </mock:shadow-root>
      </ip-search-bar>
    `);
  });
});
