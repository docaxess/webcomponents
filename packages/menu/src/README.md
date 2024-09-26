# Ip-menu documentation

In this component, we have two types of menu:

- **ip-burger-menu**
- **ip-navigation-bar**

## Installation

### Step 1:

Install the ip-menu component as a dependency in the project:

```bash
npm install ip-menu
```

### Step 2:

Import module in script file:

```javascript or typescript
import '../node_modules/ip-menu/dist/ip-menu/ip-menu.esm';
```

## Ip-burger-menu

### Usage:

To use the ip-burger-menu component, you need to set the properties as attributes and use slots for additional content.

#### Properties:

| Property               | Attribute                  | Necessity | Description                                         | Type     | Default                                 |
| ---------------------- | -------------------------- | --------- | --------------------------------------------------- | -------- | --------------------------------------- |
| `menuData`             | `menu-data`                | Required  | `JSON string to define menu items.`                 | `string` | `undefined`                             |
| `closeMenuAriaLabel`   | `close-menu-aria-label`    | Optional  | `	ARIA label for the button that closes the menu.`   | `string` | `'Close menu'`                          |
| `openMenuAriaLabel`    | `open-menu-aria-label`     | Optional  | `ARIA label for the button that opens the menu.`    | `string` | `'Open menu'`                           |
| `pathToArrowRightIcon` | `path-to-arrow-right-icon` | Optional  | `	Path to the icon image used for menu item arrows.` | `string` | `'../../assets/images/arrow-right.svg'` |
| `pathToCloseIcon`      | `path-to-close-icon`       | Optional  | `Path to the icon image used to close the menu.`    | `string` | `'../../assets/images/x-icon.svg'`      |
| `pathToOpenIcon`       | `path-to-open-icon`        | Optional  | `Path to the icon image used to open the menu.`     | `string` | `'../../assets/images/icon-list.svg'`   |

##### Menu-item Interface

The items property is an array of MenuItem objects with the following structure:

- **label** : The text label of the menu item.
- **href** :URL to navigate to when the item is clicked.
- **disabled** : Optional boolean to disable the menu item.

#### Slot:

The ip-burger-menu component supports the following slots for additional content:

- **left-head-content** : Content to display on the left side of the header.
- **before-toggle-menu-content**: Content to display before the menu toggle button if needed.
- **left-menu-content** : Content to display on the left side of the menu if needed.

_e.g:_

```html
<ip-burger-menu
  open-menu-aria-label="Ouvrir le menu"
  close-menu-aria-label="Fermer le menu"
  path-to-close-icon="../../assets/images/x-icon.svg"
  path-to-open-icon="../../assets/images/icon-list.svg"
  path-to-arrow-right-icon="../../assets/images/arrow-right.svg"
  menu-data='[
      {"label":"Home", "href":"/home"},
      {"label":"About", "href":"/about"},
      {"label":"Services", "href":"/services"},
      {"label":"Contact", "href":"/contact", "disabled": true}
    ]'
>
  <div slot="left-head-content">
    <img src="../../assets/images/logo.png" alt="" />
  </div>
  <div slot="before-toggle-menu-content">
    <button>Votre pays</button>
    <button>Contactez-nous</button>
  </div>
  <div slot="left-menu-content">
    <img src="../../assets/images/image1.png" alt="" />
  </div>
</ip-burger-menu>
```

### Customization

#### Style

We have a set of predefined variable used to customize the burger-menu:

- **--primary-color**
- **--secondary-color**
- **--bg-nav-open-menu**
- **--menu-item-color**

#### Part

We have a set of classes that could be used to customise accordingly:

- **nav-bar**: the nav for the menu content.
- **toggle-menu-btn** : The button that toggles the menu.
- **menu-content** : The content of the menu.
- **menu-list** : The list of elements in the menu.

_e.g:_

```css
ip-burger-menu::part(nav-bar) {
  background-color: #333;
}

ip-burger-menu {
  --primary-color: #226f54;
  --secondary-color: #fff;
  --bg-nav-open-menu: #0000;
}
```

## Ip-navigation-bar

### Usage:

To use the ip-navigation-bar component, you need to set the properties as attributes and use slots for additional content.

#### Properties:

| Property             | Attribute               | Necessity | Description                                                                   | Type     | Default                               |
| -------------------- | ----------------------- | --------- | ----------------------------------------------------------------------------- | -------- | ------------------------------------- |
| `menuData`           | `menu-data`             | Required  | `JSON string to define menu items.`                                           | `string` | `undefined`                           |
| `closeSubmenuPrefix` | `close-submenu-prefix`  | Optional  | `Prefix of aria-label of button to close submenu,it is followed by the label` | `string` | `'Close'`                             |
| `openSubmenuPrefix`  | `open-submenu-prefix`   | Optional  | `Prefix of aria-label of button to open submenu,it is followed by the`        | `string` | `'Open menu'`                         |
| `closeMenuAriaLabel` | `close-menu-aria-label` | Optional  | `ARIA label for the button that closes the menu for tablet and mobile.`       | `string` | `'Close menu'`                        |
| `openMenuAriaLabel`  | `open-menu-aria-label`  | Optional  | `ARIA label for the button that opens the menu for tablet and mobile.`        | `string` | `'Open menu'`                         |
| `pathToCloseIcon`    | `path-to-close-icon`    | Optional  | `Path to the icon image used to close the menu.`                              | `string` | `'../../assets/images/x-icon.svg'`    |
| `pathToOpenIcon`     | `path-to-open-icon`     | Optional  | `Path to the icon image used to open the menu.`                               | `string` | `'../../assets/images/icon-list.svg'` |

##### Menu-item Interface

The items property is an array of MenuItem objects with the following structure:

- **label** : The text label of the menu item.
- **href** :URL to navigate to when the item is clicked.
- **submenus** : optional if menu item had a submenu.

#### Slot:

The ip-navigation-bar component supports the following slots for additional content:

- **left-head** : Content to display on the left side of the header.
- **right-head** : Content to display on the right side of the header.

_e.g:_

```html
<ip-navigation-bar
  close-submenu-prefix="Fermer le sous menu de "
  open-submenu-prefix="Ouvrir le sous menu de "
  open-menu-aria-label="Ouvrir le menu"
  close-menu-aria-label="Fermer le menu"
  path-to-close-icon="../../assets/images/x-icon.svg"
  path-to-open-icon="../../assets/images/icon-list.svg"
  menu-data='[
      {"label":"Home", "href":"/home"},
      {"label":"About", "href":"/about"},
      {"label":"Services", "href":"/services"},
      {"label":"Contact", "href":"/contact", "disabled": true}
    ]'
>
  <div slot="left-head">
    <img src="../../assets/images/logo.png" alt="" />
  </div>
  <div slot="right-head">
    <button>Contactez-nous</button>
  </div>
</ip-navigation-bar>
```

### Customization

#### Style

We have a set of predefined variable used to customize the burger-menu:

- **--primary-color**
- **--secondary-color**

#### Part

We have a set of classes that could be used to customise accordingly:

- **nav-bar**: the nav for the menu content.
- **menu-items**: The list of menu elements (ul).
- **menu-item**: the menu items (li).
- **menu-items-link**: for link in each menu item.
- **submenu-container** : The container of submenu.
- **submenu-items** : The list of submenu elements (ul).
- **submenu-item** : The submenu item.
- **toggle-menu-btn** : The button that toggles the menu for mobile and tablet.

_e.g:_

```css
ip-navigation-bar::part(nav-bar) {
  background-color: #333;
}

ip-navigation-bar {
  --primary-color: #226f54;
  --secondary-color: #fff;
}
```
