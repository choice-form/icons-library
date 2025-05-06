import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * RoleRemove icon
 */
const RoleRemove: Icon = {
  name: 'role-remove',
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
      d: "M8.086 2.914 6.207 4.793a1 1 0 0 0 0 1.414L7 7l-4.5 4.5v2h2l1-1v-1h1v-1h1L9 9l.793.793a1 1 0 0 0 1.414 0l1.879-1.879a2 2 0 0 0 0-2.828l-2.172-2.172a2 2 0 0 0-2.828 0M9.5 4.5l2 2M14.5 12.5h-4",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8.086 2.914 6.207 4.793a1 1 0 0 0 0 1.414L7 7l-4.5 4.5v2h2l1-1v-1h1v-1h1L9 9l.793.793a1 1 0 0 0 1.414 0l1.879-1.879a2 2 0 0 0 0-2.828l-2.172-2.172a2 2 0 0 0-2.828 0M9.5 4.5l2 2M14.5 12.5h-4"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RoleRemove;
