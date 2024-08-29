# Breadcrumb documentation

## Installation

### Step 1:

Install the ip-breadcrumb component as a dependency in the project:

```bash
npm install ip-breadcrumb
```

### Step 2:

Import module in script file:

```javascript or typescript
import '../node_modules/ip-breadcrumb/dist/ip-breadcrumb/ip-breadcrumb.esm';
```

## Usage:

To use this component, we must add the properties as attributes.

### Properties

| Property          | Attribute           | Necessity | Description                                                                          | Type     | Default     |
| ----------------- | ------------------- | --------- | ------------------------------------------------------------------------------------ | -------- | ----------- |
| `breadcrumbItems` | `breadcrumb-items`  | Required  | `A JSON string of an array of breadcrumb items, each with a label and optional link` | `string` | `'[]'`      |
| `breadcrumbTitle` | `breadcrumb-title`  | Optional  | `Title of the breadcrumb navigation`                                                 | `string` | `''`        |
| `prefixAriaLabel` | `prefix-aria-label` | Optional  | `Aria label prefix for the links`                                                    | `string` | `'Link to'` |
| `separatorIcon`   | `separator-icon`    | Optional  | `The icon or text used to separate breadcrumb items`                                 | `string` | `'>'`       |

_e.g:_

```html
<ip-breadcrumb
  breadcrumb-title="Your Path"
  breadcrumb-items='[{"label": "Home", "link": "/home"}, {"label": "Library", "link": "/library"}, {"label": "Current Location"}]'
  prefix-aria-label="Navigate to"
  separator-icon="&gt;"
></ip-breadcrumb>
```

### Customization

We have a set of classes that could be used to customise the `ip-breadcrumb`:

- **title**: for the breadcrumb title
- **breadcrumb**: for breadcrumb item
- **icon** : for the separator icon

To update the values use the following:

```css
ip-breadcrumb::part(title) {
  color: #305b38;
  font-size: 32px;
}
```

```scss
ip-breadcrumb {
  &::part(title) {
    color: #305b38;
    font-size: 32px;
  }
}
```
