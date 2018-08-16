import { EventEmitter } from "@stencil/core";
type Constructor<T> = new (...args: any[]) => T;
export function SwitchRender<T extends Constructor<{}>>(Base: T) {
  return class extends Base {
    caption: string;
    checked: boolean;
    disabled = false; // This takes its value form HTML
    element: HTMLElement;
    id: string;
    private inputId: string;

    onChange: EventEmitter;
    private getValueFromEvent(event: UIEvent): boolean {
      return event.target && (event.target as HTMLInputElement).checked; // Return if HTMLInput is checked or not
    }
    handleChange(event: UIEvent) {
      this.checked = this.getValueFromEvent(event); // Check if input element is checked in each click
      this.onChange.emit(event);
    }
    render() {
      if (!this.inputId) {
        // Allways run because is undefined, and !undefined = true
        this.inputId = this.id
          ? `${this.id}_checkbox`
          : `gx-checkbox-auto-id-${autoCheckBoxId++}`;
      }
      // Attributes for input. Values taked form HTML and asigned here
      const inputAttrs = {
        checked: this.checked,
        class: "switch",
        disabled: this.disabled,
        id: this.inputId,
        onChange: this.handleChange.bind(this),
        type: "checkbox"
      };
      return (
        <div class="form-group">
          <span class="switch switch-sm">
            <input {...inputAttrs} />
            <label htmlFor={this.inputId}>{this.caption}</label>
          </span>
        </div>
      );
    }
  };
}

let autoCheckBoxId = 0;
