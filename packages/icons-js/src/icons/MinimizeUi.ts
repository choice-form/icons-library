import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * MinimizeUi icon
 */
const MinimizeUi: Icon = {
  name: 'minimize-ui',
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
      d: "M6.5 4.5v6",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M12.6 2.5H3.4a.9.9 0 0 0-.9.9v8.2a.9.9 0 0 0 .9.9h9.2a.9.9 0 0 0 .9-.9V3.4a.9.9 0 0 0-.9-.9"/><path d="M6.5 4.5v6"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default MinimizeUi;
