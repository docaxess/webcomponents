import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'ip-modal',
  styleUrl: 'modal.scss',
  shadow: true,
})
export class Modal {
  @State() isOpen = false;
  @Prop() buttonText = 'Open modal';
  @Prop() svgColor = 'black';

  private handleOpen = () => {
    this.isOpen = true;
    setTimeout(() => {
      const firstFocusableElement = this.modal.querySelector('input, button');
      if (firstFocusableElement) {
        (firstFocusableElement as HTMLElement).focus();
      }
    }, 0);
  };

  private handleClose = () => {
    this.isOpen = false;
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      const focusableElements = Array.from(
        this.modal.querySelectorAll('input, button'),
      ) as HTMLElement[];
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }
  };

  private modal: HTMLDialogElement;

  render() {
    return (
      <div class="modal-container">
        <button
          part="trigger-button"
          onClick={this.handleOpen}
          aria-haspopup="dialog"
          class="dialog-button"
        >
          {this.buttonText}
        </button>

        <dialog
          ref={(el) => (this.modal = el as HTMLDialogElement)}
          open={this.isOpen}
          onKeyDown={this.handleKeyDown}
        >
          <button
            class="close-dialog"
            aria-label="Close the dialog"
            onClick={this.handleClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M32.1344 30.3656C32.2505 30.4818 32.3427 30.6196 32.4055 30.7714C32.4684 30.9231 32.5007 31.0858 32.5007 31.25C32.5007 31.4142 32.4684 31.5769 32.4055 31.7286C32.3427 31.8804 32.2505 32.0182 32.1344 32.1344C32.0183 32.2505 31.8804 32.3426 31.7286 32.4055C31.5769 32.4683 31.4143 32.5007 31.25 32.5007C31.0858 32.5007 30.9231 32.4683 30.7714 32.4055C30.6197 32.3426 30.4818 32.2505 30.3657 32.1344L20 21.7672L9.6344 32.1344C9.39985 32.3689 9.08173 32.5007 8.75002 32.5007C8.41832 32.5007 8.1002 32.3689 7.86565 32.1344C7.6311 31.8998 7.49933 31.5817 7.49933 31.25C7.49933 30.9183 7.6311 30.6002 7.86565 30.3656L18.2328 20L7.86565 9.63437C7.6311 9.39982 7.49933 9.0817 7.49933 8.74999C7.49933 8.41829 7.6311 8.10017 7.86565 7.86562C8.1002 7.63107 8.41832 7.4993 8.75002 7.4993C9.08173 7.4993 9.39985 7.63107 9.6344 7.86562L20 18.2328L30.3657 7.86562C30.6002 7.63107 30.9183 7.4993 31.25 7.4993C31.5817 7.4993 31.8998 7.63107 32.1344 7.86562C32.369 8.10017 32.5007 8.41829 32.5007 8.74999C32.5007 9.0817 32.369 9.39982 32.1344 9.63437L21.7672 20L32.1344 30.3656Z"
                fill="black"
              />
            </svg>
          </button>
          <div class="dialog-content" part="dialog-content">
            <slot name="content"></slot>
          </div>
        </dialog>
      </div>
    );
  }
}
