import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ip-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: true,
})
export class BreadcrumbComponent {
  @Prop() breadcrumbTitle: string = '';
  @Prop() breadcrumbItems: string = '[]';
  @Prop() prefixAriaLabel: string = 'Link to';
  @Prop() separatorIcon: string = '>';

  private parseBreadcrumbItems() {
    try {
      return JSON.parse(this.breadcrumbItems);
    } catch (e) {
      console.error(
        'Invalid JSON string for breadcrumbItems:',
        this.breadcrumbItems,
      );
      return [];
    }
  }

  private handleKeydown(event: KeyboardEvent, link?: string) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (link) {
        window.location.href = link;
      }
    }
  }

  render() {
    const items = this.parseBreadcrumbItems();
    return (
      <div class="wrapper-title">
        {this.breadcrumbTitle && <h1>{this.breadcrumbTitle}</h1>}
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <ol class="breadcrumb">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li
                  class={{ 'breadcrumb-item': true, active: isLast }}
                  aria-current={isLast ? 'page' : undefined}
                  role={isLast ? 'none' : 'listitem'}
                >
                  {!isLast ? (
                    <a
                      href={item.link}
                      onKeyDown={(event) =>
                        this.handleKeydown(event, item.link)
                      }
                      aria-label={`${this.prefixAriaLabel} ${item.label}`}
                      role="link"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                  {!isLast && (
                    <span class="icon" innerHTML={this.separatorIcon}></span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    );
  }
}
