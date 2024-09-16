import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import infoIcon from './icon/info-icon.svg';
import warningIcon from './icon/warning-icon.svg';
import dangerIcon from './icon/danger-icon.svg';
import successIcon from './icon/success-icon.svg';
@Component({
  tag: 'ip-alert',
  styleUrl: 'alert.scss',
  shadow: true,
})
export class Alert {
  @Prop() alertTitle = '';
  @Prop() type: 'info' | 'warning' | 'danger' | 'success' = 'info';
  @Prop() message = '';
  @Prop() closeAriaLabel = 'Close alert';
  @State() visible = true;

  @Event() alertClosed: EventEmitter<void>;
  private closeAlert() {
    this.visible = false;
    this.alertClosed.emit();
  }

  private getIcon() {
    switch (this.type) {
      case 'info':
        return <img src={infoIcon} alt="Info Icon" />;
      case 'warning':
        return <img src={warningIcon} alt="Warning Icon" />;
      case 'danger':
        return <img src={dangerIcon} alt="Danger Icon" />;
      case 'success':
        return <img src={successIcon} alt="Success Icon" />;
      default:
        return null;
    }
  }

  render() {
    if (!this.visible) {
      return null;
    }

    return (
      <div class={`alert alert-${this.type}`} role="alert">
        <div class="icon" aria-hidden="true">
          {this.getIcon()}
        </div>
        <button
          class="close-button"
          onClick={() => this.closeAlert()}
          aria-label={this.closeAriaLabel}
        >
          ×
        </button>
        <div class="message-content">
          {this.alertTitle && (
            <div class={`title title-${this.type}`}> {this.alertTitle}</div>
          )}
          <div class="message">{this.message}</div>
        </div>
      </div>
    );
  }
}
