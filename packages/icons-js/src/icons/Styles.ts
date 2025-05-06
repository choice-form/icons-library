import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Styles icon
 */
const Styles: Icon = {
  name: 'styles',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      d: "M6.5 4.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM12.5 4.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM6.5 10.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM12.5 10.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor"><path d="M6.5 4.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM12.5 4.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM6.5 10.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM12.5 10.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Styles;
