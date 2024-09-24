import { Component, h, Prop, State } from '@stencil/core';

export interface MenuItem {
  label: string;
  href?: string;
  submenus?: MenuItem[];
}

@Component({
  tag: 'ip-navigation-bar',
  styleUrl: 'navigation-bar.scss',
  shadow: true,
})
export class IpNavigationBar {
  @Prop() menuItems: MenuItem[] = [];
  @Prop() menuData: string;
  @Prop() openSubmenuPrefix: string = 'Open';
  @Prop() closeSubmenuPrefix: string = 'Close';
  @Prop() closeMenuAriaLabel: string = 'Close menu';
  @Prop() openMenuAriaLabel: string = 'Open menu';
  @Prop() pathToCloseIcon: string = '../../assets/images/x-icon.svg';
  @Prop() pathToOpenIcon: string = '../../assets/images/icon-list.svg';

  @State() openSubmenu: string | null = null;
  @State() isMenuOpen: boolean = false;
  menuButton: HTMLButtonElement;

  componentWillLoad() {
    if (this.menuData) {
      try {
        this.menuItems = JSON.parse(this.menuData);
      } catch (error) {
        console.error('Invalid menuData JSON:', error);
      }
    }
  }

  private handleKeyDown(event: KeyboardEvent, item: MenuItem) {
    const target = event.target as HTMLElement;

    if (event.key === 'Tab') {
      if (this.openSubmenu === item.label) {
        const submenuItems = target
          .closest('li')
          ?.querySelectorAll('.submenu-item a && .menu-item-btn');
        if (submenuItems) {
          const firstItem = submenuItems[0] as HTMLElement;
          const lastItem = submenuItems[submenuItems.length - 1] as HTMLElement;

          if (document.activeElement === lastItem && !event.shiftKey) {
            event.preventDefault();
            target
              .closest('li')
              ?.nextElementSibling?.querySelector('a' || 'button')
              ?.focus();
          } else if (document.activeElement === firstItem && event.shiftKey) {
            event.preventDefault();
            target
              .closest('li')
              ?.previousElementSibling?.querySelector('a' || 'button')
              ?.focus();
          }
        }
      }
    } else if (event.key === 'Enter' || event.key === ' ') {
      if (item.submenus) {
        event.preventDefault();
        this.openSubmenu = this.openSubmenu === item.label ? null : item.label;
      }
    } else if (event.key === 'escape') {
      this.openSubmenu = null;
    }
  }

  private escapeHandler = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.openSubmenu = null;
    }
  };
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  private renderSubmenu(submenus: MenuItem[]) {
    return (
      <ul class="sub-menu" part="submenu-   items">
        {submenus.map((subitem) => (
          <li
            class="submenu-items"
            part="submenu-item"
            key={subitem.label}
            onKeyDown={(event) => this.escapeHandler(event)}
          >
            <a part="submenu-item-link" href={subitem.href}>
              {subitem.label}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <nav
        id="navigation"
        role="navigation"
        aria-label="Main navigation"
        part="nav-bar"
      >
        <div class="left-content">
          <slot name="left-head"></slot>
          <div class="toggle-menu-btn">
            <button
              part="toggle-menu-btn"
              ref={(el) => (this.menuButton = el as HTMLButtonElement)}
              aria-label={
                this.isMenuOpen
                  ? this.closeMenuAriaLabel
                  : this.openMenuAriaLabel
              }
              aria-controls="burger-menu"
              aria-expanded={this.isMenuOpen ? 'true' : 'false'}
              class="burger-menu-btn"
              onClick={() => this.toggleMenu()}
              // onKeyDown={(event) => this.handleKeyDown(event)}
            >
              {this.isMenuOpen ? (
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

        <div class="right-content">
          <div class="elements">
            <ul class="menu" part="menu">
              {this.menuItems.map((item) => (
                <li
                  part="menu-items"
                  class="menu-items"
                  key={item.label}
                  onKeyDown={(event) => this.escapeHandler(event)}
                >
                  {item.submenus && (
                    <button
                      class="menu-item-btn"
                      onClick={
                        this.openSubmenu === item.label
                          ? () => (this.openSubmenu = null)
                          : () => (this.openSubmenu = item.label)
                      }
                      aria-expanded={this.openSubmenu === item.label}
                      aria-controls={`submenu-${item.label}`}
                      aria-haspopup="true"
                      aria-label={
                        this.openSubmenu === item.label
                          ? `${this.closeSubmenuPrefix} ${item.label}`
                          : `${this.openSubmenuPrefix} ${item.label}`
                      }
                    >
                      <div class="menu-item-label">
                        <span>{item.label}</span>
                        <span class="icon">
                          {item.submenus && (
                            <svg
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M13.0811 6.125L8.39355 10.8125L3.70605 6.125"
                                stroke="#03396C"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          )}
                        </span>
                      </div>
                    </button>
                  )}
                  {!item.submenus && (
                    <a
                      part="menu-items-link"
                      href={item.href}
                      onKeyDown={(event) => this.handleKeyDown(event, item)}
                    >
                      {item.label}
                    </a>
                  )}

                  {item.submenus && this.openSubmenu === item.label && (
                    <div
                      id={`submenu-${item.label}`}
                      class="submenu-container"
                      part="submenu-container"
                      aria-hidden={
                        this.openSubmenu === item.label ? 'false' : 'true'
                      }
                    >
                      {this.renderSubmenu(item.submenus)}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <slot name="right-head"></slot>
        </div>
      </nav>
    );
  }
}
