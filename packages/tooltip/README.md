# ip-tooltip

[Figma link](https://www.figma.com/design/63w4li687mfdYtETlBu6a9/Component---Mixed?node-id=3-74&t=Qo4jBDW1OXa6UqRi-0)

[Design System link](https://design.ipedis.com/5dda74a23/p/896b0d-tooltip)

## Installation

<!-- TODO  -->

### Step 1:

Install the ip-tooltip component as a dependency in the project:

```bash
npm install ip-tooltip
```

### Step 2:

Import module in script file:

```bash
import '../node_modules/ip-tooltip/dist/ip-tooltip/ip-tooltip.esm';
```

## Usage:

To use this component, we must add the properties as attributes.

### Properties

| Property          | Attribute           | Necessity | Description                                                             | Type                 | Default     |
| ----------------- | ------------------- | --------- | ----------------------------------------------------------------------- | -------------------- | ----------- |
| `tooltipTrigger`  | `tooltip-trigger`   | Required  | `this is the button that will display the tooltip`                      | `string`             | `undefined` |
| `tooltipContent`  | `tooltip-content`   | Required  | `this is the text that will be displayed in the tooltip`                | `string`             | `undefined` |
| `type`            | `type`              | Optional  | `If the tooltip needs to show up when content is clicked or hovered.`   | `"click" \| "hover"` | `"hover"`   |
| `tooltipBtnClose` | `tooltip-btn-close` | Optional  | `if we need to add close button in the tooltip`                         | `boolean`            | `false`     |
| `tooltipTitle`    | `tooltip-title`     | Optional  | `this is the title of the tooltip if we want to put a title`            | `string`             | `undefined` |
| `tooltipBtn1`     | `tooltip-btn-1`     | Optional  | `if we need to add button in the tooltip`                               | `string`             | `undefined` |
| `tooltipBtn2`     | `tooltip-btn-2`     | Optional  | `if we need to add button in the tooltip`                               | `string`             | `undefined` |
| `btn1AriaLabel`   | `btn-1-aria-label`  | Optional  | `this is the aria-label of button ,and it's requierd for accessibility` | `string`             | `undefined` |
| `btn2AriaLabel`   | `btn-2-aria-label`  | Optional  | `this is the aria-label of button ,and it's requierd for accessibility` | `string`             | `undefined` |

_e.g:_

```html
<ip-tooltip
  tooltip-title="Tooltip Title"
  tooltip-content="The text in the tooltip"
  tooltip-trigger="Click me!"
  tooltip-btn-1="Don't show again"
  btn-1-aria-label="Don't show again"
  tooltip-btn-2="Learn More"
  btn-2-aria-label="Learn More"
  tooltip-btn-close="true"
>
</ip-tooltip>
```

_e.g:_

```html
<div class="container">
  <span>
    For more information , please
    <ip-tooltip
      tooltip-trigger="Click me!"
      tooltip-content="The text in the tooltip"
    ></ip-tooltip>
  </span>
</div>
```

## Customization:

We have a set of predefined variable used to customisation the tooltip:

- **--primary-color**
- **--secondary-color**

To update the values use the following:

```css
ip-tooltip {
  --primary-color: #006342;
  --secondary-color: #000000;
}
```

## Event
