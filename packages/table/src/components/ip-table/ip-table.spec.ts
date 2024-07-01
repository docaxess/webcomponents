import { newSpecPage } from "@stencil/core/testing";
import { IpTable } from "./ip-table";

describe("ip-table", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [IpTable],
      html: `<ip-table></ip-table>`,
    });
    expect(page.root).toEqualHtml(`
      <ip-table>
        <mock:shadow-root>
          <table>
          <thead>
                <tr class="head">
                      <th>
                        <label htmlfor="">
                          Product Name
                        </label>
                        <button aria-label="Sort by name" aria-sort="ascending">
                          <svg aria-hidden="true" class="focus-style" fill="none" height="16" viewBox="0 0 17 16" width="17" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2545_1451)">
                              <path d="M13.9618 5.80875C13.924 5.71738 13.8599 5.63928 13.7777 5.58432C13.6955 5.52936 13.5988 5.50002 13.4999 5.5H3.49991C3.40096 5.49992 3.30421 5.5292 3.22191 5.58414C3.13962 5.63908 3.07547 5.71719 3.03759 5.8086C2.99972 5.90002 2.98982 6.00061 3.00914 6.09765C3.02847 6.1947 3.07615 6.28382 3.14616 6.35375L8.14616 11.3538C8.19259 11.4002 8.24774 11.4371 8.30844 11.4623C8.36913 11.4874 8.4342 11.5004 8.49991 11.5004C8.56561 11.5004 8.63068 11.4874 8.69138 11.4623C8.75207 11.4371 8.80722 11.4002 8.85366 11.3538L13.8537 6.35375C13.9236 6.28379 13.9711 6.19466 13.9904 6.09765C14.0096 6.00064 13.9997 5.9001 13.9618 5.80875Z" fill="white" transform="rotate(0 8.5 8)"></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_2545_1451">
                                <rect fill="white" height="16" rx="8" width="16" x="0.5"></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                      </th>
                      <th>
                        <label htmlfor="">
                          Product no.
                        </label>
                        <button aria-label="Sort by number" aria-sort="ascending">
                          <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 17 16" width="17" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2545_1451)">
                              <path d="M13.9618 5.80875C13.924 5.71738 13.8599 5.63928 13.7777 5.58432C13.6955 5.52936 13.5988 5.50002 13.4999 5.5H3.49991C3.40096 5.49992 3.30421 5.5292 3.22191 5.58414C3.13962 5.63908 3.07547 5.71719 3.03759 5.8086C2.99972 5.90002 2.98982 6.00061 3.00914 6.09765C3.02847 6.1947 3.07615 6.28382 3.14616 6.35375L8.14616 11.3538C8.19259 11.4002 8.24774 11.4371 8.30844 11.4623C8.36913 11.4874 8.4342 11.5004 8.49991 11.5004C8.56561 11.5004 8.63068 11.4874 8.69138 11.4623C8.75207 11.4371 8.80722 11.4002 8.85366 11.3538L13.8537 6.35375C13.9236 6.28379 13.9711 6.19466 13.9904 6.09765C14.0096 6.00064 13.9997 5.9001 13.9618 5.80875Z" fill="white" transform="rotate(0 8.5 8)"></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_2545_1451">
                                <rect fill="white" height="16" rx="8" width="16" x="0.5"></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                      </th>
                      <th>
                        <label htmlfor="">
                          Category
                        </label>
                        <button aria-label="Sort by category" aria-sort="ascending">
                          <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 17 16" width="17" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2545_1451)">
                              <path d="M13.9618 5.80875C13.924 5.71738 13.8599 5.63928 13.7777 5.58432C13.6955 5.52936 13.5988 5.50002 13.4999 5.5H3.49991C3.40096 5.49992 3.30421 5.5292 3.22191 5.58414C3.13962 5.63908 3.07547 5.71719 3.03759 5.8086C2.99972 5.90002 2.98982 6.00061 3.00914 6.09765C3.02847 6.1947 3.07615 6.28382 3.14616 6.35375L8.14616 11.3538C8.19259 11.4002 8.24774 11.4371 8.30844 11.4623C8.36913 11.4874 8.4342 11.5004 8.49991 11.5004C8.56561 11.5004 8.63068 11.4874 8.69138 11.4623C8.75207 11.4371 8.80722 11.4002 8.85366 11.3538L13.8537 6.35375C13.9236 6.28379 13.9711 6.19466 13.9904 6.09765C14.0096 6.00064 13.9997 5.9001 13.9618 5.80875Z" fill="white" transform="rotate(0 8.5 8)"></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_2545_1451">
                                <rect fill="white" height="16" rx="8" width="16" x="0.5"></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                      </th>
                      <th>
                        <label htmlfor="">
                          Price
                        </label>
                        <button aria-label="Sort by price" aria-sort="ascending">
                          <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 17 16" width="17" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2545_1451)">
                              <path d="M13.9618 5.80875C13.924 5.71738 13.8599 5.63928 13.7777 5.58432C13.6955 5.52936 13.5988 5.50002 13.4999 5.5H3.49991C3.40096 5.49992 3.30421 5.5292 3.22191 5.58414C3.13962 5.63908 3.07547 5.71719 3.03759 5.8086C2.99972 5.90002 2.98982 6.00061 3.00914 6.09765C3.02847 6.1947 3.07615 6.28382 3.14616 6.35375L8.14616 11.3538C8.19259 11.4002 8.24774 11.4371 8.30844 11.4623C8.36913 11.4874 8.4342 11.5004 8.49991 11.5004C8.56561 11.5004 8.63068 11.4874 8.69138 11.4623C8.75207 11.4371 8.80722 11.4002 8.85366 11.3538L13.8537 6.35375C13.9236 6.28379 13.9711 6.19466 13.9904 6.09765C14.0096 6.00064 13.9997 5.9001 13.9618 5.80875Z" fill="white" transform="rotate(0 8.5 8)"></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_2545_1451">
                                <rect fill="white" height="16" rx="8" width="16" x="0.5"></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                      </th>
                      <th>
                        <label htmlfor="">
                          Status
                        </label>
                        <button aria-label="Sort by status" aria-sort="ascending">
                          <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 17 16" width="17" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2545_1451)">
                              <path d="M13.9618 5.80875C13.924 5.71738 13.8599 5.63928 13.7777 5.58432C13.6955 5.52936 13.5988 5.50002 13.4999 5.5H3.49991C3.40096 5.49992 3.30421 5.5292 3.22191 5.58414C3.13962 5.63908 3.07547 5.71719 3.03759 5.8086C2.99972 5.90002 2.98982 6.00061 3.00914 6.09765C3.02847 6.1947 3.07615 6.28382 3.14616 6.35375L8.14616 11.3538C8.19259 11.4002 8.24774 11.4371 8.30844 11.4623C8.36913 11.4874 8.4342 11.5004 8.49991 11.5004C8.56561 11.5004 8.63068 11.4874 8.69138 11.4623C8.75207 11.4371 8.80722 11.4002 8.85366 11.3538L13.8537 6.35375C13.9236 6.28379 13.9711 6.19466 13.9904 6.09765C14.0096 6.00064 13.9997 5.9001 13.9618 5.80875Z" fill="white" transform="rotate(0 8.5 8)"></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_2545_1451">
                                <rect fill="white" height="16" rx="8" width="16" x="0.5"></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody></tbody>
          </table>
        </mock:shadow-root>
      </ip-table>
    `);
  });

  it("renders with options", async () => {
    const page = await newSpecPage({
      components: [IpTable],
      html: `<ip-table options='[
        {"name": "Product 1", "number": "1", "category": "Category 1", "price": 100, "status": "In Stock"},
        {"name": "Product 2", "number": "2", "category": "Category 2", "price": 200, "status": "Backorder"}
      ]'></ip-table>`,
    });
    expect(page.root).toEqualHtml(`
      <ip-table options='[
        {"name": "Product 1", "number": "1", "category": "Category 1", "price": 100, "status": "In Stock"},
        {"name": "Product 2", "number": "2", "category": "Category 2", "price": 200, "status": "Backorder"}
      ]'>
        <mock:shadow-root>
          <table>
            <thead>
              <tr class="head">
                <th>
                  <label htmlfor="">
                    Product Name
                  </label>
                  <button aria-label="Sort by name" aria-sort="ascending">
                    <svg aria-hidden="true" class="focus-style" fill="none" height="16" viewBox="0 0 17 16" width="17" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_2545_1451)">
                      <path d="M13.9618 5.80875C13.924 5.71738 13.8599 5.63928 13.7777 5.58432C13.6955 5.52936 13.5988 5.50002 13.4999 5.5H3.49991C3.40096 5.49992 3.30421 5.5292 3.22191 5.58414C3.13962 5.63908 3.07547 5.71719 3.03759 5.8086C2.99972 5.90002 2.98982 6.00061 3.00914 6.09765C3.02847 6.1947 3.07615 6.28382 3.14616 6.35375L8.14616 11.3538C8.19259 11.4002 8.24774 11.4371 8.30844 11.4623C8.36913 11.4874 8.4342 11.5004 8.49991 11.5004C8.56561 11.5004 8.63068 11.4874 8.69138 11.4623C8.75207 11.4371 8.80722 11.4002 8.85366 11.3538L13.8537 6.35375C13.9236 6.28379 13.9711 6.19466 13.9904 6.09765C14.0096 6.00064 13.9997 5.9001 13.9618 5.80875Z" fill="white" transform="rotate(0 8.5 8)"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_2545_1451">
                          <rect fill="white" height="16" rx="8" width="16" x="0.5"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </th>
                <th>
                  <label htmlfor="">
                    Product no.
                  </label>
                  <button aria-label="Sort by number" aria-sort="ascending">
                    <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 17 16" width="17" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_2545_1451)">
                        <path d="M13.9618 5.80875C13.924 5.71738 13.8599 5.63928 13.7777 5.58432C13.6955 5.52936 13.5988 5.50002 13.4999 5.5H3.49991C3.40096 5.49992 3.30421 5.5292 3.22191 5.58414C3.13962 5.63908 3.07547 5.71719 3.03759 5.8086C2.99972 5.90002 2.98982 6.00061 3.00914 6.09765C3.02847 6.1947 3.07615 6.28382 3.14616 6.35375L8.14616 11.3538C8.19259 11.4002 8.24774 11.4371 8.30844 11.4623C8.36913 11.4874 8.4342 11.5004 8.49991 11.5004C8.56561 11.5004 8.63068 11.4874 8.69138 11.4623C8.75207 11.4371 8.80722 11.4002 8.85366 11.3538L13.8537 6.35375C13.9236 6.28379 13.9711 6.19466 13.9904 6.09765C14.0096 6.00064 13.9997 5.9001 13.9618 5.80875Z" fill="white" transform="rotate(0 8.5 8)"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_2545_1451">
                          <rect fill="white" height="16" rx="8" width="16" x="0.5"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </th>
                <th>
                  <label htmlfor="">
                    Category
                  </label>
                  <button aria-label="Sort by category" aria-sort="ascending">
                    <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 17 16" width="17" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_2545_1451)">
                        <path d="M13.9618 5.80875C13.924 5.71738 13.8599 5.63928 13.7777 5.58432C13.6955 5.52936 13.5988 5.50002 13.4999 5.5H3.49991C3.40096 5.49992 3.30421 5.5292 3.22191 5.58414C3.13962 5.63908 3.07547 5.71719 3.03759 5.8086C2.99972 5.90002 2.98982 6.00061 3.00914 6.09765C3.02847 6.1947 3.07615 6.28382 3.14616 6.35375L8.14616 11.3538C8.19259 11.4002 8.24774 11.4371 8.30844 11.4623C8.36913 11.4874 8.4342 11.5004 8.49991 11.5004C8.56561 11.5004 8.63068 11.4874 8.69138 11.4623C8.75207 11.4371 8.80722 11.4002 8.85366 11.3538L13.8537 6.35375C13.9236 6.28379 13.9711 6.19466 13.9904 6.09765C14.0096 6.00064 13.9997 5.9001 13.9618 5.80875Z" fill="white" transform="rotate(0 8.5 8)"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_2545_1451">
                          <rect fill="white" height="16" rx="8" width="16" x="0.5"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </th>
                <th>
                  <label htmlfor="">
                    Price
                  </label>
                  <button aria-label="Sort by price" aria-sort="ascending">
                    <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 17 16" width="17" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_2545_1451)">
                        <path d="M13.9618 5.80875C13.924 5.71738 13.8599 5.63928 13.7777 5.58432C13.6955 5.52936 13.5988 5.50002 13.4999 5.5H3.49991C3.40096 5.49992 3.30421 5.5292 3.22191 5.58414C3.13962 5.63908 3.07547 5.71719 3.03759 5.8086C2.99972 5.90002 2.98982 6.00061 3.00914 6.09765C3.02847 6.1947 3.07615 6.28382 3.14616 6.35375L8.14616 11.3538C8.19259 11.4002 8.24774 11.4371 8.30844 11.4623C8.36913 11.4874 8.4342 11.5004 8.49991 11.5004C8.56561 11.5004 8.63068 11.4874 8.69138 11.4623C8.75207 11.4371 8.80722 11.4002 8.85366 11.3538L13.8537 6.35375C13.9236 6.28379 13.9711 6.19466 13.9904 6.09765C14.0096 6.00064 13.9997 5.9001 13.9618 5.80875Z" fill="white" transform="rotate(0 8.5 8)"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_2545_1451">
                          <rect fill="white" height="16" rx="8" width="16" x="0.5"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </th>
                <th>
                  <label htmlfor="">
                    Status
                  </label>
                  <button aria-label="Sort by status" aria-sort="ascending">
                    <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 17 16" width="17" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_2545_1451)">
                        <path d="M13.9618 5.80875C13.924 5.71738 13.8599 5.63928 13.7777 5.58432C13.6955 5.52936 13.5988 5.50002 13.4999 5.5H3.49991C3.40096 5.49992 3.30421 5.5292 3.22191 5.58414C3.13962 5.63908 3.07547 5.71719 3.03759 5.8086C2.99972 5.90002 2.98982 6.00061 3.00914 6.09765C3.02847 6.1947 3.07615 6.28382 3.14616 6.35375L8.14616 11.3538C8.19259 11.4002 8.24774 11.4371 8.30844 11.4623C8.36913 11.4874 8.4342 11.5004 8.49991 11.5004C8.56561 11.5004 8.63068 11.4874 8.69138 11.4623C8.75207 11.4371 8.80722 11.4002 8.85366 11.3538L13.8537 6.35375C13.9236 6.28379 13.9711 6.19466 13.9904 6.09765C14.0096 6.00064 13.9997 5.9001 13.9618 5.80875Z" fill="white" transform="rotate(0 8.5 8)"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_2545_1451">
                          <rect fill="white" height="16" rx="8" width="16" x="0.5"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Product 1</td>
                    <td>1</td>
                    <td>Category 1</td>
                    <td>$ 100</td>
                    <td>                  
                        <span class="status">
                            <svg aria-label="In Stock" class="status-svg" fill="#3CC13B" height="8" viewBox="0 0 8 8" width="8" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4"></circle>
                            </svg>
                            In Stock
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>Product 2</td>
                    <td>2</td>
                    <td>Category 2</td>
                    <td>$ 200</td>
                    <td>
                        <span class="status">
                        <svg aria-label="Backorder" class="red status-svg" fill="red" height="8" viewBox="0 0 8 8" width="8" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4"></circle>
                        </svg>
                         Backorder
                        </span>
                    </td>
                </tr>
            </tbody>
    </table>
  </mock:shadow-root>
</ip-table>
`);
  });
});
