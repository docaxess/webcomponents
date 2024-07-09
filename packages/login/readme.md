# Login Documentation

In this component we have two elements combined:

- **ip-email**: for email or username input
  [Figma link](https://www.figma.com/design/63w4li687mfdYtETlBu6a9/Component---Mixed?node-id=616-2637&m=dev)

[Design System link](https://design.ipedis.com/5dda74a23/p/83b269-text-input)

- **ip-password**: for password input
  [Figma link](https://www.figma.com/design/63w4li687mfdYtETlBu6a9/Component---Mixed?node-id=616-2637&m=dev)

[Design System link](https://design.ipedis.com/5dda74a23/p/59c81f-password-input)

## Installation:

  <!-- TODO  -->

### Step 1:

Install the ip-tooltip component as a dependency in the project:

```bash
npm install
```

### Step 2:

Import module in script file:

```bash
import '../node_modules/';
```

## Usage:

These components can be utilized as simple inputs, with the addition of validators and properties such as value, name, and disabled.

To make use of these components, we need to add the properties as attributes.

### Component Tag:

Use the `<ip-email>` and `<ip-password>` tag in your JSX/HTML.

### Properties

### Ip-email

| Property       | Attribute       | Necessity | Description                                                                                                   | Type      | Default     |
| -------------- | --------------- | --------- | ------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `errorMessage` | `error-message` | Required  | `The error message when the user enters a wrong username or email`                                            | `string`  | `undefined` |
| `inputLabel`   | `input-label`   | Optional  | `The name of the input, it's default value is "Email", you can specify it.`                                   | `string`  | `"Email"`   |
| `invalid`      | `invalid`       | Optional  | `It's a boolean Prop, you can attach it to your function, if invalid="true", the error-message is displayed.` | `boolean` | `false`     |

### Ip-password

| Property             | Attribute              | Necessity | Description                                                                                                   | Type      | Default     |
| -------------------- | ---------------------- | --------- | ------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `errorMessage`       | `error-message`        | Required  | `The error message when the user enters a wrong username or email`                                            | `string`  | `undefined` |
| `forgotPasswordLink` | `forgot-password-link` | Required  | `your personal link for reinitialize password`                                                                | `string`  | `undefined` |
| `invalid`            | `invalid`              | Optional  | `It's a boolean Prop, you can attach it to your function, if invalid="true", the error-message is displayed.` | `boolean` | `false`     |

_e.g:_

```html
<form class="login-form">
  <ip-email
    class="form-group "
    error-message="The username entered is incorrect"
    invalid="true"
    input-label="User name"
  >
  </ip-email>
  <ip-password
    class="form-group "
    error-message="The password entered is incorrect"
    invalid="true"
    forgot-password-link="https://your_personal_link_to_reset_password"
  >
  </ip-password>
  <button class="btn" type="submit">Login</button>
</form>
```

# Customization:

We have a set of predefined variable used to customisation the tooltip:

- **--primary-color**
- **--secondary-color**

To update the values use the following:

```css
ip-email {
  --primary-color: #006342;
  --secondary-color: #000000;
}

ip-password {
  --primary-color: #006342;
  --secondary-color: #000000;
}
```
