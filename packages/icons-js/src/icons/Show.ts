import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Show icon
 */
const Show: Icon = {
  name: 'show',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M7.5 3.5c-3.185 0-5.102 2.536-5.75 3.57a.8.8 0 0 0 0 .86c.648 1.034 2.565 3.57 5.75 3.57s5.102-2.536 5.75-3.57a.8.8 0 0 0 0-.86C12.603 6.035 10.686 3.5 7.5 3.5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 7.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/><path d="M7.5 5.5a2 2 0 0 1-2 2"/><path d="M7.5 3.5c-3.185 0-5.102 2.536-5.75 3.57a.8.8 0 0 0 0 .86c.648 1.034 2.565 3.57 5.75 3.57s5.102-2.536 5.75-3.57a.8.8 0 0 0 0-.86C12.603 6.035 10.686 3.5 7.5 3.5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Show;
