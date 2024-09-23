# ip-slider

## Installation

### Step 1:

Install the ip-slider component as a dependency in the project:

```bash
npm install ip-slider
```

### Step 2:

Import module in script file:

```javascript or typescript
import '../node_modules/ip-slider/dist/ip-slider/ip-slider.esm';
```

## Usage:

To use this component, we must add the properties as attributes and use slot for each content of slide.

### Properties

| Property                   | Attribute                     | Necessity | Description                                               | Type      | Default            |
| -------------------------- | ----------------------------- | --------- | --------------------------------------------------------- | --------- | ------------------ |
| `itemToShow`               | `item-to-show`                | Required  | The number of slides to display at once in the viewport.  | `number`  | `undefined`        |
| `slideTitleAria`           | `slide-title-aria`            | Optional  | The aria label of the slider component.                   | `string`  | `undefined`        |
| `slideGap`                 | `slide-gap`                   | Optional  | The gap between each slide in pixels.                     | `number`  | `30`               |
| `isSlideBullet`            | `is-slide-bullet`             | Optional  | Determines if pagination bullets are displayed.           | `boolean` | `true`             |
| `isPreviousNextNavigation` | `is-previous-next-navigation` | Optional  | Enables or disables the previous/next navigation buttons. | `boolean` | `true`             |
| `previousBtnAria`          | `previous-btn-aria`           | Optional  | ARIA label for the previous button for accessibility.     | `string`  | `'Previous slide'` |
| `nextBtnAria`              | `next-btn-aria`               | Optional  | ARIA label for the next button for accessibility.         | `string`  | `'Next slide'`     |
| `bulletBtnAria`            | `bullet-btn-aria`             | Optional  | ARIA label for the bullet buttons for accessibility.      | `string`  | `'Go to slide'`    |

### Slot

The contents of the slide should have as attribute slot="slide-1" and value of slide-\* incremented accordingly

_e.g:_

```html
<ip-slider-sl-1 item-to-show="2" slide-gap="30">
  <div class="slot-content" slot="slide-1">
    <p>Content for Slot 1</p>
  </div>
  <div class="slot-content" slot="slide-2">
    <p>Content for Slot 2</p>
  </div>
  <div class="slot-content" slot="slide-3">
    <p>Content for Slot 3</p>
  </div>
  <div class="slot-content" slot="slide-4">
    <p>Content for Slot 4</p>
  </div>
  <div class="slot-content" slot="slide-5">
    <p>Content for Slot 5</p>
  </div>
  <div class="slot-content" slot="slide-6">
    <p>Content for Slot 6</p>
  </div>
  <div class="slot-content" slot="slide-7">
    <p>Content for Slot 7</p>
  </div>
  <div class="slot-content" slot="slide-8">
    <p>Content for Slot 8</p>
  </div>
  <div class="slot-content" slot="slide-9">
    <p>Content for Slot 9</p>
  </div>
</ip-slider-sl-1>
```

## Customization

### Style

We have a set of predefined variable used to customize the slider:

- **--ip-sl-primary-color**
- **--ip-sl-secondary-color**
- **--svg-color**

### Part

Also, We have a set of parts that could be used to customize accordingly:

- **bullet-btn**: for the bullet button
- **left-btn**: for the left button
- **right-btn**: for the right button

To update the values use the following:

```css
ip-slider-sl-1 {
  --ip-sl-primary-color: #006342;
  --ip-sl-secondary-color: #000000;
}

ip-slider-sl-1::part(bullet-btn) {
  width: 10px;
  height: 10px;
}
```
