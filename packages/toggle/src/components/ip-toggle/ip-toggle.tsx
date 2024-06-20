import { Component, h, Prop, State } from "@stencil/core";

@Component({
  tag: "ip-toggle",
  styleUrl: "ip-toggle.scss",
  shadow: true,
})
export class ToggleButton {
  @State() isActive: boolean = false;

  @Prop() activeLabel: string;
  @Prop() inactiveLabel: string;
  @Prop() ariaLabel: string;
  @Prop() toggleDisabled: boolean = false;

  handleClick() {
    if (!this.toggleDisabled) {
      this.isActive = !this.isActive;
    }
  }

  render() {
    return (
      <div class="switch-button">
        <button
          class={`switch-checkbox ${this.isActive ? "active" : ""}`}
          onClick={() => this.handleClick()}
          role="switch"
          aria-checked={this.isActive.toString()}
          aria-label={this.ariaLabel}
          disabled={this.toggleDisabled}
        >
          <span class="switch-icon"></span>
          {this.activeLabel !== undefined &&
            this.inactiveLabel !== undefined && (
              <span class="label">
                {this.isActive ? (
                  <p class="active-label">{this.activeLabel}</p>
                ) : (
                  <p class="inactive-label">{this.inactiveLabel}</p>
                )}
              </span>
            )}
        </button>
      </div>
    );
  }
}
