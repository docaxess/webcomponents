import {
  Component,
  h,
  Prop,
  State,
  Watch,
  Element,
  Event,
  EventEmitter,
} from '@stencil/core';

@Component({
  tag: 'ip-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true,
})
export class Dropdown {
  @Element() el: HTMLElement;

  @Prop() dropdownTitle: string;
  @Prop() placeholder = 'Select an option';
  @Prop() itemsOptions = '[]';

  @State() items: string[] = [];
  @State() selectedItem = '';
  @State() isOpen = false;

  @Event() itemSelected: EventEmitter<string>;

  componentWillLoad() {
    this.items = JSON.parse(this.itemsOptions);
  }

  connectedCallback() {
    document.addEventListener('click', this.handleClickOutside.bind(this));
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.handleClickOutside.bind(this));
  }
  handleClickOutside(event: MouseEvent) {
    if (!this.el.contains(event.target as Node)) {
      this.isOpen = false;
    }
  }
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectItem(item: string) {
    this.selectedItem = item;
    this.isOpen = false;
    this.itemSelected.emit(item);
  }

  keySelectItem(event: KeyboardEvent, item: string) {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.selectItem(item);
        break;
      case 'Tab':
        event.preventDefault();
        const currentIndex = this.items.indexOf(item);
        const nextIndex =
          currentIndex === this.items.length - 1 ? 0 : currentIndex + 1;
        const nextItem = this.el.shadowRoot.querySelector(
          `.dropdown-list li:nth-child(${nextIndex + 1})`,
        ) as HTMLElement;
        if (nextItem) {
          nextItem.focus();
        }
        break;
      case 'ArrowUp':
      case 'ArrowDown':
        event.preventDefault();
        break;
      case 'Shift':
        event.preventDefault();
        break;
      default:
        break;
    }
  }

  @Watch('isOpen')
  watchIsOpen(value: boolean) {
    if (!value) {
      const contentElement = this.el.shadowRoot.querySelector(
        '.dropdown-content',
      ) as HTMLElement;
      if (contentElement) {
        contentElement.focus();
      }
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleDropdown();
    }
  }

  render() {
    return (
      <div class="dropdown">
        <div class="dropdown-title" aria-label={this.dropdownTitle}>
          {this.dropdownTitle}
        </div>
        <div
          role="combobox"
          aria-labelledby="dropdown-title"
          class="dropdown-content"
          tabindex="0"
          onClick={() => this.toggleDropdown()}
          onKeyDown={(event) => this.handleKeyDown(event)}
          aria-expanded={this.isOpen ? 'true' : 'false'}
          aria-label={this.placeholder}
        >
          <span class="dropdown-head" role="button" aria-haspopup="listbox">
            {this.selectedItem || this.placeholder}
          </span>
          <span class="dropdown-arrow" aria-hidden="true">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Icon/CaretDown">
                <path
                  id="Vector"
                  d="M14.625 6.75L9 12.375L3.375 6.75"
                  stroke="#2749A3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </span>
        </div>
        {this.isOpen && (
          <ul role="listbox" class="dropdown-list">
            {this.items.map((item, index) => (
              <li
                key={index}
                role="option"
                aria-selected={item === this.selectedItem ? 'true' : 'false'}
                class={item === this.selectedItem ? 'selected' : ''}
                onClick={() => this.selectItem(item)}
                onKeyDown={(event) => this.keySelectItem(event, item)}
                tabindex="0"
              >
                {item}
                {item === this.selectedItem && (
                  <span class="selected-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Icon/Check">
                        <path
                          id="Vector"
                          d="M16.875 5.625L8.125 14.375L3.75 10"
                          stroke="#2749A3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
