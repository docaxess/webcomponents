import { Component, h, Prop, State, Element } from '@stencil/core';

export interface MenuItem {
  label: string;
  href?: string;
  disabled?: boolean;
}

@Component({
  tag: 'ip-burger-menu',
  styleUrl: 'burger-menu.scss',
  shadow: true,
})
export class IpBurgerMenu {
  @Element() el: HTMLElement;
  @Prop() openMenuAriaLabel = 'Open menu';
  @Prop() closeMenuAriaLabel = 'Close menu';
  @Prop() pathToCloseIcon = '../../assets/images/x-icon.svg';
  @Prop() pathToOpenIcon = '../../assets/images/icon-list.svg';
  @Prop() pathToArrowRightIcon = '../../assets/images/arrow-right.svg';
  @Prop() menuData: string;
  @Prop() items: MenuItem[] = [];

  @State() isOpen = false;
  @State() openSubMenu: string | null = null;
  menuButton: HTMLButtonElement;

  componentWillLoad() {
    if (this.menuData) {
      try {
        this.items = JSON.parse(this.menuData);
      } catch (error) {
        console.error('Invalid menuData JSON:', error);
      }
    }
  }
  componentDidLoad() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  toggleSubMenu(label: string) {
    this.openSubMenu = this.openSubMenu === label ? null : label;
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.isOpen = false;
      this.menuButton.focus();
    }
  }
  handleLinkKeyDown(event: KeyboardEvent, href?: string) {
    if ((event.key === 'Enter' || event.key === ' ') && href) {
      event.preventDefault();
      window.location.href = href;
    }
  }

  render() {
    return (
      <nav
        id="navigation"
        aria-label="Main Navigation"
        role="navigation"
        part="nav-bar"
      >
        <div class={`head ${this.isOpen ? 'open' : ''}`}>
          <div class="logo">
            <slot name="left-head-content"></slot>
          </div>
          <div class="right-head-content">
            <div class="button">
              <slot name="before-toggle-menu-content"></slot>
            </div>
            <div class="toggle-burger-menu">
              <button
                part="toggle-menu-btn"
                ref={(el) => (this.menuButton = el as HTMLButtonElement)}
                aria-label={
                  this.isOpen ? this.closeMenuAriaLabel : this.openMenuAriaLabel
                }
                aria-controls="burger-menu"
                aria-expanded={this.isOpen ? 'true' : 'false'}
                class="burger-menu-btn"
                onClick={() => this.toggleMenu()}
                onKeyDown={(event) => this.handleKeyDown(event)}
              >
                {this.isOpen ? (
                  <img
                    class="svg-icon"
                    src={this.pathToCloseIcon}
                    alt={this.closeMenuAriaLabel}
                  />
                ) : (
                  <img
                    class="svg-icon"
                    src={this.pathToOpenIcon}
                    alt={this.openMenuAriaLabel}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        {this.isOpen ? (
          <div
            id="burger-menu"
            class={`burger-menu ${this.isOpen ? 'open' : ''}`}
            role="menu"
          >
            <div class="open-menu" part="menu-content">
              <div class="left-menu-content">
                <slot name="left-menu-content"></slot>
              </div>
              <div class="right-menu-content">
                <ul class="columns" part="menu-list">
                  {this.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        class={{
                          disabled: item.disabled,
                        }}
                        role="menuitem"
                        tabIndex={item.disabled ? -1 : 0}
                        aria-disabled={item.disabled ? 'true' : 'false'}
                        onKeyDown={(event) =>
                          this.handleLinkKeyDown(event, item.href)
                        }
                        aria-label={item.label}
                      >
                        <div class="item-label">
                          <label htmlFor="">{item.label}</label>
                          <img src={this.pathToArrowRightIcon} alt="" />
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </nav>
    );
  }
}
