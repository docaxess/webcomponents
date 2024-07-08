# Radio documentation

[Figma link](https://www.figma.com/design/63w4li687mfdYtETlBu6a9/Component---Mixed?node-id=936-3250&t=E3L8i2rj3ra2dT7S-0)

[Design System link](https://design.ipedis.com/5dda74a23/p/98cd0a-radio-button)

## Installation

<!-- TODO -->

### Step 1:

Install the ip-radio component as a dependency in the project:

```bash
npm install ip-radio
```

### Step 2:

Import module in script file:

```javascript or typescript
import "../node_modules/ip-radio/dist/ip-radio/ip-radio.esm";
```

## Usage:

To use this component, we must add the properties as attributes.

### Properties

| Property          | Attribute           | Necessity | Description                                                            | Type                  | Default     |
| ----------------- | ------------------- | --------- | ---------------------------------------------------------------------- | --------------------- | ----------- |
| `options`         | `options`           | Required  | `This is a stringifird JSON array of radio options`                    | `string`              | `undefined` |
| `labelPosition`   | `label-position`    | Optional  | `To determine where the label of the radio button will be positioned.` | `"after" \| "before"` | `"after"`   |
| `defaultOptionId` | `default-option-id` | Optional  | `if we need to set an option checked as default`                       | `string \| number`    | `undefined` |

#### Options

This is a stringified JSON arary of option. Each option is an object with an `id`, a `label`, and an optional `disabled` property.

- **id** : this is the id of the input
- **label** : this is the label for radio option
- **disabled** : when we need to set the option to disable, this is boolean and as default it's false

Example:

```html
<ip-radio
  label-position="before"
  default-option-id="3"
  options='[
      {"id": "1", "label": "Option 1", "disabled": true},
      {"id": "2", "label": "Option 2"}, 
      {"id": "3", "label": "Option 3"}
      ]'
>
</ip-radio>
```

### Customization:

We have a set of predefined variable used to customisation the checkbox:

- **--primary-color**
- **--secondary-color**
- **--radio-size**

To update the values use the following:

```css
ip-checkbox-list {
  --primary-color: #006342;
  --secondary-color: #000000;
  --radio-size: 18px;
}
```

### Events

- `selectionChanged`: This event is emitted when a radio button is selected. The event detail is the selected option.

_e.g:_

```javascript
const radio = document.querySelector("ip-radio");
radio.addEventListener("selectionChanged", (event) => {
  console.log("selectionChanged", event.detail);
});
```
