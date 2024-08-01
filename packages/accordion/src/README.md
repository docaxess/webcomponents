# Tap-panel documentation

## Installation

### Step 1:

Install the ip-accordion component as a dependency in the project:

```bash
npm install ip-accordion
```

### Step 2:

Import module in script file:

```javascript or typescript
import '../node_modules/ip-accordion/dist/ip-accordion/ip-accordion.esm';
```

## Usage:

To use the ip-accordion component, you need to define the properties as attributes and provide slot content for each accordion item.

### Properties

| Property           | Attribute             | Necessity | Description                                                | Type                                    | Default     |
| ------------------ | --------------------- | --------- | ---------------------------------------------------------- | --------------------------------------- | ----------- |
| `accordionHeaders` | `accordion-headers`   | Required  | Defines headers for each accordion item using a JSON array | `accordionHeadersInterface[] \| string` | `undefined` |
| `isFirstPanelOpen` | `is-first-panel-open` | Optional  | Controls whether the first panel is open by default        | `boolean`                               | `undefined` |
| `isSingleOpen`     | `is-single-open`      | Optional  | Determines if only one panel can be open at a time         | `boolean`                               | `undefined` |
| `titleTag`         | `title-tag`           | Optional  | Specifies the HTML tag to use for the accordion headers    | `string`                                | `'h2'`      |

#### accordion-headers

This attribute sets the accordion header details. Each header object can have the following properties:

- **title** : The title of the accordion header (optional)
- **iconPath**: Path to the icon image (optional)
- **iconActivePath**: Path to the icon image when the header is active (optional)
- **subtitle**: A subtitle for the header (optional)
- **btnAlt**: Alt text for the button when closed (optional)
- **btnAltClose**: Alt text for the button when open (optional)
- **id**: Unique ID for the button (optional)
- **ariaText**: Accessible name for the panel (required)

### Panels Content

The contents of each panel should be placed inside `<div>` elements with slot attributes matching accordion-1, accordion-2, etc.

```html
<ip-accordion
  accordion-headers='[
        {"title":"Section 1", "iconPath": "assets/images/icon1.svg", "iconActivePath": "assets/images/icon1-active.svg", "btnAlt": "Open Section 1", "btnAltClose": "Close Section 1", "ariaText": "section-1"},
        {"title":"Section 2", "iconPath":"assets/images/icon2.svg", "iconActivePath": "assets/images/icon2-active.svg", "btnAlt": "Open Section 2", "btnAltClose": "Close Section 2", "ariaText": "section-2"},
        {"title":"Section 3", "iconPath":"assets/images/icon3.svg", "iconActivePath": "assets/images/icon3-active.svg", "btnAlt": "Open Section 3", "btnAltClose": "Close Section 3", "ariaText": "section-3"}
      ]'
  is-first-panel-open
  is-single-open
  title-tag="h3"
>
  <div slot="accordion-1">Content for Section 1</div>
  <div slot="accordion-2">Content for Section 2</div>
  <div slot="accordion-3">Content for Section 3</div>
</ip-accordion>
```

## Customization

### Style

We have a set of predefined variable used to customize the acc-panel:

- **--ip-acc-primary-color**
- **--ip-acc-secondary-color**
- **--ip-acc-font**
- **--ip-acc-icon-size**

To update the values use the following:

```css
ip-accordion {
  --ip-acc-primary-color: #006342;
  --ip-acc-secondary-color: #000000;
  --ip-acc-icon-size: 30px;
}
```

### Class

We have a set of classes that could be used to customise accordingly:

- **ip-accordion**: for the container of the panels
- **acc-content**: for the content of the panel
- **acc-header**: for the header of the panel
- **acc-panel**: for each panel div

```css
ip-accordion::part(acc-content) {
  background-color: #305b38;
}
```

```scss
ip-accordion {
  &::part(acc-content) {
    background-color: #305b38;
  }
}
```

_e.g:_

```html
<ip-accordion>
  <div class="my-class">--content 1--</div>

  <div class="my-class">--content 2--</div>

  <div class="my-class">--content 3--</div>
</ip-accordion>
```
