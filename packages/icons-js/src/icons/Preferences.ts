import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Preferences icon
 */
const Preferences: Icon = {
  name: 'preferences',
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
      d: "M5.5 8V3M2.5 5.5h3M7.5 5.5h6M10.5 13V8M13.5 10.5h-3M8.5 10.5h-6",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 8V3M2.5 5.5h3M7.5 5.5h6M10.5 13V8M13.5 10.5h-3M8.5 10.5h-6"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Preferences;
