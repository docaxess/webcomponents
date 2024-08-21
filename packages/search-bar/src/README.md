# Search-bar documentation

[Figma link] (https://www.figma.com/design/63w4li687mfdYtETlBu6a9/Component---Mixed?node-id=1053-318&m=dev)

## Installation

### Step 1:

Install the ip-dropdown component as a dependency in the project:

```bash
npm install ip-search-bar
```

### Step 2:

Import module in script file:

```javascript or typescript
import '../node_modules/ip-search-bar/dist/ip-search-bar/ip-search-bar.esm';
```

## Usage:

To use this component, we must add the properties as attributes.

### Properties

| Property          | Attribute          | Necessity | Description                                        | Type     | Default       |
| ----------------- | ------------------ | --------- | -------------------------------------------------- | -------- | ------------- |
| `suggestionsData` | `suggestions-data` | Required  | `JSON string of suggestions used for autocomplete` | `string` | `'[]'`        |
| `labelButton`     | `label-button`     | Optional  | `Label for the search button`                      | `string` | `'Search'`    |
| `placeholder`     | `placeholder`      | Optional  | `Placeholder text for the input field`             | `string` | `'Search...'` |

_e.g:_

```html
<ip-search-bar
  placeholder="Please enter a keyword !"
  suggestions-data='["Accessibility Web ", "Accessibility Website", "Accessibility assistive technologies", "Accessibility ressources", "Accessibility barrier-free solutions", "Accessibility Web content guidelines"]'
>
</ip-search-bar>
```

### Customization

We have a set of predefined variable used to customize the dropdown:

- **--bg-btn-color**
- **--bg-btn-color-hover**
- **--text-btn-color**
- **--font-size**

To update the values use the following:

```css
ip-search-bar {
  --text-btn-color: #006342;
  --font-size: 15px;
}
```

## Event

The ip-search-bar component emits the following event:

**buttonClicked**: Fired when the search button is clicked.
To listen to this event, add an event listener to your component:

_e.g:_

```javascript
const searchBar = document.querySelector('ip-search-bar');

searchBar.addEventListener('buttonClicked', (event) => {
  console.log('Search button clicked!');
});
```
