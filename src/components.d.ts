/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */
declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {

  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }

  interface HTMLAttributes {}
}

import { Button as GxButton } from "./components/button/button";

declare global {
  interface HTMLGxButtonElement extends GxButton, HTMLStencilElement {}
  var HTMLGxButtonElement: {
    prototype: HTMLGxButtonElement;
    new (): HTMLGxButtonElement;
  };
  interface HTMLElementTagNameMap {
    "gx-button": HTMLGxButtonElement;
  }
  interface ElementTagNameMap {
    "gx-button": HTMLGxButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "gx-button": JSXElements.GxButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface GxButtonAttributes extends HTMLAttributes {
      disabled?: boolean;
      imagePosition?: "above" | "before" | "after" | "below" | "behind";
      invisibleMode?: "collapse" | "keep-space";
    }
  }
}

import { CheckBox as GxCheckbox } from "./components/checkbox/checkbox";

declare global {
  interface HTMLGxCheckboxElement extends GxCheckbox, HTMLStencilElement {}
  var HTMLGxCheckboxElement: {
    prototype: HTMLGxCheckboxElement;
    new (): HTMLGxCheckboxElement;
  };
  interface HTMLElementTagNameMap {
    "gx-checkbox": HTMLGxCheckboxElement;
  }
  interface ElementTagNameMap {
    "gx-checkbox": HTMLGxCheckboxElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "gx-checkbox": JSXElements.GxCheckboxAttributes;
    }
  }
  namespace JSXElements {
    export interface GxCheckboxAttributes extends HTMLAttributes {
      caption?: string;
      checked?: boolean;
      cssClass?: string;
      disabled?: boolean;
      id?: string;
      invisibleMode?: "collapse" | "keep-space";
    }
  }
}

import { Edit as GxEdit } from "./components/edit/edit";

declare global {
  interface HTMLGxEditElement extends GxEdit, HTMLStencilElement {}
  var HTMLGxEditElement: {
    prototype: HTMLGxEditElement;
    new (): HTMLGxEditElement;
  };
  interface HTMLElementTagNameMap {
    "gx-edit": HTMLGxEditElement;
  }
  interface ElementTagNameMap {
    "gx-edit": HTMLGxEditElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "gx-edit": JSXElements.GxEditAttributes;
    }
  }
  namespace JSXElements {
    export interface GxEditAttributes extends HTMLAttributes {
      autocapitalize?: "none" | "sentences" | "words" | "characters";
      autocomplete?: "on" | "off";
      autocorrect?: string;
      cssClass?: string;
      disabled?: boolean;
      id?: string;
      invisibleMode?: "collapse" | "keep-space";
      multiline?: boolean;
      placeholder?: string;
      readonly?: boolean;
      type?:
        | "date"
        | "datetime-local"
        | "email"
        | "file"
        | "number"
        | "password"
        | "search"
        | "tel"
        | "text"
        | "url";
      value?: string;
    }
  }
}

import { FormField as GxFormField } from "./components/form-field/form-field";

declare global {
  interface HTMLGxFormFieldElement extends GxFormField, HTMLStencilElement {}
  var HTMLGxFormFieldElement: {
    prototype: HTMLGxFormFieldElement;
    new (): HTMLGxFormFieldElement;
  };
  interface HTMLElementTagNameMap {
    "gx-form-field": HTMLGxFormFieldElement;
  }
  interface ElementTagNameMap {
    "gx-form-field": HTMLGxFormFieldElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "gx-form-field": JSXElements.GxFormFieldAttributes;
    }
  }
  namespace JSXElements {
    export interface GxFormFieldAttributes extends HTMLAttributes {
      labelCaption?: string;
      labelClass?: string;
      labelPosition?: "none" | "top" | "right" | "bottom" | "left" | "float";
    }
  }
}

import { Message as GxMessage } from "./components/message/message";

declare global {
  interface HTMLGxMessageElement extends GxMessage, HTMLStencilElement {}
  var HTMLGxMessageElement: {
    prototype: HTMLGxMessageElement;
    new (): HTMLGxMessageElement;
  };
  interface HTMLElementTagNameMap {
    "gx-message": HTMLGxMessageElement;
  }
  interface ElementTagNameMap {
    "gx-message": HTMLGxMessageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "gx-message": JSXElements.GxMessageAttributes;
    }
  }
  namespace JSXElements {
    export interface GxMessageAttributes extends HTMLAttributes {
      closeButtonText?: string;
      duration?: number;
      showCloseButton?: boolean;
      type?: "info" | "warning" | "error";
    }
  }
}

import { TableCell as GxTableCell } from "./components/table-cell/table-cell";

declare global {
  interface HTMLGxTableCellElement extends GxTableCell, HTMLStencilElement {}
  var HTMLGxTableCellElement: {
    prototype: HTMLGxTableCellElement;
    new (): HTMLGxTableCellElement;
  };
  interface HTMLElementTagNameMap {
    "gx-table-cell": HTMLGxTableCellElement;
  }
  interface ElementTagNameMap {
    "gx-table-cell": HTMLGxTableCellElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "gx-table-cell": JSXElements.GxTableCellAttributes;
    }
  }
  namespace JSXElements {
    export interface GxTableCellAttributes extends HTMLAttributes {
      align?: "left" | "right" | "center";
      area?: string;
      autoGrow?: boolean;
      valign?: "top" | "bottom" | "medium";
    }
  }
}

import { Table as GxTable } from "./components/table/table";

declare global {
  interface HTMLGxTableElement extends GxTable, HTMLStencilElement {}
  var HTMLGxTableElement: {
    prototype: HTMLGxTableElement;
    new (): HTMLGxTableElement;
  };
  interface HTMLElementTagNameMap {
    "gx-table": HTMLGxTableElement;
  }
  interface ElementTagNameMap {
    "gx-table": HTMLGxTableElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "gx-table": JSXElements.GxTableAttributes;
    }
  }
  namespace JSXElements {
    export interface GxTableAttributes extends HTMLAttributes {
      areasTemplate?: string;
      autoGrow?: boolean;
      columnsTemplate?: string;
      disabled?: boolean;
      invisibleMode?: "collapse" | "keep-space";
      rowsTemplate?: string;
    }
  }
}

import { TextBlock as GxTextblock } from "./components/textblock/textblock";

declare global {
  interface HTMLGxTextblockElement extends GxTextblock, HTMLStencilElement {}
  var HTMLGxTextblockElement: {
    prototype: HTMLGxTextblockElement;
    new (): HTMLGxTextblockElement;
  };
  interface HTMLElementTagNameMap {
    "gx-textblock": HTMLGxTextblockElement;
  }
  interface ElementTagNameMap {
    "gx-textblock": HTMLGxTextblockElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "gx-textblock": JSXElements.GxTextblockAttributes;
    }
  }
  namespace JSXElements {
    export interface GxTextblockAttributes extends HTMLAttributes {
      disabled?: boolean;
      href?: string;
      invisibleMode?: "collapse" | "keep-space";
    }
  }
}

declare global {
  namespace JSX { interface StencilJSX {} }
}
