import { Component, Prop, h, State } from "@stencil/core";

@Component({
  tag: "ip-tooltip",
  styleUrl: "./tooltip.scss",
  shadow: true,
})
export class IpTooltip {
  @Prop() tooltipContent: string;
  @Prop() tooltipTrigger: string;
  @Prop() tooltipBtn1: string;
  @Prop() btn1AriaLabel: string;
  @Prop() tooltipBtn2: string;
  @Prop() btn2AriaLabel: string;
  @Prop() tooltipBtnClose: boolean = false;
  @Prop() tooltipTitle: string;
  @Prop() hoverTooltip: boolean = false;

  @State() showTooltip: boolean = false;

  _toggleTooltip = () => {
    this.showTooltip = !this.showTooltip;
  };

  _handleMouseEnter = () => {
    if (!this.showTooltip) {
      this.showTooltip = true;
    }
  };

  _handleMouseLeave = () => {
    this.showTooltip = false;
  };

  _handleOnHover = () => {
    if (this.hoverTooltip) {
      this._handleMouseEnter();
    } else {
      this._handleMouseLeave();
    }
  };

  _handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this._toggleTooltip();
    }
  };

  render() {
    return (
      <div class="tooltip-container">
        <div
          class="tooltip-trigger"
          tabindex="0"
          role="button"
          aria-describedby="desc-tooltip"
          onKeyUp={this._handleKeyUp}
          onClick={this._toggleTooltip}
          onMouseEnter={this._handleOnHover}
          onMouseLeave={this._handleMouseLeave}
          onFocus={this._toggleTooltip}
          onBlur={this._handleMouseLeave}
        >
          {this.tooltipTrigger}
        </div>

        {this.showTooltip && (
          <div class="tooltip-content" role="tooltip" id="desc-tooltip">
            {this.tooltipTitle && (
              <h3 class="tooltip-title">{this.tooltipTitle}</h3>
            )}
            {this.tooltipBtnClose && (
              <button
                class="close"
                role="button"
                tabindex="0"
                aria-label="Close tooltip"
                onClick={this._handleMouseLeave}
              >
                <span>x</span>
              </button>
            )}

            <p>{this.tooltipContent}</p>
            <div class="btn-inside">
              {this.tooltipBtn1 && (
                <button
                  class="cancel"
                  role="button"
                  aria-label={this.btn1AriaLabel}
                  tabindex="0"
                >
                  {this.tooltipBtn1}
                </button>
              )}
              {this.tooltipBtn2 && (
                <button
                  class="learn-more"
                  role="button"
                  aria-label={this.btn2AriaLabel}
                  tabindex="0"
                >
                  {this.tooltipBtn2}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
