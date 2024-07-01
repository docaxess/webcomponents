import { Component, Event, EventEmitter, h, Prop, Watch } from "@stencil/core";
import { convertToObjectArray, getUniqId } from "../../utils/utils";
import { Element } from "@stencil/core/internal";

interface RadioOption {
  id: string | number;
  label: string;
  disabled?: boolean;
}

@Component({
  tag: "ip-radio",
  styleUrl: "ip-radio.scss",
  shadow: true,
})
export class IpRadio {
  @Element() hostElement: HTMLElement;
  @Prop() labelPosition: "before" | "after" = "after";
  @Prop() options: string;
  @Event({ bubbles: true, composed: true })
  selectionChanged: EventEmitter<RadioOption>;
  readonly id = getUniqId();
  radioOptions: RadioOption[] = [];

  @Watch("options")
  writeValue(value: string | null) {
    this.radioOptions = convertToObjectArray<RadioOption>(value, [
      "id",
      "label",
    ]);
  }

  componentWillLoad() {
    this.writeValue(this.options);
  }

  render() {
    return this.radioOptions.map((option) => {
      const containerClasses = {
        container: true,
        [this.labelPosition]: true,
        disabled: option.disabled,
      };
      return (
        <div class={containerClasses}>
          <div class="radio">
            <input
              type="radio"
              value={option.id}
              id={this.id + option.id}
              name={"radio" + this.id}
              disabled={option.disabled}
              onChange={() => this.selectionChanged.emit(option)}
            />
            <div class="radio-background">
              <div class="outer-circle"></div>
              <div class="inner-circle"></div>
            </div>
          </div>
          <label htmlFor={this.id + option.id}>{option.label}</label>
        </div>
      );
    });
  }
}
