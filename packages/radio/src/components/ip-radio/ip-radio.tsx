import {
  Component,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
  Element,
} from '@stencil/core';

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
  @Element() el: HTMLElement;

  @Prop() legend: string;
  @Prop() options: string;
  @Prop() labelPosition: 'before' | 'after' = 'after';
  @Prop() defaultOptionId: string | number;
  @State() selectedId = '';
  @State() selectedOption: RadioOption = null;

  @Event({ bubbles: true, composed: true })
  selectionChanged: EventEmitter<RadioOption>;

  private optionsList: RadioOption[] = [];

  componentWillLoad() {
    try {
      this.optionsList = JSON.parse(this.options);
      if (this.defaultOptionId) {
        const defaultOption = this.optionsList.find(
          (option) => option.id.toString() === this.defaultOptionId.toString(),
        );
        if (defaultOption) {
          this.selectedOption = defaultOption;
          this.selectedId = defaultOption.id.toString();
        }
      }
    } catch (error) {
      console.error('Invalid options format:', error);
    }
  }

  private handleChange(option: RadioOption) {
    if (!option.disabled) {
      this.selectedOption = option;
      this.selectedId = option.id.toString();
      this.selectionChanged.emit(option);
    }
  }

  private handleKeyDown(event: KeyboardEvent) {
    const radios = Array.from(
      this.el.querySelectorAll('input[type="radio"]'),
    ) as HTMLInputElement[];
    const currentIndex = radios.findIndex(
      (radio) => radio === document.activeElement,
    );

    if (currentIndex === -1) return;

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      const nextIndex = (currentIndex + 1) % radios.length;
      radios[nextIndex].focus();
      radios[nextIndex].checked = true;
      this.handleChange(this.optionsList[nextIndex]);
    }

    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      const prevIndex = (currentIndex - 1 + radios.length) % radios.length;
      radios[prevIndex].focus();
      radios[prevIndex].checked = true;
      this.handleChange(this.optionsList[prevIndex]);
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const checkedRadio = radios.find(
        (radio) => radio === document.activeElement,
      );
      if (checkedRadio) {
        checkedRadio.checked = true;
        this.handleChange(
          this.optionsList.find(
            (option) => option.id.toString() === checkedRadio.value,
          ),
        );
      }
    }
  }

  render() {
    return (
      <fieldset class="custom-fieldset">
        {this.legend && <legend>{this.legend}</legend>}
        <div onKeyDown={(event) => this.handleKeyDown(event as KeyboardEvent)}>
          {this.optionsList.map((option) => (
            <div key={option.id} class={{ disabled: option.disabled }}>
              {this.labelPosition === 'before' && (
                <label htmlFor={option.id.toString()}>{option.label}</label>
              )}
              <input
                type="radio"
                id={option.id.toString()}
                name="ip-radio-group"
                value={option.id.toString()}
                onChange={() => this.handleChange(option)}
                checked={this.selectedId === option.id.toString()}
                disabled={option.disabled}
                // aria-checked={
                //   this.selectedId === option.id.toString() ? 'true' : 'false'
                // }
              />
              {this.labelPosition === 'after' && (
                <label htmlFor={option.id.toString()}>{option.label}</label>
              )}
            </div>
          ))}
        </div>
      </fieldset>
    );
  }
}
