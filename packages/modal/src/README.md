# Modal documentation

## Installation

### Step 1:

Install the ip-modal component as a dependency in the project:

```bash
npm install ip-modal
```

### Step 2:

Import module in script file:

```javascript or typescript
import '../node_modules/ip-modal/dist/ip-modal/ip-modal.esm';
```

## Usage:

To use this component, we must add the property as attribute and use slot for the modal content.

### Property

| Property     | Attribute     | Necessity | Description                            | Type     | Default      |
| ------------ | ------------- | --------- | -------------------------------------- | -------- | ------------ |
| `buttonText` | `button-text` | Required  | `it is the text in the trigger button` | `string` | `Open modal` |

### Content

The content of the modal should have as attribute slot="content".

_e.g:_

```html
<ip-modal button-text="Open Modal">
  <div slot="content" class="content">
    Join thousands getting emails in their inbox. Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Hic, unde ipsa quam quo aperiam nostrum
    repellat laboriosam praesentium atque saepe, obcaecati, perferendis
    molestias delectus? Maiores, cupiditate tempora. Obcaecati, omnis sunt!
  </div>
</ip-modal>
```

## Customization

### Style

We have a set of predefined variable used to customize the modal:

- **--svg-color**
- **--svg-size**

### Class

We have a set of classes that could be used to customise accordingly:

- **dialog-content**: for the container of the modal
- **trigger-button**: for the trigger button

```css
ip-modal::part(trigger-button) {
  background-color: #305b38;
  border: 1px solid black;
}
```
