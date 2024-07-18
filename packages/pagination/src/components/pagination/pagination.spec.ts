import { newSpecPage } from '@stencil/core/testing';
import { Pagination } from './pagination';

describe('ip-pagination', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: '<ip-pagination></ip-pagination>',
    });
    expect(page.root).toEqualHtml(`
            <ip-pagination>
                <mock:shadow-root>
                    <nav aria-label="Pagination Navigation">
                        <ul>
                            <li><button class="first" aria-label="Go to the first page" title="First page" disabled=""><span aria-hidden="true">«</span><span class="sr-only">First page</span></button></li>
                            <li><button class="previous" aria-label="Go to the previous page" title="Previous page" disabled=""><span aria-hidden="true">‹</span><span class="sr-only">Previous page</span></button></li>
                            <li><button aria-label="Page 1" aria-current="page" class="current">1<span class="sr-only">Current page</span></button></li>
                            <li><button aria-label="Page 2" class="">2<span class="sr-only"></span></button></li>
                            <li><button aria-label="Page 3" class="">3<span class="sr-only"></span></button></li>
                            <li><button aria-label="Page 4" class="">4<span class="sr-only"></span></button></li>
                            <li><button aria-label="Page 5" class="">5<span class="sr-only"></span></button></li>
                            <li><button class="next" aria-label="Go to the next page" title="Next page"><span aria-hidden="true">›</span><span class="sr-only">Next page</span></button></li>
                            <li><button class="last" aria-label="Go to the last page" title="Last page"><span aria-hidden="true">»</span><span class="sr-only">Last page</span></button></li>
                        </ul>
                    </nav>
                </mock:shadow-root>
            </ip-pagination>
        `);
  });
  it('should have specific current page and total pages', async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: '<ip-pagination total-pages="8" current-page="5"></ip-pagination>',
    });
    expect(page.root).toEqualHtml(`
            <ip-pagination total-pages="8" current-page="5">
                <mock:shadow-root>
                    <nav aria-label="Pagination Navigation">
                        <ul>
                            <li><button class="first" aria-label="Go to the first page" title="First page"><span aria-hidden="true">«</span><span class="sr-only">First page</span></button></li>
                            <li><button class="previous" aria-label="Go to the previous page" title="Previous page"><span aria-hidden="true">‹</span><span class="sr-only">Previous page</span></button></li>
                            <li><button aria-label="Page 3" class="">3<span class="sr-only"></span></button></li>
                            <li><button aria-label="Page 4" class="">4<span class="sr-only"></span></button></li>
                            <li><button aria-label="Page 5" aria-current="page" class="current">5<span class="sr-only">Current page</span></button></li>
                            <li><button aria-label="Page 6" class="">6<span class="sr-only"></span></button></li>
                            <li><button aria-label="Page 7" class="">7<span class="sr-only"></span></button></li>
                            <li><button class="next" aria-label="Go to the next page" title="Next page"><span aria-hidden="true">›</span><span class="sr-only">Next page</span></button></li>
                            <li><button class="last" aria-label="Go to the last page" title="Last page"><span aria-hidden="true">»</span><span class="sr-only">Last page</span></button></li>
                        </ul>
                    </nav>
                </mock:shadow-root>
            </ip-pagination>
        `);
  });
});
