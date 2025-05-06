import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FileSub icon
 */
const FileSub: Icon = {
  name: 'file-sub',
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
      d: "M7.5 2.5v5a1 1 0 0 0 1 1h4M12.5 8.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 2.5v5a1 1 0 0 0 1 1h4M12.5 8.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FileSub;
