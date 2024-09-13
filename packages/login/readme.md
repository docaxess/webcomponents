# Login Documentation

## Installation:

### Step 1:

Install the ip-login component as a dependency in the project:

```bash
npm install
```

### Step 2:

Import module in script file:

```bash
import '../node_modules/ip-login/dist/ip-login/ip-login.esm';
```

## Usage:

To use this component, add it to your HTML and configure it with the desired properties.

### Properties

| Property                    | Attribute                      | Necessity | Description                                              | Type           | Default                                           |
| --------------------------- | ------------------------------ | --------- | -------------------------------------------------------- | -------------- | ------------------------------------------------- |
| `usernameLabel`             | `username-label`               | Optional  | `Label for the username input field`                     | `string`       | `Username`                                        |
| `passwordLabel`             | `forgot-password-link`         | Optional  | `Label for the password input field`                     | `string`       | `Password`                                        |
| `submitButtonLabel`         | `submit-button-label`          | Optional  | `Label for the submit button`                            | `string`       | `Login`                                           |
| `usernameErrorMsg`          | `username-error-msg`           | Optional  | `Error message for empty username field`                 | `string`       | `Username is required`                            |
| `usernameInvalidEmailMsg`   | `username-invalid-email-msg`   | Optional  | `Error message for invalid email format`                 | `string`       | `The email address is invalid`                    |
| `passwordLengthErrorMsg`    | `	password-length-error-msg`    | Optional  | `Error message for insufficient password length`         | `string`       | `The password must contain at least 8 characters` |
| `passwordUppercaseErrorMsg` | `	password-uppercase-error-msg` | Optional  | `Error message for missing uppercase letter in password` | `string`       | `Password must contain at least one capital`      |
| `passwordLowercaseErrorMsg` | `	password-lower-error-msg`     | Optional  | `Error message for missing lowercase letter in password` | `string`       | `The password must contain at least a lower case` |
| `passwordDigitErrorMsg`     | `password-digit-error-msg`     | Optional  | `Error message for missing digit in password`            | `string`       | `The password must contain at least one digit`    |
| `usernameType`              | `username-type`                | Optional  | `Type of the username input field (text or email)`       | `text / email` | `text`                                            |
| `showPasswordAriaLabel`     | `show-password-aria-label`     | Optional  | `Aria label for the button to show password`             | `string`       | `Show password`                                   |
| `hidePasswordAriaLabel`     | `hide-password-aria-label`     | Optional  | `Aria label for the button to hide password`             | `string`       | `Hide password`                                   |
| `usernameRequired`          | `username-required`            | Optional  | `	Whether the username field is required`                 | `boolean`      | `false`                                           |
| `pwdPlaceholder`            | `pwd-placeholder`              | Optional  | `	Placeholder text for the password field`                | `string`       | `Type your password here...`                      |
| `usernamePlaceholder`       | `username-placeholder`         | Optional  | `Placeholder text for the username field`                | `string`       | `Type your username here...`                      |
| `forgotPasswordLink`        | `forgot-password-link`         | Optional  | `URL for the forgot password link`                       | `string`       | `''`                                              |
| `forgotPasswordLabel`       | `forgot-password-label`        | Optional  | `Label text for the forgot password link`                | `string`       | `'Forgot password?`                               |
| `loginTitle`                | `login-title`                  | Optional  | `Title of the login form`                                | `string`       | `Login`                                           |
| `indicationLabel`           | `indication-label`             | Optional  | `Label indicating required fields`                       | `string`       | `Required fields`                                 |
| `submitBtnAriaLabel`        | `submit-btn-aria-label`        | Optional  | `Aria-label of submit button`                            | `string`       | `Submit the form`                                 |

_e.g:_

```html
<ip-login
  username-label="Username"
  password-label="Password"
  submit-button-label="Login"
  username-error-msg="Username is required"
  username-invalid-email-msg="The email address is invalid"
  password-length-error-msg="The password must contain at least 8 characters"
  password-uppercase-error-msg="Password must contain at least one capital"
  password-lowercase-error-msg="The password must contain at least a lower case"
  password-digit-error-msg="The password must contain at least one digit"
  username-type="email"
  show-password-aria-label="Show password"
  hide-password-aria-label="Hide password"
  username-required
  pwd-placeholder="Type your password here..."
  username-placeholder="Type your username here..."
  forgot-password-link="https://example.com/forgot-password"
  forgot-password-label="Forgot password?"
  login-title="Login"
  indication-label="Required fields"
></ip-login>
```

## Events

The login-form component emits a `formSubmitted` event when the form is successfully submitted. You can listen to this event in your JavaScript code:

_e.g:_

```javascript
document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('login-form');

  loginForm.addEventListener('formSubmitted', function (event) {
    console.log('Form submitted with:', event.detail);
  });
});
```

## Customization

You can customize the appearance of the login-form component using CSS variables and part selectors:

### CSS variables

- **--primary-color**
- **--secondary-color**
- **--focus-color**

### Part Selectors

- **title**:For the title section
- **indication**: For the required indication label
- **username-label**: For the username label.
- **username-input**: For the username input field
- **passsword-label**: For the password label.
- **passsword-input**: For the password input field
- **toggle-password**: For the button to toggle password visibility.
- **error-message**: For error message.
- **forgot-password**: For the forgot password link.
- **submit-btn**: For the submit button.

  To update the values use the following:

```css
ip-login {
  --primary-color: #006342;
  --secondary-color: #000000;
}

ip-login::part(title) {
  color: var(--primary-color);
}

ip-login::part(username-input) {
  width: 250px;
}
```
