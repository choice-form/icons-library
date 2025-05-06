import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * History icon
 */
const History: Icon = {
  name: 'history',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M6.5 5.5h-3v-3M10.5 8.5h-3v2",
      "stroke-linejoin": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round"><path d="M3.964 4.964A5 5 0 1 1 2.5 8.5"/><path stroke-linejoin="round" d="M6.5 5.5h-3v-3M10.5 8.5h-3v2"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default History;
