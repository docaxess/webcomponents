import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ip-footnote',
  styleUrl: 'footnote.scss',
  shadow: true,
})
export class Footnote {
  @Prop() identifier = 'default-id';
  @Prop() btnAriaLabel = 'Back to main text';
  @Prop() text: string;
  @Prop() svgColor = 'grey';

  private generateUniqueId(): string {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return 'id-' + array[0].toString(36);
  }
  render() {
    const id = this.identifier || this.generateUniqueId();
    return (
      <div
        class="footnote"
        role="note"
        aria-labelledby={`footnote-label-${id}`}
      >
        <span id={`footnote-label-${id}`} class="footnote-id">
          [{id}]
        </span>
        <div class="text">
          <span class="footnote-text">{this.text}</span>
          <a href={`#ref${id}`} aria-label={this.btnAriaLabel}>
            <svg
              class="svg__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M22 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V22C0 22.5304 0.210714 23.0391 0.585786 23.4142C0.960859 23.7893 1.46957 24 2 24H22C22.5304 24 23.0391 23.7893 23.4142 23.4142C23.7893 23.0391 24 22.5304 24 22V2C24 1.46957 23.7893 0.960859 23.4142 0.585786C23.0391 0.210714 22.5304 0 22 0ZM22 22H2V2H22V22ZM7.2925 11.7075C7.19952 11.6146 7.12576 11.5043 7.07544 11.3829C7.02512 11.2615 6.99921 11.1314 6.99921 11C6.99921 10.8686 7.02512 10.7385 7.07544 10.6171C7.12576 10.4957 7.19952 10.3854 7.2925 10.2925L11.2925 6.2925C11.3854 6.19952 11.4957 6.12576 11.6171 6.07544C11.7385 6.02512 11.8686 5.99921 12 5.99921C12.1314 5.99921 12.2615 6.02512 12.3829 6.07544C12.5043 6.12576 12.6146 6.19952 12.7075 6.2925L16.7075 10.2925C16.8004 10.3854 16.8741 10.4957 16.9244 10.6171C16.9747 10.7385 17.0006 10.8686 17.0006 11C17.0006 11.1314 16.9747 11.2615 16.9244 11.3829C16.8741 11.5043 16.8004 11.6146 16.7075 11.7075C16.6146 11.8004 16.5043 11.8741 16.3829 11.9244C16.2615 11.9747 16.1314 12.0006 16 12.0006C15.8686 12.0006 15.7385 11.9747 15.6171 11.9244C15.4957 11.8741 15.3854 11.8004 15.2925 11.7075L13 9.41375V17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17V9.41375L8.7075 11.7075C8.61463 11.8005 8.50434 11.8742 8.38294 11.9246C8.26154 11.9749 8.13142 12.0008 8 12.0008C7.86858 12.0008 7.73846 11.9749 7.61706 11.9246C7.49566 11.8742 7.38537 11.8005 7.2925 11.7075Z"
                fill="var(--svg-color)"
              />
            </svg>
          </a>
        </div>
      </div>
    );
  }
}
