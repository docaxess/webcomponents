import { Component, h, Prop, State, Element } from '@stencil/core';

export interface MenuItem {
  label: string;
  href?: string;
  disabled?: boolean;
}

@Component({
  tag: 'custom-menu',
  styleUrl: 'menu1.scss',
  shadow: true,
})
export class CustomMenu {
  @Element() el: HTMLElement;

  @Prop() menuData: string;
  @Prop() items: MenuItem[] = [];

  @State() isOpen: boolean = false;
  @State() openSubMenu: string | null = null;

  componentWillLoad() {
    if (this.menuData) {
      try {
        this.items = JSON.parse(this.menuData);
      } catch (error) {
        console.error('Invalid menuData JSON:', error);
      }
    }
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  toggleSubMenu(label: string) {
    this.openSubMenu = this.openSubMenu === label ? null : label;
  }

  render() {
    return (
      <nav aria-label="Main Navigation">
        <div class={`head ${this.isOpen ? 'open' : ''}`}>
          <div class="logo">
            <slot name="logo"></slot>
          </div>
          <div class="right-head-content">
            <div class="button">
              <slot name="button"></slot>
            </div>
            <div class="toggle-burger-menu">
              <button
                aria-label={this.isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={this.isOpen}
                class="burger-menu-btn"
                onClick={() => this.toggleMenu()}
              >
                {this.isOpen ? (
                  <img
                    class="svg-icon"
                    src="../../assets/images/x-icon.svg"
                    alt="Close menu"
                  />
                ) : (
                  <img
                    class="svg-icon"
                    src="../../assets/images/icon-list.svg"
                    alt="Open menu"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        {this.isOpen ? (
          <div class={`burger-menu ${this.isOpen ? 'open' : ''}`}>
            <div class="open-menu">
              <div class="left-menu-content">
                <slot name="left-menu-content"></slot>
              </div>
              <div class="right-menu-content">
                <ul class="columns">
                  {this.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        class={{
                          disabled: item.disabled,
                        }}
                        tabIndex={item.disabled ? -1 : 0}
                        aria-disabled={item.disabled ? 'true' : 'false'}
                      >
                        <div class="item-label">
                          <label htmlFor="">{item.label}</label>
                          <img
                            src="../../assets/images/arrow-right.svg"
                            alt=""
                          />
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
