import { Component, Prop, h } from "@stencil/core"; // Replace 'PACKAGE_NAME' with the actual package name

@Component({
  tag: "ip-dropdown",
  styleUrl: "dropdown.scss",
  shadow: true,
})
export class Dropdown {
  @Prop() dropTitle: string;
  @Prop() options: string[] = [];

  render() {
    return (
      <div class="dropdown-container">
        <label htmlFor="dropdown" class="dropdown-title">
          {this.dropTitle}
        </label>
        <select id="dropdown" class="dropdown-options">
          {this.options.map((option) => (
            <option class="dropdown-option">{option}</option>
          ))}
        </select>
        <slot></slot>
      </div>
    );
  }
}
