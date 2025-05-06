import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ToolbarSort icon
 */
const ToolbarSort: Icon = {
  name: 'toolbar-sort',
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
      d: "M4.5 3.5v9m0 0L2 10m2.5 2.5L7 10m3.5 1.5v-9m0 0L13 5m-2.5-2.5L8 5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 3.5v9m0 0L2 10m2.5 2.5L7 10m3.5 1.5v-9m0 0L13 5m-2.5-2.5L8 5"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarSort;
