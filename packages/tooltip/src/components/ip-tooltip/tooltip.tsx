import {
  Component,
  Prop,
  h,
  State,
  Listen,
  Element,
  Event,
  EventEmitter,
} from "@stencil/core";

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
  @Prop() type: "click" | "hover" = "hover";

  @Event() btn1Click: EventEmitter;
  @Event() btn2Click: EventEmitter;

  @State() showTooltip: boolean = false;

  @Element() el: HTMLElement;

  _toggleTooltip = () => {
    this.showTooltip = !this.showTooltip;
  };

  @Listen("click", { target: "document" })
  handleOutsideClick(event) {
    if (!event.composedPath().includes(this.el)) {
      this.showTooltip = false;
    }
  }

  @Listen("mouseenter")
  handleMouseEnter() {
    if (this.type === "hover") {
      this.showTooltip = true;
    }
  }

  @Listen("mouseleave")
  handleMouseLeave() {
    if (this.type === "hover") {
      this.showTooltip = false;
    }
  }

  closeTooltip = () => {
    this.showTooltip = false;
  };

  handleBlur = () => {
    const containsButtons =
      this.el.querySelector(".tooltip-content button") !== null;
    if (!containsButtons) {
      this.showTooltip = false;
    }
  };

  handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.showTooltip = !this.showTooltip;
    }
  };

  handleBtn1Click = () => {
    this.btn1Click.emit();
  };

  handleBtn2Click = () => {
    this.btn2Click.emit();
  };

  render() {
    return (
      <div class="tooltip-container">
        <div
          class="tooltip-trigger"
          tabindex="0"
          role="button"
          aria-describedby="desc-tooltip"
          onFocus={this.type === "click" ? undefined : this._toggleTooltip}
          onBlur={this.type === "click" ? undefined : this.handleBlur}
          onKeyUp={this.handleKeyUp}
          onClick={this.type === "click" ? this._toggleTooltip : undefined}
        >
          {this.tooltipTrigger}
        </div>

        {this.showTooltip && (
          <div
            class="tooltip-content"
            role="tooltip"
            id="desc-tooltip"
            aria-hidden={this.showTooltip ? "false" : "true"}
          >
            {this.tooltipTitle && (
              <h3 aria-label={this.tooltipTitle} class="tooltip-title">
                {this.tooltipTitle}
              </h3>
            )}
            {this.tooltipBtnClose && (
              <button
                class="close"
                role="button"
                tabindex="0"
                aria-label="Close tooltip"
                onClick={this.closeTooltip}
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
                  onClick={this.handleBtn1Click}
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
                  onClick={this.handleBtn2Click}
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
