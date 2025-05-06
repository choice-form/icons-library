import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Target icon
 */
const Target: Icon = {
  name: 'target',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      d: "M8 7.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" d="M12.5 7.5a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z"/><path stroke="currentColor" d="M10 7.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"/><path fill="currentColor" d="M8 7.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Target;
