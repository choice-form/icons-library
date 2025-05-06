import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ActionHttpRequest icon
 */
const ActionHttpRequest: Icon = {
  name: 'action-http-request',
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
      d: "M3.5 11.5h9",
      "stroke-opacity": ".25",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 5.5v3a1 1 0 0 0 2 0v-3m2 2v-2h1a1 1 0 0 1 0 2m-1 0v2m0-2h1m0 0 1 2m2-4v4h3v3a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v4"/><path stroke-opacity=".25" d="M3.5 11.5h9"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ActionHttpRequest;
