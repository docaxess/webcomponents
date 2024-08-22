import {
  Component,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
  Watch,
  Element,
} from '@stencil/core';
import { convertToObjectArray } from '../../utils/utils';

interface RadioOption {
  id: string | number;
  label: string;
  disabled?: boolean;
}

@Component({
  tag: 'ip-radio',
  styleUrl: 'ip-radio.scss',
  shadow: true,
})
export class IpRadio {
  @Element() hostElement: HTMLElement;

  @Prop() labelPosition: 'before' | 'after' = 'after';
  @Prop() options: string;
  @Prop() defaultOptionId: string | number;
  @Prop() legend: string;
  @Event({ bubbles: true, composed: true })
  selectionChanged: EventEmitter<RadioOption>;

  radioOptions: RadioOption[] = [];

  @State() selectedOption: RadioOption = null;
  @State() focusedOption: RadioOption = null;

  @Watch('options')
  writeValue(value: string | null) {
    this.radioOptions = convertToObjectArray<RadioOption>(value, [
      'id',
      'label',
    ]);
    if (this.defaultOptionId) {
      this.selectedOption =
        this.radioOptions.find(
          (option) => option.id === this.defaultOptionId,
        ) || null;
    }
    this.focusedOption = this.selectedOption || this.radioOptions[0] || null;
  }

  componentWillLoad() {
    this.writeValue(this.options);
  }

  handleOptionChange(option: RadioOption) {
    if (!option.disabled) {
      this.selectedOption = option;
      this.selectionChanged.emit(option);
      this.focusedOption = option;
      // this.focusSelectedOption();
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    const { key } = event;
    const currentIndex = this.radioOptions.findIndex(
      (option) => option.id === this.focusedOption?.id,
    );

    if (key === 'ArrowDown' || key === 'ArrowRight') {
      event.preventDefault();
      let nextIndex = (currentIndex + 1) % this.radioOptions.length;
      while (this.radioOptions[nextIndex]?.disabled) {
        nextIndex = (nextIndex + 1) % this.radioOptions.length;
      }
      if (this.radioOptions[nextIndex]) {
        this.focusedOption = this.radioOptions[nextIndex];
        this.handleOptionChange(this.focusedOption);
      }
    } else if (key === 'ArrowUp' || key === 'ArrowLeft') {
      event.preventDefault();
      let prevIndex =
        (currentIndex - 1 + this.radioOptions.length) %
        this.radioOptions.length;
      while (this.radioOptions[prevIndex]?.disabled) {
        prevIndex =
          (prevIndex - 1 + this.radioOptions.length) % this.radioOptions.length;
      }
      if (this.radioOptions[prevIndex]) {
        this.focusedOption = this.radioOptions[prevIndex];
        this.handleOptionChange(this.focusedOption);
      }
    } else if (key === 'Enter' || key === ' ') {
      event.preventDefault();
      if (this.focusedOption && !this.focusedOption.disabled) {
        this.handleOptionChange(this.focusedOption);
      }
    }
  }

  focusSelectedOption() {
    const focusedElement = this.hostElement.shadowRoot?.querySelector(
      `#radio-${this.selectedOption?.id}`,
    );
    if (focusedElement) {
      (focusedElement as HTMLElement).focus();
    }
  }

  render() {
    return (
      <fieldset
        class="custom-fieldset"
        onKeyDown={(event) => this.handleKeyDown(event)}
        role="radiogroup"
      >
        {this.legend && <legend>{this.legend}</legend>}
        {this.radioOptions.map((option) => {
          const containerClasses = {
            container: true,
            [this.labelPosition]: true,
            disabled: option.disabled,
          };
          const isChecked =
            this.selectedOption && this.selectedOption.id === option.id;
          const isFocused =
            this.focusedOption && this.focusedOption.id === option.id;
          const inputId = `radio-${option.id}`;
          const labelId = `label-${inputId}`;
          return (
            <div
              class={containerClasses}
              role="radio"
              aria-checked={isChecked ? 'true' : 'false'}
              aria-disabled={option.disabled ? 'true' : 'false'}
              tabindex={isFocused ? '0' : '-1'}
            >
              <div class="radio">
                <input
                  tabindex="-1"
                  type="radio"
                  value={option.id}
                  id={inputId}
                  name={'radio' + option.id}
                  disabled={option.disabled}
                  checked={isChecked}
                  // aria-checked={isChecked ? 'true' : 'false'}
                  onChange={() => this.handleOptionChange(option)}
                  aria-labelledby={labelId}
                />
                <div class="radio-background">
                  <div class="outer-circle"></div>
                  <div class="inner-circle"></div>
                </div>
              </div>
              <label id={labelId} htmlFor={inputId}>
                {option.label}
              </label>
            </div>
          );
        })}
      </fieldset>
    );
  }
}
