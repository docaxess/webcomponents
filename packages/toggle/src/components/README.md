# ip-toggle

[Figma link](https://www.figma.com/design/63w4li687mfdYtETlBu6a9/Component---Mixed?node-id=634-6067&t=0CvJgL53rYwRB47n-0)

[Design System link](https://design.ipedis.com/5dda74a23/p/81d47b-toggle/b/81627b)

## Installation

<!-- TODO -->

### Step 1:

Install the ip-toggle component as a dependency in the project:

```bash
npm install ip-toggle
```

### Step 2:

Import module in script file:

```javascript or typescript
import "../node_modules/ip-toggle/dist/ip-toggle/ip-toggle.esm";
```

## Usage:

To use this component, we must add the properties as attributes.

### Properties

| Property         | Attribute         | Necessity | Description                                                           | Type      | Default     |
| ---------------- | ----------------- | --------- | --------------------------------------------------------------------- | --------- | ----------- |
| `ariaLabel`      | `aria-label`      | Required  | `it is the aria-label of content for accessibility`                   | `string`  | `undefined` |
| `checked`        | `checked`         | Optional  | `it is the initial state of checked`                                  | `boolean` | `false`     |
| `activeLabel`    | `active-label`    | Optional  | `this is the text that will be displayed when the toggle is active`   | `string`  | `undefined` |
| `inactiveLabel`  | `inactive-label`  | Optional  | `this is the text that will be displayed when the toggle is inactive` | `string`  | `undefined` |
| `toggleDisabled` | `toggle-disabled` | Optional  | `when we need to set the toggle to disabled`                          | `boolean` | `false`     |
| `size`           | `size`            | Optional  | `we have three predefined size: large ,medium ,small`                 | `string`  | `medium`    |

_e.g:_

```html
<ip-toggle
  active-label="ON"
  inactive-label="OFF"
  aria-label="Toggle notifications on or off"
  size="small"
  checked="true"
>
</ip-toggle>
```

### Toogle Content

We have predefined two slots for the label before the switch and for the explanatory text of the toggle if necessary.

- **slot="switch-label"** : This is descriptive text informs the user about the function of the checkbox.
- **slot="helper-text"** : This is additional information provides guidance on the usage of the checkbox.

```html
<ip-toggle aria-label="Toggle notifications on or off">
  <label slot="switch-label"> Activate strong authentication </label>
  <p slot="helper-text">This is the helper text.</p>
</ip-toggle>
```

## Customization:

We have a set of predefined variable used to customisation the slide:

- **--primary-color**
- **--secondary-color**
- **--font-family**
- **--text-color**

To update the values use the following:

```css
ip-toggle {
  --primary-color: #006342;
  --secondary-color: #000000;
}
```
