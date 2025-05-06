import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * SetupPreferences icon
 */
const SetupPreferences: Icon = {
  name: 'setup-preferences',
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
      d: "M10.5 4.5h4M1.5 4.5h2M5.5 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5.5 10.5h-4M14.5 10.5h-2M10.5 8.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 4.5h4M1.5 4.5h2M5.5 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5.5 10.5h-4M14.5 10.5h-2M10.5 8.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default SetupPreferences;
