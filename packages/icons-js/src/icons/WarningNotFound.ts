import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * WarningNotFound icon
 */
const WarningNotFound: Icon = {
  name: 'warning-not-found',
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
      "fill-opacity": ".25",
      d: "M3.5 6.5v3m0 0v2m0-2h-3l2-5m1 5h1M14.5 6.5v3m0 0v2m0-2h-3l2-5m1 5h1M.5 2.5h15m-15 11h15",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" fill-opacity=".25" d="M8.5 4.5h-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1"/><path d="M3.5 6.5v3m0 0v2m0-2h-3l2-5m1 5h1M14.5 6.5v3m0 0v2m0-2h-3l2-5m1 5h1M.5 2.5h15m-15 11h15"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WarningNotFound;
