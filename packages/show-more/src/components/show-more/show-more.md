# Tap-panel documentation

## Installation

### Step 1:

Install the ip-show-more component as a dependency in the project:

```bash
npm install ip-radio
```

### Step 2:

Import module in script file:

```javascript or typescript
import '../node_modules/ip-show-more/dist/ip-show-more/ip-show-more.esm';
```

## Usage:

To use the ip-show-more component, use this tag `<ip-show-more></ip-show-more>` and use a slot for the content.

The component uses a slot named `content` for the expanded content.

_e.g:_

```html
<ip-show-more svg-color="#C92D6A">
  <div slot="content">-- Expanded content goes here --</div>
</ip-show-more>
```

## Customization

We have a set of predefined variable used to customize the show-more button:

- **--primary-color**
- **--secondary-color**
- **--font-size**
- **--font-color**
- **--font-family**
- **--svg-color**

To update the values use the following:

```css
ip-show-more {
  --primary-color: #006342;
  --secondary-color: #000000;
}
```
