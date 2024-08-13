# ip-alert

[Figma link](https://www.figma.com/design/63w4li687mfdYtETlBu6a9/Component---Mixed?node-id=2954-6560&m=dev)

## Installation

### Step 1:

Install the ip-alert component as a dependency in the project:

```bash
npm install ip-alert
```

### Step 2:

Import module in script file:

```javascript or typescript
import '../node_modules/ip-alert/dist/ip-alert/ip-alert.esm';
```

## Usage:

To use this component, we must add the properties as attributes.

### Properties

| Property     | Attribute     | Necessity | Description                       | Type                                           | Default  |
| ------------ | ------------- | --------- | --------------------------------- | ---------------------------------------------- | -------- |
| `message`    | `message`     | Required  | `the message for the alert`       | `string`                                       | `''`     |
| `type`       | `type`        | Required  | `the type of the alert`           | `"danger" \| "info" \| "success" \| "warning"` | `'info'` |
| `alertTitle` | `alert-title` | Optional  | `the title of alert if it exists` | `string`                                       | `''`     |

_e.g:_

```html
<ip-alert
  message="Your message has been sent successfully"
  type="success"
  alert-title="Success"
>
</ip-alert>
```

## Customization:

We have a set of predefined variable used to customisation the slide:

- **---font-size**
- **--message-color**
- **--font-family**
- **--font-title-size**

To update the values use the following:

```css
ip-alert {
  --font-family: 'Nunito Sans';
  --font-title-size: 16px;
}
```
