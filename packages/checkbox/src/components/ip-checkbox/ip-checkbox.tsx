import {
  Component,
  h,
  Element,
  Prop,
  Event,
  EventEmitter,
} from '@stencil/core/internal';

@Component({
  tag: 'ip-checkbox',
  styleUrl: 'ip-checkbox.scss',
  shadow: true,
})
export class IpCheckbox {
  @Element() hostElement: HTMLElement;

  @Prop() identifier: string;
  @Prop() disabled = false;
  @Prop({ mutable: true }) checked = false;
  @Prop() name: string;

  @Event() change: EventEmitter<{ name: string; checked: boolean }>;

  handleChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.checked = checkbox.checked;
    this.change.emit({ name: this.name, checked: this.checked });
  }

  render() {
    return (
      <div class="checkbox-content">
        <input
          class="checkbox-input"
          type="checkbox"
          name={this.name}
          id={this.identifier}
          checked={this.checked}
          disabled={this.disabled}
          onChange={(event) => this.handleChange(event)}
          aria-checked={this.checked ? 'true' : 'false'}
        />
        <label htmlFor={this.identifier} class="checkbox-label">
          <slot></slot>
        </label>
      </div>
    );
  }
}
