# ip-stepper

[Figma link](https://www.figma.com/design/63w4li687mfdYtETlBu6a9/Component---Mixed?node-id=3018-499&m=dev)

## Installation

### Step 1:

Install the ip-stepper component as a dependency in the project:

```bash
npm install ip-stepper
```

### Step 2:

Import module in script file:

```javascript or typescript
import '../node_modules/ip-stepper/dist/ip-stepper/ip-stepper.esm';
```

## Usage:

The ip-stepper component facilitates step-by-step navigation. To use this component, configure it by setting the properties as attributes and use slot attribute for the content for each step.

### Properties

| Property               | Attribute                 | Necessity | Description                                              | Type     | Default                          |
| ---------------------- | ------------------------- | --------- | -------------------------------------------------------- | -------- | -------------------------------- |
| `steps`                | `steps`                   | Required  | `Total number of steps in the stepper`                   | `number` | `0`                              |
| `backBtnAriaLabel`     | `back-btn-aria-label`     | Optional  | `ARIA label for the back button`                         | `string` | `'Go back to the previous step'` |
| `backBtnText`          | `back-btn-text`           | Optional  | `Text displayed on the back button`                      | `string` | `'Back'`                         |
| `continueBtnAriaLabel` | `continue-btn-aria-label` | Optional  | `ARIA label for the continue button`                     | `string` | `'Continue to the next step'`    |
| `continueBtnText`      | `continue-btn-text`       | Optional  | `Text displayed on the continue button`                  | `string` | `'Continue'`                     |
| `finishBtnAriaLabel`   | `finish-btn-aria-label`   | Optional  | `ARIA label for the finish button`                       | `string` | `'Finish the process'`           |
| `finishBtnText`        | `finish-btn-text`         | Optional  | `Text displayed on the finish button`                    | `string` | `'Finish'`                       |
| `indicatorText`        | `indicator-text`          | Optional  | `Text displayed before the step indicator`               | `string` | `'Step'`                         |
| `simulatorAria`        | `simulator-aria`          | Optional  | `The aria label is used for the list of step indicators` | `string` | `'Simulator progress'`           |

### Step Content

To provide content for each step, use the slot attribute with the corresponding step name:

- **slot="step1"** : content for step 1
- **slot="step2"** : content for step 2
- **slot="step3"** : content for step 3
- **slot="step4"** : content for step 4

_e.g:_

<ip-stepper
steps="3"
back-btn-text="Previous"
continue-btn-text="Next"
finish-btn-text="Complete"
back-btn-aria-label="Go back to the previous step"
continue-btn-aria-label="Continue to the next step"
finish-btn-aria-label="Complete the process"
indicator-text="Step"
onFinishButtonClick={() => alert('Finish button clicked!')}

>

  <div slot="step1">Step 1 Content</div>
  <div slot="step2">Step 2 Content</div>
  <div slot="step3">Step 3 Content</div>
</ip-stepper>
```

## Customization:

We have a set of predefined variable used to customisation the stepper:

- **--primary-color**
- **--secondary-color**
- **--indicator-text-color**

To update the values use the following:

```css
ip-stepper {
  --primary-color: #006342;
  --indicator-text-color: #000000;
}
```

## Event

The `ip-stepper` component emits a custom event when the "Finish" button is clicked. The event is named `finishButtonClick`.

You can listen for this event to perform specific actions when the `Finish` button is clicked:

```javascript
document
  .querySelector('ip-stepper')
  .addEventListener('finishButtonClick', () => {
    console.log('Finish button clicked!');
  });
```
