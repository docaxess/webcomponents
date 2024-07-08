import {
  Component,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
  Watch,
} from "@stencil/core";
import { convertToObjectArray } from "../../utils/utils";
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
  @Prop() defaultOptionId: string | number;
  @Event({ bubbles: true, composed: true })
  selectionChanged: EventEmitter<RadioOption>;
  radioOptions: RadioOption[] = [];

  @State() selectedOption: RadioOption = null;

  @Watch("options")
  writeValue(value: string | null) {
    this.radioOptions = convertToObjectArray<RadioOption>(value, [
      "id",
      "label",
    ]);
    if (this.defaultOptionId) {
      this.selectedOption =
        this.radioOptions.find(
          (option) => option.id === this.defaultOptionId
        ) || null;
    }
  }

  componentWillLoad() {
    this.writeValue(this.options);
  }

  handleOptionChange(option: RadioOption) {
    this.selectedOption = option;
    this.selectionChanged.emit(option);
  }

  render() {
    return this.radioOptions.map((option) => {
      const containerClasses = {
        container: true,
        [this.labelPosition]: true,
        disabled: option.disabled,
      };
      const isChecked =
        this.selectedOption && this.selectedOption.id === option.id;
      const inputId = `radio-${option.id}`;
      const labelId = `label-${inputId}`;
      return (
        <div class={containerClasses}>
          <div class="radio">
            <input
              type="radio"
              value={option.id}
              id={inputId}
              name={"radio" + option.id}
              disabled={option.disabled}
              checked={isChecked}
              aria-checked={isChecked ? "true" : "false"}
              aria-labelledby={labelId}
              onChange={() => this.handleOptionChange(option)}
            />
            <div class="radio-background">
              <div class="outer-circle"></div>
              <div class="inner-circle"></div>
            </div>
          </div>
          <label id={labelId} htmlFor={inputId}>
            {option.label}
          </label>
        </div>
      );
    });
  }
}
