import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Listen,
  Prop,
  State,
  Watch
} from '@stencil/core';

@Component({
  styleUrl: 'gux-color-picker.less',
  tag: 'gux-color-picker'
})
export class GuxColorPicker {
  @Element()
  root: HTMLElement;

  /**
   * Determines the state activeColor
   */
  @Prop()
  value: string;

  /**
   * Indicates if the dropdown is disabled or not
   */
  @Prop()
  disabled: boolean;

  /**
   * Indicate the color that is active
   */
  @State()
  activeColor: string;

  /**
   * Triggers when a color is selected
   */
  @Event()
  input: EventEmitter;

  @State()
  opened: boolean;

  componentWillLoad() {
    this.activeColor = this.value;
  }

  @Watch('value')
  valueChangeHandler(newValue: string) {
    this.activeColor = newValue;
  }

  @Listen('focusout')
  onFocusOut(e: FocusEvent) {
    if (!e.relatedTarget || !this.root.contains(e.relatedTarget as Node)) {
      this.opened = false;
    }
  }

  @Listen('input')
  onSelectHandler(ev: CustomEvent) {
    this.opened = false;
    this.activeColor = ev.detail;
  }

  clickHandler = () => {
    if (!this.disabled) {
      this.opened = !this.opened;
    }
  };

  render() {
    return (
      <section>
        <button
          class={`gux-color-picker-main-element${
            this.opened ? ' gux-color-picker-opened' : ''
          }`}
          disabled={this.disabled}
          onClick={this.clickHandler}
        >
          <div
            class="gux-color-picker-selected-color"
            style={{ background: this.activeColor }}
          />
          <div class="gux-color-picker-color-name">{this.activeColor}</div>
          <gux-icon decorative iconName="ic-dropdown-arrow"></gux-icon>
        </button>
        {this.opened && (
          <gux-color-select
            value={this.activeColor}
            onInput={() => this.input}
            class="gux-color-picker-color-select"
          >
            <slot />
          </gux-color-select>
        )}
      </section>
    );
  }
}
