import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Blueprint icon
 */
const Blueprint: Icon = {
  name: 'blueprint',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M13.5 7.5v5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-5m0-4v-1a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1M2.5 5.5h11M4.5 9.5h1m2 0h1m2 0h1M4.5 7.5h1m2 0h1m2 0h1M4.5 11.5h1m2 0h1m2 0h1M4.5 3.5h7",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round"><path d="M13.5 7.5v5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-5m0-4v-1a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1M2.5 5.5h11M4.5 9.5h1m2 0h1m2 0h1M4.5 7.5h1m2 0h1m2 0h1M4.5 11.5h1m2 0h1m2 0h1M4.5 3.5h7"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Blueprint;
