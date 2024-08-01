# Footnote documentation

## Installation

<!-- TODO -->

### Step 1:

Install the ip-footnote component as a dependency in the project:

```bash
npm install ip-footnote
```

### Step 2:

Import module in script file:

```javascript or typescript
import '../node_modules/ip-footnote/dist/ip-footnote/ip-footnote.esm';
```

## Usage:

To use this component, we must add the properties as attributes.

The text where we will put the id of the footnote must have an `id=ref{this.identifier}` to allow to return to the text when one is on the footnote.

### Properties

| Property     | Attribute    | Necessity | Description               | Type     | Default     |
| ------------ | ------------ | --------- | ------------------------- | -------- | ----------- |
| `identifier` | `identifier` | Required  | The ID of the footnote.   | `string` | `undefined` |
| `text`       | `text`       | Required  | The text of the footnote. | `string` | `undefined` |

Example:

```html
<p>
  Here is a sentence with a footnote reference<sup
    ><a href="#footnote-1" id="ref1">1</a></sup
  >.
</p>
<ip-footnote
  id="footnote-1"
  identifier="1"
  text="This is a detailed explanation or reference for the footnote."
></ip-footnote>
```

## Customization

We have a set of predefined variable used to customize the dropdown:

- **--border-left**
- **--font-color**
- **--font-size**
- **--identifier-color**
- **--identifier-size**
- **--svg-size**
- **--svg-color**

To update the values use the following:

```css
ip-footnote {
  --font-color: #006342;
  --font-size: #000000;
  --border-left: 2px solid #000000;
}
```
