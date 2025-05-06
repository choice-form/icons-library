import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * WarningHexagonSmall icon
 */
const WarningHexagonSmall: Icon = {
  name: 'warning-hexagon-small',
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
      d: "m13 8-2.5 4.5h-5L3 8l2.5-4.5h5z",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8 5.5v3M8 10.5h.005"/><path d="m13 8-2.5 4.5h-5L3 8l2.5-4.5h5z"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WarningHexagonSmall;
