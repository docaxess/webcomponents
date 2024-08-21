import {
  Component,
  h,
  State,
  Prop,
  Element,
  Watch,
  EventEmitter,
  Event,
} from '@stencil/core';

@Component({
  tag: 'ip-search-bar',
  styleUrl: 'search-bar.scss',
  shadow: true,
})
export class IpSearchBar {
  @Prop() labelButton = 'Search';
  @Prop() placeholder = 'Search...';
  @Prop() suggestionsData = '[]';
  @State() suggestions: string[] = [];
  @State() query = '';
  @State() selectedIndex = -1;
  @Element() host: HTMLElement;
  @Event() buttonClicked: EventEmitter<void>;
  private suggestionsList: string[] = [];

  @Watch('suggestionsData')
  watchSuggestionsData(newValue: string) {
    try {
      this.suggestionsList = JSON.parse(newValue);
    } catch (e) {
      console.error('Invalid JSON format for suggestionsData', e);
      this.suggestionsList = [];
    }
  }

  componentWillLoad() {
    this.watchSuggestionsData(this.suggestionsData);
  }

  private handleInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.query = inputElement.value;
    this.suggestions = this.suggestionsList.filter((item) =>
      item.toLowerCase().includes(this.query.toLowerCase()),
    );
    this.selectedIndex = -1;
  }

  private handleKeyDown(event: KeyboardEvent) {
    const { key } = event;
    const { suggestions, selectedIndex } = this;

    switch (key) {
      case 'ArrowDown':
        event.preventDefault();
        this.selectedIndex = (selectedIndex + 1) % suggestions.length;
        break;

      case 'ArrowUp':
        event.preventDefault();
        this.selectedIndex =
          (selectedIndex - 1 + suggestions.length) % suggestions.length;
        break;

      case 'Enter':
        event.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          this.handleSuggestionClick(suggestions[selectedIndex]);
        }
        break;

      case 'Escape':
        this.suggestions = [];
        break;

      case 'Home':
        this.selectedIndex = 0;
        break;

      case 'End':
        this.selectedIndex = suggestions.length - 1;
        break;

      default:
        break;
    }
  }

  private handleSuggestionClick(suggestion: string) {
    this.query = suggestion;
    this.suggestions = [];
  }

  private handleButtonClick() {
    this.buttonClicked.emit();
  }
  render() {
    const svg = (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 32 32"
        fill="black"
      >
        <path
          d="M28.7075 27.2925L22.4488 21.035C24.2628 18.8572 25.1674 16.0638 24.9743 13.236C24.7813 10.4081 23.5054 7.76361 21.4122 5.85251C19.319 3.9414 16.5696 2.91086 13.7359 2.97526C10.9023 3.03966 8.20249 4.19404 6.19827 6.19827C4.19404 8.20249 3.03966 10.9023 2.97526 13.7359C2.91086 16.5696 3.9414 19.319 5.85251 21.4122C7.76361 23.5054 10.4081 24.7813 13.236 24.9743C16.0638 25.1674 18.8572 24.2628 21.035 22.4488L27.2925 28.7075C27.3855 28.8005 27.4958 28.8742 27.6171 28.9244C27.7385 28.9747 27.8686 29.0006 28 29.0006C28.1314 29.0006 28.2615 28.9747 28.3829 28.9244C28.5043 28.8742 28.6146 28.8005 28.7075 28.7075C28.8005 28.6146 28.8742 28.5043 28.9244 28.3829C28.9747 28.2615 29.0006 28.1314 29.0006 28C29.0006 27.8686 28.9747 27.7385 28.9244 27.6171C28.8742 27.4958 28.8005 27.3855 28.7075 27.2925ZM5.00004 14C5.00004 12.22 5.52788 10.48 6.51681 8.99991C7.50575 7.51987 8.91136 6.36631 10.5559 5.68513C12.2004 5.00394 14.01 4.82571 15.7559 5.17297C17.5017 5.52024 19.1053 6.37741 20.364 7.63608C21.6227 8.89475 22.4798 10.4984 22.8271 12.2442C23.1744 13.9901 22.9961 15.7997 22.315 17.4442C21.6338 19.0887 20.4802 20.4943 19.0002 21.4833C17.5201 22.4722 15.7801 23 14 23C11.6139 22.9974 9.32626 22.0483 7.639 20.3611C5.95175 18.6738 5.00269 16.3862 5.00004 14Z"
          fill="black"
        />
      </svg>
    );
    return (
      <div class="search-bar">
        <div class="input-wrapper">
          <div class="ico">{svg}</div>
          <div class="input">
            <input
              id="search-input"
              type="text"
              placeholder={this.placeholder}
              aria-autocomplete="list"
              onInput={(event) => this.handleInput(event)}
              onKeyDown={(event) => this.handleKeyDown(event)}
              value={this.query}
            />
          </div>

          <div class="button">
            <button
              onClick={() => this.handleButtonClick()}
              aria-label={this.labelButton}
            >
              {this.labelButton}
            </button>
          </div>
        </div>

        {this.suggestions.length > 0 && (
          <ul id="suggestion-list" role="listbox">
            {this.suggestions.map((suggestion, index) => (
              <li
                role="option"
                aria-selected={this.selectedIndex === index}
                onClick={() => this.handleSuggestionClick(suggestion)}
                onMouseOver={() => (this.selectedIndex = index)}
                class={this.selectedIndex === index ? 'highlighted' : ''}
              >
                <div class="suggestion">
                  {svg}
                  {suggestion}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
