import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Undo icon
 */
const Undo: Icon = {
  name: 'undo',
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
      d: "M12.5 10.5A4.5 4.5 0 0 0 8 6a4.5 4.5 0 0 0-3 1.15L3.5 8.5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 5.5v3h3"/><path d="M12.5 10.5A4.5 4.5 0 0 0 8 6a4.5 4.5 0 0 0-3 1.15L3.5 8.5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Undo;
