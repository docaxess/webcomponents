import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ip-login',
  styleUrl: 'login-form.scss',
  shadow: true,
})
export class LoginForm {
  @Prop() usernameLabel: string = 'Username';
  @Prop() passwordLabel: string = 'Password';
  @Prop() submitButtonLabel: string = 'Login';
  @Prop() usernameErrorMsg: string = 'Username is required';
  @Prop() usernameInvalidEmailMsg: string = 'The email address is invalid';
  @Prop() passwordLengthErrorMsg: string =
    'The password must contain at least 8 characters';
  @Prop() passwordUppercaseErrorMsg: string =
    'Password must contain at least one capital';
  @Prop() passwordLowercaseErrorMsg: string =
    'The password must contain at least a lower case';
  @Prop() passwordDigitErrorMsg: string =
    'The password must contain at least one digit';
  @Prop() usernameType: 'text' | 'email' = 'text';
  @Prop() showPasswordAriaLabel: string = 'Show password';
  @Prop() hidePasswordAriaLabel: string = 'Hide password';
  @Prop({ reflect: true, mutable: true }) usernameRequired: boolean = false;
  @Prop() pwdPlaceholder: string = 'Type your password here...';
  @Prop() usernamePlaceholder: string = 'Type your username here...';
  @Prop() forgotPasswordLink: string = '';
  @Prop() forgotPasswordLabel: string = 'Forgot password?';
  @Prop() loginTitle: string = 'Login';
  @Prop() indicationLabel: string = 'Required fields';
  @Prop() submitBtnAriaLabel: string = 'Submit the form';

  @State() username: string = '';
  @State() password: string = '';
  @State() usernameError: string = '';
  @State() passwordError: string = '';
  @State() passwordVisible: boolean = false;

  @Event() formSubmitted: EventEmitter;
  usernameInput: HTMLInputElement;
  passwordInput: HTMLInputElement;

  handleSubmit(event: Event) {
    event.preventDefault();
    this.validateForm();
  }

