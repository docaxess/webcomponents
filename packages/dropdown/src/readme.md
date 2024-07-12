# Dropdown documentation

[Figma link] (https://www.figma.com/design/63w4li687mfdYtETlBu6a9/Component---Mixed?node-id=9-137&t=QwkWqR8keR0rsotb-0)

## Installation

### Step 1:

Install the ip-dropdown component as a dependency in the project:

```bash
npm install ip-dropdown
```

### Step 2:

Import module in script file:

```javascript or typescript
import "../node_modules/ip-dropdown/dist/ip-dropdown/ip-dropdown.esm";
```

## Usage:

To use this component, we must add the properties as attributes.

### Properties

| Property        | Attribute        | Necessity | Description                                                    | Type     | Default              |
| --------------- | ---------------- | --------- | -------------------------------------------------------------- | -------- | -------------------- |
| `itemsOptions`  | `items-options`  | Required  | `it is an array of string used for items in the dropdown menu` | `string` | `"[]"`               |
| `dropdownTitle` | `dropdown-title` | Optional  | `Title of dropdown menu`                                       | `string` | `undefined`          |
| `placeholder`   | `placeholder`    | Optional  | `The placeholder of dropdown`                                  | `string` | `"Select an option"` |

_e.g:_

```html
<ip-dropdown
  dropdown-title="Country"
  placeholder="Select a country:"
  items-options='["Mauritius", "France", "Germany", "Zimbabwe"]'
>
</ip-dropdown>
```

### Customization

We have a set of predefined variable used to customize the dropdown:

- **--primary-color**
- **--color-hover**
- **--font-color**
- **--selected-bg-color**
- **--font-size**

To update the values use the following:

```css
ip-checkbox-list {
  --primary-color: #006342;
  --secondary-color: #000000;
}
```

## Event

To listen this event emitted,we have definied `itemSelected` event in this component.

The `itemSelected` event is fired when a user selects an item in the dropdown. You can listen to this event in your application to handle the selection.

_e.g:_

```javascript
const dropdown = document.querySelector("ip-dropdown");

dropdown.addEventListener("itemSelected", (event) => {
  const selectedItem = event.detail;
  console.log("Item selected :", selectedItem);
});
```
