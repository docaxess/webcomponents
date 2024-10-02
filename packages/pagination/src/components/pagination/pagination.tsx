import {
  Component,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
  Watch,
  Element,
  Listen,
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
  @Prop() firstPageAriaLabel = 'Go to the first page';
  @Prop() prevPageAriaLabel = 'Go to the previous page';
  @Prop() nextPageAriaLabel = 'Go to the next page';
  @Prop() lastPageAriaLabel = 'Go to the last page';

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
    this.updateVisiblePages();
    this.updatePages();
  }

  componentDidUpdate() {
    this.focusCurrentPage();
  }

  @Listen('resize', { target: 'window' })
  handleResize() {
    this.updateVisiblePages();
  }

  private updateVisiblePages() {
    const isMobile = window.matchMedia('(max-width: 460px)').matches;
    this.visiblePages = isMobile ? 3 : this.visiblePages;
    this.updatePages();
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
              part="first-btn"
              class="first"
              aria-label={this.firstPageAriaLabel}
              onClick={() => this.handleFirstPage()}
              disabled={this.currentPage === 1}
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          <li>
            <button
              part="prev-btn"
              class="previous"
              aria-label={this.prevPageAriaLabel}
              onClick={() => this.handlePrevPage()}
              disabled={this.currentPage === 1}
            >
              <span aria-hidden="true">&lsaquo;</span>
            </button>
          </li>
          {this.pages.map((page) => (
            <li key={page}>
              <button
                part="page-btn"
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
              part="next-btn"
              class="next"
              aria-label={this.nextPageAriaLabel}
              onClick={() => this.handleNextPage()}
              disabled={this.currentPage === this.totalPages}
            >
              <span aria-hidden="true">&rsaquo;</span>
            </button>
          </li>
          <li>
            <button
              part="last-btn"
              class="last"
              aria-label={this.lastPageAriaLabel}
              onClick={() => this.handleLastPage()}
              disabled={this.currentPage === this.totalPages}
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}
