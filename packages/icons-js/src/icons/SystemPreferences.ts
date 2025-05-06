import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * SystemPreferences icon
 */
const SystemPreferences: Icon = {
  name: 'system-preferences',
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
      d: "M4.5 13.5v-2M4.5 5.5v-3M4.5 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M11.5 2.5v2M11.5 10.5v3M11.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 13.5v-2M4.5 5.5v-3M4.5 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M11.5 2.5v2M11.5 10.5v3M11.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default SystemPreferences;
