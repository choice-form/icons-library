import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * EffectsSettings icon
 */
const EffectsSettings: Icon = {
  name: 'effects-settings',
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
      d: "M7.5 2.5v1m0 8v1M3.965 3.965l.705.705m5.66 5.66.705.705M2.5 7.5h1m8 0h1m-7.83 2.83-.705.705m7.07-7.07-.705.705M9.5 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 2.5v1m0 8v1M3.965 3.965l.705.705m5.66 5.66.705.705M2.5 7.5h1m8 0h1m-7.83 2.83-.705.705m7.07-7.07-.705.705M9.5 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EffectsSettings;
