# ip-table

[Figma link](https://www.figma.com/design/63w4li687mfdYtETlBu6a9/Component---Mixed?node-id=710-4231&m=dev)

## Installation

<!-- TO DO -->

### Step 1:

Install the `ip-table` component as a dependency in your project:

```bash
npm install ip-table
```

### Step 2:

Import module in script file:

```bash
import '../node_modules/ip-table/dist/ip-table/ip-table.esm';
```

## Usage:

To use this component, we must add the properties as attributes.

### Properties

| Property   | Attribute  | Necessity | Description                                                            | Type     | Default       |
| ---------- | ---------- | --------- | ---------------------------------------------------------------------- | -------- | ------------- |
| `options`  | `options`  | Required  | `The options to display in the table. Should be a valid JSON string. ` | `string` | `undefined`   |
| `currency` | `currency` | Optional  | `The currency to display for prices.`                                  | `string` | `"$"`         |
| `state1`   | `state-1`  | Optional  | `The first state of stock`                                             | `string` | `"In Stock"`  |
| `state2`   | `state-2`  | Optional  | `The second state of stock`                                            | `string` | `"Backorder"` |
| `state3`   | `state-3`  | Optional  | `The third state of stock`                                             | `string` | `"Low Stock"` |

#### options Property

The options property expects a JSON string representing an array of objects. Each object should have the following properties:

- **name**: The name of the product.
- **number**: The product number.
- **category**: The category of the product.
- **price**: The price of the product.
- **status**: The current stock status of the product.

Ensure that the options string is correctly formatted JSON and contains objects with all required properties (name, number, category, price, status). If the options string is invalid or does not conform to this structure, the component may not render correctly.

_e.g:_

```html
<ip-table
  state-1="Available"
  state-2="Unavailable"
  currency="€"
  options='[
    {"name": "Product A", "number": 1, "category": "Category A", "price": 10.99, "status": "Available"},
    {"name": "Product B", "number": 2, "category": "Category B", "price": 19.99, "status": "Unavailable"}
  ]'
>
</ip-table>
```

## Customization

We have a set of predefined variable used to customisation the tooltip:

- **--primary-color**
- **--secondary-color**
- **--thead-color**
- **--hover-color**
- **--font-size** -**--font-family**

  To update the values use the following:

```css
ip-tooltip {
  --primary-color: #006342;
  --secondary-color: #000000;
}
```
