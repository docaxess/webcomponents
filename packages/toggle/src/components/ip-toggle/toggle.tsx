import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'ip-toggle',
  styleUrl: 'toggle.scss',
  shadow: true,
})
export class ToggleButton {
  @State() isActive = false;

  @Prop() activeLabel: string;
  @Prop() inactiveLabel: string;
  @Prop() ariaLabel: string;
  @Prop() toggleDisabled = false;
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  @Prop() checked = false;

  @Watch('checked')
  handleCheckedChange(newValue: boolean) {
    if (newValue !== this.isActive) {
      this.isActive = newValue;
    }
  }

  componentWillLoad() {
    this.isActive = this.checked;
  }

  handleClick() {
    if (!this.toggleDisabled) {
      this.isActive = !this.isActive;
    }
  }

  render() {
    return (
      <div class="switch-container">
        <label htmlFor="switch-label">
          <slot name="switch-label"></slot>
        </label>
        <div class="switch-button">
          <input
            id="switch-label"
            type="checkbox"
            class={`switch-checkbox ${this.size} ${this.isActive ? 'active' : ''}`}
            onClick={() => this.handleClick()}
            role="switch"
            aria-checked={this.isActive.toString()}
            aria-label={this.ariaLabel}
            disabled={this.toggleDisabled}
            checked={this.isActive}
            aria-describedby="helper-text"
          />
          <span class={`switch-icon ${this.size}`}>
            {this.activeLabel && this.inactiveLabel && (
              <span class="label">
                {this.isActive ? (
                  <p class={`active-label ${this.size}`}>{this.activeLabel}</p>
                ) : (
                  <p class={`inactive-label ${this.size}`}>
                    {this.inactiveLabel}
                  </p>
                )}
              </span>
            )}
          </span>
        </div>
        <label htmlFor="" id="helper-text">
          <slot name="helper-text"></slot>
        </label>
      </div>
    );
  }
}
