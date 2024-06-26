<<<<<<< HEAD:packages/checkbox/readme.md

# Checkbox documentation

In this component, you can use ip-xheckbox and ip-checkbox-list;it depends on how you use it.

- **ip-checkbox**: for a simple checkbox
- **ip-checkbox-list**: for a checkbox list

## Ip-checkbox

### Description

`IpCheckbox` is a Stencil.js component that displays a single checkbox.

### Usage

To use this component, we must add the properties as attributes.

#### Component Tag:

Use the `<ip-checkbox>` tag in your JSX/HTML.

#### Properties

| Property   | Attribute  | Necessity | Description                                     | Type      | Default     |
| ---------- | ---------- | --------- | ----------------------------------------------- | --------- | ----------- |
| `id`       | `id`       | Required  | `it is the id of the input for accessibility`   | `string`  | `undefined` |
| `name`     | `name`     | Required  | `it is the name of the input for accessibility` | `string`  | `undefined` |
| `checked`  | `checked`  | Optional  | `when we need to set the checkbox to checked`   | `boolean` | `false`     |
| `disabled` | `disabled` | Optional  | `when we need to set the checkbox to disabled`  | `boolean` | `false`     |

_e.g:_

```html
<ip-checkbox default-checked="true" disabled="true" id="Male"> </ip-checkbox>
```

#### Content

We have predefined label slot for the label before the checkbox,and this will be the content you will put inside the tag.

_e.g:_

```html
<ip-checkbox default-checked="true" disabled="true" id="checked">
  Checked !
</ip-checkbox>
<ip-checkbox default-checked="true" disabled="true" id="checked">
  Checked !
</ip-checkbox>
```

#### Customization:

We have a set of predefined variable used to customisation the checkbox:

- **--primary-color**
- **--secondary-color**
- **--font-size**
- # **--checkbox-size**

# Installation:

## Step 1:

Install the ip-tooltip component as a dependency in the project:

<!-- TODO pending deployment on npm -->

```bash
npm install
```

## Step 2:

Import module in script file:

```bash
import '../node_modules/';
```

# Usage:

To use these components, we make us of tag: As input, we have the following options for each:

## Ip-email

- **error-message** : The error message when the user enters a wrong username or email
- **input-label** : The name of the input, it's default value is "Email".
- **invalid** : It's a boolean Prop, you can attach it to your function, if invalid="true", the error-message is displayed.

## Ip-password

- **error-message** : The error message when the user enters a wrong password.
- **invalid** : It's a boolean Prop, you can attach it to your function, if invalid="true", the error-message is displayed.
- **forgot-password-link** : your personal link for reinitialize password

_e.g:_

```html
<form class="login-form">
  <ip-email
    class="form-group "
    error-message="The username entered is incorrect"
    invalid="true"
    input-label="User name"
  >
  </ip-email>
  <ip-password
    class="form-group "
    error-message="The password entered is incorrect"
    invalid="true"
    forgot-password-link="https://www.google.com"
  >
  </ip-password>
  <button class="btn" type="submit">Login</button>
</form>
```

# Customization:

We have a set of predefined variable used to customisation the tooltip:

- **--primary-color**
- **--secondary-color**
  > > > > > > > 42853c0 (✨feat: migrate ip-login component to the mono repo):packages/login/readme.md

To update the values use the following:

```css
<<<<<<< HEAD:packages/checkbox/readme.md ip-checkbox {
  --primary-color: #006342;
  --secondary-color: #000000;
}
```

#### Event

The `checkboxChange` event is a custom event that the `IpCheckbox` component emits whenever the checkbox is clicked. This event is useful for scenarios where you want to perform an action based on the state of the checkbox.

The `checkboxChange` event emits an object with the following properties:

- `name`: The `name` property of the checkbox. This is useful for identifying which checkbox was clicked if you have multiple checkboxes.

- `checked`: A boolean indicating the current checked state of the checkbox. If the checkbox is checked, this will be `true`. If the checkbox is unchecked, this will be `false`.

You can listen to the `checkboxChange` event using the `addEventListener` method. Here's an example:

````javascript
const checkbox = document.querySelector('ip-checkbox');

checkbox.addEventListener('checkboxChange', (event) => {
  console.log(event.detail); // { name: 'myCheckbox', checked: true }
});

## Ip-checkbox-list

### Usage

To use this component, we must add the properties as attributes.

#### Component Tag:

Use the `<ip-checkbox-list>` tag in your JSX/HTML.

#### Properties

| Property         | Attribute         | Necessity | Description                                                 | Type      | Default     |
| ---------------- | ----------------- | --------- | ----------------------------------------------------------- | --------- | ----------- |
| `options`        | `options`         | Required  | `it is an array of object used to pass options as checkbox` | `string`  | `undefined` |
| `id`             | `id`              | Required  | `it is the id of the input for accessibility`               | `string`  | `undefined` |
| `defaultChecked` | `default-checked` | Optional  | `when we need to set the checkbox to checked`               | `boolean` | `false`     |
| `disabled`       | `disabled`        | Optional  | `when we need to set the checkbox to disabled`              | `boolean` | `false`     |
| `legend`         | `legend`          | Optional  | `it is the legend of the list of checkbox`                  | `string`  | `undefined` |

Example:

```html
<ip-checkbox-list
  options='[{"id": "option1", "label": "Option 1"}, {"id": "option2", "label": "Option 2"}]'
></ip-checkbox-list>
````

#### Customization:

We have a set of predefined variable used to customisation the checkbox:

- **--primary-color**
- **--secondary-color**
- **--font-size**
- **--checkbox-size**

To update the values use the following:

```css
ip-checkbox-list {
  --primary-color: #006342;
  --secondary-color: #000000;
}
```

#### Event

The `selectionChanged` event is a custom event that the `IpCheckboxList` component emits whenever the selection of checkboxes changes. This event is useful for scenarios where you want to perform an action based on the current selection of checkboxes.

The `selectionChanged` event emits an array of the `id`s of the currently selected checkboxes. This array can be used to determine which checkboxes are currently selected.

For example, if you have checkboxes with ids "1", "2", and "3", and checkboxes "1" and "3" are selected, the `selectionChanged` event will emit the array `["1", "3"]`.

You can listen to the `selectionChanged` event using the `addEventListener` method. Here's an example:

```javascript
const checkboxList = document.querySelector('ip-checkbox-list');

checkboxList.addEventListener('selectionChanged', (event) => {
  console.log(event.detail); // ["1", "3"]
});
```

```

```
