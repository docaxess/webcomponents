import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'ip-show-more',
  styleUrl: 'show-more.scss',
  shadow: true,
})
export class ShowMoreButton {
  @State() isExpanded = false;
  @Prop() svgColor = 'white';
  @Prop() showMoreText = 'Show More';
  @Prop() showLessText = 'Show Less';

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  render() {
    const arrowUp = (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M19.2806 14.0306L12.5306 20.7806C12.461 20.8504 12.3782 20.9057 12.2872 20.9434C12.1961 20.9812 12.0986 21.0006 12 21.0006C11.9014 21.0006 11.8038 20.9812 11.7128 20.9434C11.6217 20.9057 11.539 20.8504 11.4694 20.7806L4.71936 14.0306C4.57863 13.8899 4.49957 13.699 4.49957 13.5C4.49957 13.301 4.57863 13.1101 4.71936 12.9694C4.8601 12.8286 5.05097 12.7496 5.24999 12.7496C5.44901 12.7496 5.63988 12.8286 5.78061 12.9694L11.25 18.4397V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V18.4397L18.2194 12.9694C18.3601 12.8286 18.551 12.7496 18.75 12.7496C18.949 12.7496 19.1399 12.8286 19.2806 12.9694C19.4213 13.1101 19.5004 13.301 19.5004 13.5C19.5004 13.699 19.4213 13.8899 19.2806 14.0306Z"
          fill="currentColor"
        />
      </svg>
    );

    const arrowDown = (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M19.2806 11.0307C19.211 11.1005 19.1283 11.1558 19.0372 11.1935C18.9462 11.2313 18.8486 11.2507 18.75 11.2507C18.6514 11.2507 18.5538 11.2313 18.4628 11.1935C18.3717 11.1558 18.289 11.1005 18.2194 11.0307L12.75 5.56041V20.2501C12.75 20.449 12.671 20.6398 12.5303 20.7804C12.3897 20.9211 12.1989 21.0001 12 21.0001C11.8011 21.0001 11.6103 20.9211 11.4697 20.7804C11.329 20.6398 11.25 20.449 11.25 20.2501V5.56041L5.78063 11.0307C5.6399 11.1715 5.44903 11.2505 5.25 11.2505C5.05098 11.2505 4.86011 11.1715 4.71938 11.0307C4.57865 10.89 4.49959 10.6991 4.49959 10.5001C4.49959 10.3011 4.57865 10.1102 4.71938 9.96948L11.4694 3.21948C11.539 3.14974 11.6218 3.09443 11.7128 3.05668C11.8038 3.01894 11.9014 2.99951 12 2.99951C12.0986 2.99951 12.1962 3.01894 12.2872 3.05668C12.3783 3.09443 12.461 3.14974 12.5306 3.21948L19.2806 9.96948C19.3504 10.0391 19.4057 10.1218 19.4434 10.2129C19.4812 10.3039 19.5006 10.4015 19.5006 10.5001C19.5006 10.5987 19.4812 10.6963 19.4434 10.7873C19.4057 10.8784 19.3504 10.9611 19.2806 11.0307Z"
          fill="currentColor"
        />
      </svg>
    );

    return (
      <div class="container">
        {this.isExpanded && (
          <div class="content" id="expandable-content">
            <slot name="content"></slot>
          </div>
        )}
        <div class="button-container">
          <button
            onClick={() => this.toggle()}
            style={{ '--svg-color': this.svgColor }}
            aria-label={this.isExpanded ? this.showLessText : this.showMoreText}
            aria-controls="expandable-content"
            aria-expanded={this.isExpanded.toString()}
          >
            {this.isExpanded ? this.showLessText : this.showMoreText}
            {this.isExpanded ? arrowDown : arrowUp}
          </button>
        </div>
      </div>
    );
  }
}
