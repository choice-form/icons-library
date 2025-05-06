import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Email icon
 */
const Email: Icon = {
  name: 'email',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      d: "m1.5 5.5 5.553 2.776a1 1 0 0 0 .894 0L13.5 5.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor"><path d="M12.5 2.5h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Z"/><path stroke-linecap="round" stroke-linejoin="round" d="m1.5 5.5 5.553 2.776a1 1 0 0 0 .894 0L13.5 5.5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Email;
