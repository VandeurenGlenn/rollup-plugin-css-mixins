import { LitElement, html, css } from 'lit';

export class TestElement extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
    <style>

      :host() {
        mixin(--css-row)
      }

      apply(--css-header)
    </style>
    `;
  }
}
customElements.define('test-element', TestElement);