  validateForm() {
    let valid = true;

    if (this.usernameRequired) {
      if (this.username.trim() === '') {
        this.usernameError = this.usernameErrorMsg;
        valid = false;
      } else if (
        this.usernameType === 'email' &&
        !this.isValidEmail(this.username)
      ) {
        this.usernameError = this.usernameInvalidEmailMsg;
        valid = false;
      } else {
        this.usernameError = '';
      }
    }

    if (this.password.length < 8) {
      this.passwordError = this.passwordLengthErrorMsg;
      valid = false;
    } else if (!/[A-Z]/.test(this.password)) {
      this.passwordError = this.passwordUppercaseErrorMsg;
      valid = false;
    } else if (!/[a-z]/.test(this.password)) {
      this.passwordError = this.passwordLowercaseErrorMsg;
      valid = false;
    } else if (!/[0-9]/.test(this.password)) {
      this.passwordError = this.passwordDigitErrorMsg;
      valid = false;
    } else {
      this.passwordError = '';
    }

    if (valid) {
      this.formSubmitted.emit({
        username: this.username,
        password: this.password,
      });
      this.resetForm();
    } else {
      if (this.usernameError) {
        this.usernameInput.focus();
      } else if (this.passwordError) {
        this.passwordInput.focus();
      }
    }
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement;

    if (target.name === 'username') {
      this.username = target.value;
      if (this.usernameError) {
        this.usernameError = '';
      }
    } else if (target.name === 'password') {
      this.password = target.value;
      if (this.passwordError) {
        this.passwordError = '';
      }
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  resetForm() {
    this.username = '';
    this.password = '';
    this.usernameError = '';
    this.passwordError = '';
  }

  render() {
    return (
      <div class="login">
        <div class="title" part="title">
          <p>{this.loginTitle}</p>
        </div>
        <div class="indication" part="indication">
          <span>
            <span class="asterisk">*</span>
            {this.indicationLabel}
          </span>
        </div>
        <form onSubmit={(event) => this.handleSubmit(event)} part="login-form">
          <div class="input">
            <label
              htmlFor="username"
              class="input__label"
              part="username-label"
            >
              {this.usernameLabel}
              {this.usernameRequired && (
                <span aria-hidden="true" class="required-asterisk">
                  *
                </span>
              )}
            </label>
            <div class="input_btn">
              <input
                ref={(el) => (this.usernameInput = el as HTMLInputElement)}
                part="username-input"
                class="input__input"
                type={this.usernameType}
                id="username"
                name="username"
                value={this.username}
                autocomplete={
                  this.usernameType === 'email' ? 'email' : 'username'
                }
                onInput={(event) => this.handleInputChange(event)}
                aria-invalid={this.usernameError ? 'true' : null}
                aria-describedby={this.usernameError ? 'username-error' : null}
                placeholder={this.usernamePlaceholder}
              />
            </div>
            {this.usernameError && (
              <p
                role="alert"
                part="error-message"
                id={`${this.usernameLabel}-error`}
                class="input__error"
                aria-live="assertive"
              >
                {this.usernameError}
              </p>
            )}
          </div>
          <div class="input">
            <label
              class="input__label"
              htmlFor="password"
              part="password-label"
            >
              {this.passwordLabel}{' '}
              <span aria-hidden="true" class="required-asterisk">
                *
              </span>
            </label>
            <div class="input_btn">
              <input
                ref={(el) => (this.passwordInput = el as HTMLInputElement)}
                autocomplete="current-password"
                part="password-input"
                class="input__input"
                type={this.passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                value={this.password}
                onInput={(event) => this.handleInputChange(event)}
                aria-invalid={this.passwordError ? 'true' : null}
                aria-describedby={this.passwordError ? 'password-error' : null}
                placeholder={this.pwdPlaceholder}
              />
              <button
                part="toggle-password"
                type="button"
                class="toggle-password"
                onClick={() => this.togglePasswordVisibility()}
                aria-label={
                  this.passwordVisible
                    ? this.hidePasswordAriaLabel
                    : this.showPasswordAriaLabel
                }
              >
                {this.passwordVisible ? (
                  <svg
                    aria-hidden="true"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.5314 11.5434C23.4967 11.4675 22.6754 9.64406 20.8614 7.83C18.4342 5.40656 15.3751 4.125 12.0001 4.125C8.62512 4.125 5.56606 5.40656 3.14169 7.83C1.32762 9.64406 0.506374 11.4675 0.468874 11.5434C0.405361 11.6874 0.372559 11.8431 0.372559 12.0005C0.372559 12.1579 0.405361 12.3135 0.468874 12.4575C0.503561 12.5344 1.32481 14.3569 3.13981 16.1709C5.56606 18.5944 8.62512 19.875 12.0001 19.875C15.3751 19.875 18.4342 18.5944 20.8576 16.1709C22.6726 14.3569 23.4939 12.5344 23.5286 12.4575C23.5925 12.3137 23.6258 12.1581 23.6263 12.0008C23.6268 11.8434 23.5944 11.6876 23.5314 11.5434ZM19.2132 14.6372C17.2004 16.6191 14.7742 17.625 12.0001 17.625C9.22606 17.625 6.79981 16.6191 4.78981 14.6362C3.99888 13.8537 3.31854 12.9667 2.76762 12C3.3187 11.0337 3.99903 10.1471 4.78981 9.36469C6.80075 7.38094 9.22606 6.375 12.0001 6.375C14.7742 6.375 17.1995 7.38094 19.2104 9.36469C20.0013 10.147 20.6816 11.0336 21.2326 12C20.6816 12.9666 20.0013 13.8536 19.2104 14.6362L19.2132 14.6372ZM12.0001 7.875C11.1843 7.875 10.3867 8.11693 9.7084 8.57019C9.03004 9.02345 8.50133 9.66769 8.18912 10.4214C7.87691 11.1752 7.79522 12.0046 7.95439 12.8047C8.11355 13.6049 8.50642 14.3399 9.08331 14.9168C9.6602 15.4937 10.3952 15.8866 11.1954 16.0457C11.9955 16.2049 12.8249 16.1232 13.5787 15.811C14.3324 15.4988 14.9767 14.9701 15.4299 14.2917C15.8832 13.6134 16.1251 12.8158 16.1251 12C16.1239 10.9064 15.6889 9.85787 14.9156 9.08455C14.1423 8.31124 13.0938 7.87624 12.0001 7.875ZM12.0001 13.875C11.6293 13.875 11.2668 13.765 10.9584 13.559C10.6501 13.353 10.4098 13.0601 10.2678 12.7175C10.1259 12.3749 10.0888 11.9979 10.1612 11.6342C10.2335 11.2705 10.4121 10.9364 10.6743 10.6742C10.9365 10.412 11.2706 10.2334 11.6343 10.161C11.998 10.0887 12.375 10.1258 12.7177 10.2677C13.0603 10.4096 13.3531 10.65 13.5591 10.9583C13.7652 11.2666 13.8751 11.6292 13.8751 12C13.8751 12.4973 13.6776 12.9742 13.3259 13.3258C12.9743 13.6775 12.4974 13.875 12.0001 13.875Z" />
                  </svg>
                ) : (
                  <svg
                    aria-hidden="true"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.33262 2.99341C5.23383 2.88204 5.11391 2.79139 4.97982 2.72671C4.84574 2.66204 4.70014 2.62461 4.55149 2.61661C4.40283 2.60862 4.25406 2.6302 4.11381 2.68013C3.97356 2.73005 3.84461 2.80731 3.73444 2.90743C3.62426 3.00755 3.53506 3.12855 3.47199 3.2634C3.40892 3.39826 3.37325 3.54429 3.36703 3.69303C3.36082 3.84177 3.38419 3.99027 3.43579 4.12991C3.48738 4.26956 3.56619 4.39757 3.66762 4.50653L5.16762 6.16122C1.93794 8.31185 0.536374 11.3981 0.468874 11.5434C0.405361 11.6874 0.372559 11.8431 0.372559 12.0004C0.372559 12.1578 0.405361 12.3135 0.468874 12.4575C0.503561 12.5343 1.32481 14.3568 3.13981 16.1709C5.56606 18.5943 8.62512 19.875 12.0001 19.875C13.6404 19.8841 15.266 19.5653 16.7814 18.9375L18.6648 21.0093C18.8665 21.226 19.1455 21.3545 19.4413 21.3668C19.7371 21.3792 20.0258 21.2745 20.2449 21.0754C20.4639 20.8763 20.5957 20.5988 20.6116 20.3032C20.6275 20.0076 20.5263 19.7177 20.3298 19.4962L5.33262 2.99341ZM12.0001 17.625C9.22606 17.625 6.79981 16.619 4.78981 14.6362C3.99917 13.8534 3.31886 12.9665 2.76762 12C3.26169 11.1272 4.52919 9.19685 6.70512 7.84778L15.1511 17.1393C14.1325 17.4646 13.0693 17.6284 12.0001 17.625ZM23.5314 12.4575C23.4976 12.5334 22.6876 14.3325 20.9064 16.1287C20.8044 16.2419 20.6804 16.3333 20.5421 16.3971C20.4037 16.461 20.2538 16.4961 20.1015 16.5003C19.9492 16.5045 19.7976 16.4777 19.6559 16.4215C19.5142 16.3654 19.3855 16.281 19.2774 16.1736C19.1693 16.0661 19.0842 15.9379 19.0272 15.7965C18.9702 15.6552 18.9425 15.5038 18.9458 15.3514C18.9491 15.199 18.9833 15.049 19.0464 14.9102C19.1094 14.7715 19.2 14.647 19.3126 14.5443C20.0609 13.7836 20.7063 12.9282 21.2326 12C20.6817 11.0333 20.0014 10.1463 19.2104 9.36372C17.1995 7.38091 14.7742 6.37497 12.0001 6.37497C11.6861 6.37497 11.372 6.3881 11.0626 6.41435C10.9135 6.43032 10.7628 6.41633 10.6192 6.37319C10.4756 6.33006 10.342 6.25866 10.2264 6.16318C10.1108 6.0677 10.0154 5.95007 9.94594 5.81721C9.87644 5.68435 9.8342 5.53894 9.8217 5.38952C9.8092 5.24011 9.8267 5.0897 9.87316 4.94714C9.91963 4.80458 9.99412 4.67274 10.0923 4.55938C10.1904 4.44603 10.3102 4.35343 10.4447 4.28704C10.5791 4.22065 10.7255 4.1818 10.8751 4.17278C11.2436 4.14091 11.6251 4.12497 12.0001 4.12497C15.3751 4.12497 18.4342 5.40653 20.8586 7.82997C22.6726 9.64403 23.4939 11.4675 23.5286 11.5434C23.5925 11.6872 23.6258 11.8428 23.6263 12.0001C23.6268 12.1575 23.5944 12.3133 23.5314 12.4575Z" />
                  </svg>
                )}
              </button>
            </div>
            {this.passwordError && (
              <p
                role="alert"
                id="password-error"
                part="error-message"
                class="input__error"
                aria-live="assertive"
              >
                {this.passwordError}
              </p>
            )}
            {this.forgotPasswordLink && (
              <p class="forgot-password" part="forgot-password">
                <a href={this.forgotPasswordLink} target="_blank">
                  {this.forgotPasswordLabel}
                </a>
              </p>
            )}
          </div>
          <div class="submit-btn">
            <button
              part="submit-btn"
              aria-label={this.submitBtnAriaLabel}
              class="submit"
              type="submit"
            >
              {this.submitButtonLabel}
            </button>
          </div>
        </form>
        <div class="other">
          <slot />
        </div>
      </div>
    );
  }
}
