import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Contactinfo icon
 */
const Contactinfo: Icon = {
  name: 'contactinfo',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      d: "M8 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "fill-opacity": ".25",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor"><path d="M12.5 1.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M11.5 12.5v-1a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v1"/><path fill="currentColor" fill-opacity=".25" stroke-linecap="round" stroke-linejoin="round" d="M8 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Contactinfo;
