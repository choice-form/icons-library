import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * WarningRhomboidSmall icon
 */
const WarningRhomboidSmall: Icon = {
  name: 'warning-rhomboid-small',
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
      d: "m2.5 7.5 5-5 5 5-5 5zM7.5 5.5v2M7.5 9.5h.005",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m2.5 7.5 5-5 5 5-5 5zM7.5 5.5v2M7.5 9.5h.005"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WarningRhomboidSmall;
