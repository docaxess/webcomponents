# Tap-panel documentation

## Installation

### Step 1:

Install the ip-tab-panel component as a dependency in the project:

```bash
npm install ip-tab-panel
```

### Step 2:

Import module in script file:

```javascript or typescript
import '../node_modules/ip-tab-panel/dist/ip-tab-panel/ip-tab-panel.esm';
```

## Usage:

To use this component, we must add the properties as attributes and use slot for each content of tab.

### Properties

| Property          | Attribute           | Necessity | Description                                                                                  | Type                            | Default     |
| ----------------- | ------------------- | --------- | -------------------------------------------------------------------------------------------- | ------------------------------- | ----------- |
| `tabPanelHeaders` | `tab-panel-headers` | Required  | It defines headers for each tab in the IP Tab Panel component using a JSON array             | `TabPanelInterface[] \| string` | `undefined` |
| `selectedTab`     | `selected-tab`      | Optional  | This is the tab that displayed by default                                                    | `string`                        | `undefined` |
| `tabPanelTitle`   | `tab-panel-title`   | Optional  | This is the title of the tap-panel                                                           | `string`                        | `undefined` |
| `titleTag`        | `title-tag`         | Optional  | It represents the tag we want to use for the tab-panel-title; it's required if you add title | `string`                        | `undefined` |

#### tab-panel-headers

This is used to set the tab-panel header title. It has 4 properties:

- **title** : this is optional for the content title
- **imagePath**: this is optional if you want to add an image with or as a title
- **imgPathActive**: this is optional for the image that will be displayed when it is selected
- **alt** : this is the `alt` of the image that is required for accessibility if you add image

### Panels content

The contents of the panel should have as attribute slot="tab-content-1" and value of tab-content-\* incremented accordingly

_e.g:_

```html
<ip-tab-panel
  selected-tab="tab-content-2"
  title-tag="h2"
  tab-panel-title="Audit RGAA"
  tab-panel-headers='[
        {"title":"Accessibilité", "imgPath": "assets/images/acc-1.svg", "imgPathActive": "assets/images/acc-1-active.svg"},
        {"title":"Pdf Document", "imgPath":"assets/images/acc-2.svg", "imgPathActive": "assets/images/acc-2-active.svg"},
        {"title":"Statistical", "imgPath":"assets/images/acc-3.svg", "imgPathActive": "assets/images/acc-3-active.svg"},
        {"title":"Certification", "imgPath":"assets/images/acc-4.svg", "imgPathActive": "assets/images/acc-4-active.svg"},
        {"title":"Legislation", "imgPath":"assets/images/acc-5.svg", "imgPathActive": "assets/images/acc-5-active.svg"}
      ]'
>
  <div slot="tab-content-1">--content of Accessibilité--</div>
  <div slot="tab-content-2">--content of Pdf Document--</div>
  <div slot="tab-content-3">--content of Statistical--</div>
  <div slot="tab-content-4">--content of Certification--</div>
  <div slot="tab-content-5">--content of Legislation--</div>
</ip-tab-panel>
```

## Customization

### Style

We have a set of predefined variable used to customize the tab-panel:

- **--ip-tab-primary-color**
- **--ip-tab-secondary-color**
- **--ip-tab-font**
- **--ip-tab-icon**

To update the values use the following:

```css
ip-tab-panel {
  --ip-tab-primary-color: #006342;
  --ip-tab-secondary-color: #000000;
}
```

### Class

We have a set of classes that could be used to customise accordingly:

- **tab-container**: for the container of the panels
- **tab-panel-title**: for the title of the panel
- **tab-btn-list**: for the list of the button in the header of the panel
- **tab-btn**: for button in the header
- **tab-btn-active**: for button in the header if its content is displayed
- **tab-icon**: for the image or icon in the header of the panel
- **tab-icon-active**: for the image or icon in the header if its content is displayed
- **tab-text**: for the text in the header

```css
ip-tab-panel::part(tab-btn) {
  background-color: #305b38;
}
```

```scss
ip-tab-panel {
  &::part(tab-btn) {
    background-color: #305b38;
  }
}
```

```html
<ip-tab-panel>
  <div class="my-class">--content 1--</div>

  <div class="my-class">--content 2--</div>

  <div class="my-class">--content 3--</div>
</ip-tab-panel>
```
