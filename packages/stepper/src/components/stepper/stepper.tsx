import { Component, h, State, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'ip-stepper',
  styleUrl: 'stepper.scss',
  shadow: true,
})
export class Stepper {
  @State() currentStep = 0;
  @Prop() steps = 0;
  @Prop() backBtnText = 'Back';
  @Prop() continueBtnText = 'Continue';
  @Prop() finishBtnText = 'Finish';
  @Prop() backBtnAriaLabel = 'Go back to the previous step';
  @Prop() continueBtnAriaLabel = 'Continue to the next step';
  @Prop() finishBtnAriaLabel = 'Finish the process';
  @Prop() indicatorText = 'Step';
  @Prop() simulatorAria = 'Simulator progress';

  @Event() finishButtonClick: EventEmitter<void>;

  private stepIndicatorButton: HTMLElement;

  private handleContinue = () => {
    if (this.currentStep < this.steps - 1) {
      this.currentStep += 1;
      this.stepIndicatorButton.focus();
    }
  };

  private handleBack = () => {
    if (this.currentStep > 0) {
      this.currentStep -= 1;
      this.stepIndicatorButton.focus();
    }
  };

  private handleFinish = () => {
    this.finishButtonClick.emit();
  };

  private handleStepClick = (stepIndex: number) => {
    if (stepIndex >= 0 && stepIndex < this.steps) {
      this.currentStep = stepIndex;
    }
  };

  render() {
    const slots = Array.from(
      { length: this.steps },
      (_, index) => `step${index + 1}`,
    );

    const showBackButton = this.currentStep > 0;

    return (
      <div class="stepper" role="region" aria-labelledby="stepper-heading">
        <div id="stepper-heading" class="step-indicator">
          <span>
            {this.indicatorText} {this.currentStep + 1} / {this.steps}
          </span>
        </div>
        <ol aria-label={this.simulatorAria} class="step-numbers">
          {Array.from({ length: this.steps }, (_, index) => (
            <li
              role="listitem"
              class={`step-wrapper ${index === this.currentStep ? 'current' : ''} ${index < this.currentStep ? 'completed' : ''}`}
            >
              <button
                onClick={() => this.handleStepClick(index)}
                class={`step-number ${index === this.currentStep ? 'active' : ''} ${index < this.currentStep ? 'completed' : ''}`}
                aria-label={` ${index + 1}: ${slots[index]}`}
                aria-current={index === this.currentStep ? 'step' : undefined}
                tabindex={index < this.currentStep + 1 ? 0 : -1}
                role={index !== this.currentStep ? 'button' : 'presentation'}
                ref={
                  index === this.currentStep + 1
                    ? (el) => (this.stepIndicatorButton = el)
                    : undefined
                }
              >
                {index + 1}
              </button>
              {index < this.steps - 1 && (
                <div
                  class={`step-line ${index < this.currentStep ? 'completed' : ''}`}
                  aria-hidden="true"
                ></div>
              )}
            </li>
          ))}
        </ol>
        <div class="step-content" aria-live="polite">
          <slot name={slots[this.currentStep]}></slot>
        </div>
        <div class={`controls ${!showBackButton ? 'single-button' : ''}`}>
          {showBackButton && (
            <button
              onClick={this.handleBack}
              class="back-button"
              aria-label={this.backBtnAriaLabel}
            >
              {this.backBtnText}
            </button>
          )}
          <button
            onClick={
              this.currentStep === this.steps - 1
                ? this.handleFinish
                : this.handleContinue
            }
            class="continue-button"
            aria-label={
              this.currentStep === this.steps - 1
                ? this.finishBtnAriaLabel
                : this.continueBtnAriaLabel
            }
          >
            {this.currentStep === this.steps - 1
              ? this.finishBtnText
              : this.continueBtnText}
          </button>
        </div>
      </div>
    );
  }
}
