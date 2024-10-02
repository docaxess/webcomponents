import {
  Component,
  Prop,
  h,
  State,
  Watch,
  EventEmitter,
  Event,
} from '@stencil/core';

interface CheckboxOption {
  id: string;
  label: string;
  disabled?: boolean;
  defaultChecked?: boolean;
}

@Component({
  tag: 'ip-checkbox-list',
  styleUrl: 'ip-checkbox-list.scss',
  shadow: true,
})
export class IpCheckboxList {
  @Prop() options: string;
  @Prop() legend: string;
  @State() selectedOptions: string[] = [];

  parsedOptions: CheckboxOption[] = [];

  @Event({ bubbles: true, composed: true }) selectionChanged: EventEmitter<
    string[]
  >;

  componentWillLoad() {
    this.parseOptions(this.options);
    this.selectedOptions = this.parsedOptions
      .filter((option) => option.defaultChecked)
      .map((option) => option.id);
  }

  @Watch('options')
  parseOptions(newValue: string) {
    try {
      const parsedOptions = JSON.parse(newValue || '[]');

      if (
        Array.isArray(parsedOptions) &&
        parsedOptions.every((option) => 'id' in option && 'label' in option)
      ) {
        this.parsedOptions = parsedOptions;
      } else {
        console.error(
          'Invalid options structure. Expected an array of objects with "id" and "label" properties.',
        );
      }
    } catch (error) {
      console.error('Invalid options:', error);
    }
  }

  handleChange(optionId: string) {
    const option = this.parsedOptions.find((opt) => opt.id === optionId);
    if (option && option.disabled) {
      return;
    }

    this.selectedOptions = this.selectedOptions.includes(optionId)
      ? this.selectedOptions.filter((id) => id !== optionId)
      : [...this.selectedOptions, optionId];
    this.selectionChanged.emit(this.selectedOptions);
  }

  toggleOption(optionId: string) {
    this.selectedOptions = this.selectedOptions.includes(optionId)
      ? this.selectedOptions.filter((id) => id !== optionId)
      : [...this.selectedOptions, optionId];
  }

  handleKeyDown(event: KeyboardEvent, optionId: string) {
    const option = this.parsedOptions.find((opt) => opt.id === optionId);
    if (option && option.disabled) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleOption(optionId);
    }
  }

  render() {
    return (
      <div class="checkbox-list">
        <fieldset class="checkbox-content">
          {this.legend && <legend class="legend">{this.legend}</legend>}
          <div class="checkbox-elements">
            {this.parsedOptions.map((option) => (
              <div class="wrapper" key={option.id}>
                <span
                  role="checkbox"
                  aria-labelledby={`${option.id}-label`}
                  id={option.id}
                  aria-checked={
                    this.selectedOptions.includes(option.id) ? 'true' : 'false'
                  }
                  tabindex={option.disabled ? '-1' : '0'}
                  onClick={() => this.handleChange(option.id)}
                  onKeyDown={(event: KeyboardEvent) =>
                    this.handleKeyDown(event, option.id)
                  }
                  class={`custom-checkbox ${this.selectedOptions.includes(option.id) ? 'checked' : ''} ${option.disabled ? 'disabled' : ''}`}
                  aria-disabled={option.disabled ? 'true' : 'false'}
                >
                  <span
                    class="checkbox-icon"
                    aria-hidden={
                      this.selectedOptions.includes(option.id)
                        ? 'true'
                        : 'false'
                    }
                  >
                    {this.selectedOptions.includes(option.id) ? '\u2713' : ''}
                  </span>
                </span>
                <label
                  id={`${option.id}-label`}
                  class={`checkbox-label ${this.selectedOptions.includes(option.id) ? 'checked' : ''} ${option.disabled ? 'disabled' : ''}`}
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
    );
  }
}
