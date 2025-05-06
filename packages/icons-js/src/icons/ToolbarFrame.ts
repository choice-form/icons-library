import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ToolbarFrame icon
 */
const ToolbarFrame: Icon = {
  name: 'toolbar-frame',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M1.5 4.5h13m-13 7h13m-3-10v13m-7-13v13",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" d="M1.5 4.5h13m-13 7h13m-3-10v13m-7-13v13"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarFrame;
