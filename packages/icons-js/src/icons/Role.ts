import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Role icon
 */
const Role: Icon = {
  name: 'role',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linejoin": "round",
      d: "m9.5 4.5 2 2",
      "stroke-linecap": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linejoin="round"><path d="m11.207 9.793 1.879-1.879a2 2 0 0 0 0-2.828l-2.172-2.172a2 2 0 0 0-2.828 0L6.207 4.793a1 1 0 0 0 0 1.414L7 7l-4.5 4.5v2h2l1-1v-1h1v-1h1L9 9l.793.793a1 1 0 0 0 1.414 0Z"/><path stroke-linecap="round" d="m9.5 4.5 2 2"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Role;
