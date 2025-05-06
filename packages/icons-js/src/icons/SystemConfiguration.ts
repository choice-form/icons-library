import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * SystemConfiguration icon
 */
const SystemConfiguration: Icon = {
  name: 'system-configuration',
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
      d: "M9.5 7.5v4M9.5 3.5v2M11.5 5.5h-4M5.5 7.5v-4M5.5 11.5v-2M7.5 9.5h-4M1.5 12.5v-10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 7.5v4M9.5 3.5v2M11.5 5.5h-4M5.5 7.5v-4M5.5 11.5v-2M7.5 9.5h-4M1.5 12.5v-10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default SystemConfiguration;
