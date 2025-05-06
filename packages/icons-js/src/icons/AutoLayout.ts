import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * AutoLayout icon
 */
const AutoLayout: Icon = {
  name: 'auto-layout',
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
      d: "M13.5 11.5v1a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-1M4.5 10.5l3-7 3 7M5.5 8.5h4M13.5 3.5v-1a1 1 0 0 0-1-1h-1m-10 2v-1a1 1 0 0 1 1-1h1",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 11.5v1a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-1M4.5 10.5l3-7 3 7M5.5 8.5h4M13.5 3.5v-1a1 1 0 0 0-1-1h-1m-10 2v-1a1 1 0 0 1 1-1h1"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default AutoLayout;
