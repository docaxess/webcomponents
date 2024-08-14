# Tap-panel documentation

## Installation

### Step 1:

Install the ip-show-more component as a dependency in the project:

```bash
npm install ip-show-more
```

### Step 2:

Import module in script file:

```javascript or typescript
import '../node_modules/ip-show-more/dist/ip-show-more/ip-show-more.esm';
```

## Usage:

To use the ip-show-more component, use this tag `<ip-show-more></ip-show-more>` and use a slot for the content.

To modify the text in the button, you must use properties as attributes.

### Properties

| Property       | Attribute        | Necessity | Description            | Type     | Default       |
| -------------- | ---------------- | --------- | ---------------------- | -------- | ------------- |
| `showLessText` | `show-less-text` | Optional  | the text for show less | `string` | `'Show Less'` |
| `showMoreText` | `show-more-text` | Optional  | the text for show-more | `string` | `'Show More'` |

The component uses a slot named `content` for the expanded content.

_e.g:_

```html
<ip-show-more show-less-text="Voir moins" show-more-text="Voir plus">
  <div slot="content">-- Expanded content goes here --</div>
</ip-show-more>
```

## Customization

We have a set of predefined variable used to customize the show-more button:

- **--ip-primary-color**
- **--ip-secondary-color**
- **--ip-font-size**
- **--ip-font-color**
- **--ip-font-family**
- **--ip-svg-color**

To update the values use the following:

```css
ip-show-more {
  --ip-primary-color: #006342;
  --ip-secondary-color: #000000;
}
```
