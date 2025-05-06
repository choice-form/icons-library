import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ApiDocument icon
 */
const ApiDocument: Icon = {
  name: 'api-document',
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
      d: "M12 13.5H4a1.5 1.5 0 0 1 0-3h8.5V13a.5.5 0 0 1-.5.5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 12V3.5a2 2 0 0 1 2-2h7a1 1 0 0 1 1 1v8m-7-3 .5-1m0 0 1.5-3 1.5 3m-3 0h3m.5 1-.5-1"/><path d="M12 13.5H4a1.5 1.5 0 0 1 0-3h8.5V13a.5.5 0 0 1-.5.5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ApiDocument;
