import { Component, h, Element, Prop } from "@stencil/core";

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

  render() {
    const inputClasses = {
      input__input: true,
      "input__input--invalid": this.invalid,
    };
    return (
      <div class="input">
        <label htmlFor="email" class="input__label">
          {this.inputLabel}
          <span aria-hidden="true" class="required-asterisk">
            *
          </span>
        </label>
        <div class="input_btn">
          <input
            type="email"
            id="email"
            class={inputClasses}
            autoComplete="email"
            required
            placeholder={`Type your ${this.inputLabel} here...`}
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
