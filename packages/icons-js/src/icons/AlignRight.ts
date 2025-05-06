import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * AlignRight icon
 */
const AlignRight: Icon = {
  name: 'align-right',
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
      d: "M12.5 2.5v10m-2-8h-8v2h8zm0 4h-5v2h5z",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 2.5v10m-2-8h-8v2h8zm0 4h-5v2h5z"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default AlignRight;
