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

  @Event() finishButtonClick: EventEmitter<void>;

  private handleContinue = () => {
    if (this.currentStep < this.steps - 1) {
      this.currentStep += 1;
    }
  };

  private handleBack = () => {
    if (this.currentStep > 0) {
      this.currentStep -= 1;
    }
  };

  private handleFinish = () => {
    this.finishButtonClick.emit();
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
        <div class="step-container">
          <ol class="step-numbers">
            {Array.from({ length: this.steps }, (_, index) => (
              <li class="step-wrapper" role="listitem">
                <span
                  class={`step-number ${index === this.currentStep ? 'active' : ''} ${index < this.currentStep ? 'completed' : ''}`}
                  aria-current={index === this.currentStep ? 'step' : null}
                >
                  {index + 1}
                </span>
                {index < this.steps - 1 && (
                  <div
                    class={`step-line ${index < this.currentStep ? 'completed' : ''}`}
                    aria-hidden="true"
                  ></div>
                )}
              </li>
            ))}
          </ol>
          <div class="step-content">
            <slot name={slots[this.currentStep]}></slot>
          </div>
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
