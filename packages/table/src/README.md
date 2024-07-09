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

| Property | Attribute | Necessity | Description                                                         | Type     | Default     |
| -------- | --------- | --------- | ------------------------------------------------------------------- | -------- | ----------- |
| `thead`  | `thead`   | Required  | `This is a JSON string representing an array of objects for thead ` | `string` | `undefined` |
| `tbody`  | `tbody`   | Required  | `This is a JSON string representing an array of objects for tbody ` | `string` | `undefined` |

#### Thead property

The `thead` property is a JSON string that represents an array of objects. Each object represents a column in the table and should have the following properties:

- `header`: A string that represents the name of the column. This will be displayed as the column header in the table.
- `type`: A string that represents the type of data in the column. This should be either 'string' or 'number'. This is used to determine how to sort the column. 'string' type columns are sorted alphabetically, while 'number' type columns are sorted numerically.

### Tbody property

The `tbody` property is a JSON string that represents a 2D array. Each sub-array represents a row in the table, and each item in the sub-array represents a cell in the row. The order of the cells in each row should match the order of the columns in the `thead` property.

_e.g:_

```html
<ip-table
  thead='[
      { "header": "Name" , "type": "string"},
      { "header": "Number", "type": "number" },
      { "header": "Category", "type": "string" },
      { "header": "Price" ,"type": "number"},
      { "header": "Status", "type": "string" }
      ]'
  tbody='[
      ["Slim Fit chinos", "9504", "Men’s outwear", " 98.25", "In Stock"],
      ["Wide-Brimmed Floppy Hat", "9000", "Women’s Outwear", " 145.66", "Backorder"],
      ["V-Neck Cashmere Sweater", "9485", "Men’s outwear", " 65.00", "Low Stock"],
      ["Striped Off-Shoulder To", "1524", "Women’s Outwear", " 56.22", "In Stock"],
      ["Quilted Bomber Jacket", "1235", "Men’s outwear", " 14.56", "In Stock"],
      ["Women’s Chescott Down Jacket", "5689", "Women’s Outwear", " 100", "Backorder"],
      ["Denim Trucker Jacket", "2394", "Men’s outwear", " 52.45", "In Stock"],
      ["High-Waisted Skinny Jeans", "7859", "Women’s Outwear", " 125.00", "Low Stock"],
      ["Men’s Harrington Jacket", "5600", "Men’s outwear", " 150.58", "In Stock"]
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
- **--font-size**
- **--font-family**

  To update the values use the following:

```css
ip-tooltip {
  --primary-color: #006342;
  --secondary-color: #000000;
}
```
