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

| Property  | Attribute | Necessity | Description                                                         | Type     | Default     |
| --------- | --------- | --------- | ------------------------------------------------------------------- | -------- | ----------- |
| `columns` | `columns` | Required  | `This is a JSON string representing an array of objects for thead ` | `string` | `undefined` |
| `rows`    | `rows`    | Required  | `This is a JSON string representing an array of objects for tbody ` | `string` | `undefined` |

#### Columns property

The `columns` property is a JSON string representing an array of column definitions. Each column must have a `header` and a `type`:

- `header`: A string that represents the name of the column. This will be displayed as the column header in the table.
- `type`: A string that represents the type of data in the column. This should be either 'string' or 'number'. This is used to determine how to sort the column. 'string' type columns are sorted alphabetically, while 'number' type columns are sorted numerically.

### Rows property

The `rows` property is a JSON string representing an array of row objects. Each row object should contain key-value pairs where keys correspond to the column headers and values represent the cell data.

_e.g:_

```html
<ip-table
  columns='[
      { "header": "Name" , "type": "string"},
      { "header": "Age", "type": "number" },
      ]'
  rows='[
      {"Name":"Benoit", "Age":25}
      {"Name":"Linda", "Age":23}
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
ip-table {
  --primary-color: #006342;
  --secondary-color: #000000;
}
```
