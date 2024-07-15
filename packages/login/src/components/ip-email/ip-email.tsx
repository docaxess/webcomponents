import { Component, h, Element, Prop , State, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "ip-email",
  styleUrl: "ip-email.scss",
  formAssociated: true,
  shadow: true,
})
export class IpEmail {
  @Element() el: HTMLElement;
  @Prop() errorMessage: string;
  @Prop({ mutable: true }) invalid: boolean = false;
  @Prop() inputLabel: string = "Email";
  @Prop({reflect: true, mutable: true}) required: boolean = false;

  @State() value: string = "";

  @Event({eventName: 'inputChange'}) inputChange: EventEmitter<string>;

  _handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.inputChange.emit(this.value);
    this.invalid = !target.checkValidity();
  };

  render() {
    const inputClasses = {
      input__input: true,
      "input__input--invalid": this.invalid,
    };
    return (
      <div class="input">
        <label htmlFor="email" class="input__label">
          {this.inputLabel}
          {this.required && (
            <span aria-hidden="true" class="required-asterisk">
               *
             </span>
          )}

        </label>
        <div class="input_btn">
          <input
            type="email"
            id="email"
            class={inputClasses}
            autoComplete="email"
            required={this.required}
            placeholder={`Type your ${this.inputLabel} here...`}
            onInput = {(event) => this._handleInput(event)}
            value={this.value}
          />
        </div>

        {this.invalid && (
          <p id={`${this.inputLabel}-error`} class="input__error">
            {this.errorMessage}
          </p>
        )}
      </div>
    );
  }
}
