import {
  Component,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
  Watch,
  Element,
} from '@stencil/core';

@Component({
  tag: 'ip-pagination',
  styleUrl: 'pagination.scss',
  shadow: true,
})
export class Pagination {
  @Element() element: HTMLElement;

  @Prop() totalPages = 10;
  @Prop({ mutable: true }) currentPage = 1;
  @Prop() visiblePages = 5;

  @State() pages: number[] = [];

  @Event() pageChanged: EventEmitter<number>;

  @Watch('currentPage')
  handlePageChange(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.currentPage = newPage;
      this.updatePages();
      this.pageChanged.emit(newPage);
    }
  }

  @Watch('totalPages')
  handleTotalPagesChange() {
    if (this.totalPages < this.currentPage) {
      this.currentPage = this.totalPages;
    }
    this.updatePages();
  }

  componentWillLoad() {
    this.updatePages();
  }

  componentDidUpdate() {
    this.focusCurrentPage();
  }

  updatePages() {
    const totalVisiblePages = this.visiblePages;
    let startPage = Math.max(
      1,
      this.currentPage - Math.floor(totalVisiblePages / 2),
    );
    const endPage = Math.min(
      this.totalPages,
      startPage + totalVisiblePages - 1,
    );

    if (endPage - startPage + 1 < totalVisiblePages) {
      startPage = Math.max(1, endPage - totalVisiblePages + 1);
    }

    this.pages = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    );
  }

  handlePageClick(page: number) {
    if (page !== this.currentPage) {
      this.currentPage = page;
    }
  }

  handleNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  handlePrevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  handleFirstPage() {
    if (this.currentPage > 1) {
      this.currentPage = 1;
    }
  }

  handleLastPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.totalPages;
    }
  }

  private focusCurrentPage() {
    const currentButton = this.element.shadowRoot?.querySelector(
      'button.current',
    ) as HTMLButtonElement;
    currentButton?.focus();
  }

  render() {
    return (
      <nav aria-label="Pagination Navigation">
        <ul>
          <li>
            <button
              class="first"
              aria-label="Go to the first page"
              title="First page"
              onClick={() => this.handleFirstPage()}
              disabled={this.currentPage === 1}
            >
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">First page</span>
            </button>
          </li>
          <li>
            <button
              class="previous"
              aria-label="Go to the previous page"
              title="Previous page"
              onClick={() => this.handlePrevPage()}
              disabled={this.currentPage === 1}
            >
              <span aria-hidden="true">&lsaquo;</span>
              <span class="sr-only">Previous page</span>
            </button>
          </li>
          {this.pages.map((page) => (
            <li key={page}>
              <button
                aria-label={`Page ${page}`}
                aria-current={this.currentPage === page ? 'page' : undefined}
                class={this.currentPage === page ? 'current' : ''}
                onClick={() => this.handlePageClick(page)}
              >
                {page}
                <span class="sr-only">
                  {this.currentPage === page ? 'Current page' : ''}
                </span>
              </button>
            </li>
          ))}
          <li>
            <button
              class="next"
              aria-label="Go to the next page"
              title="Next page"
              onClick={() => this.handleNextPage()}
              disabled={this.currentPage === this.totalPages}
            >
              <span aria-hidden="true">&rsaquo;</span>
              <span class="sr-only">Next page</span>
            </button>
          </li>
          <li>
            <button
              class="last"
              aria-label="Go to the last page"
              title="Last page"
              onClick={() => this.handleLastPage()}
              disabled={this.currentPage === this.totalPages}
            >
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Last page</span>
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}
