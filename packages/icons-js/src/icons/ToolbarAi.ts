import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ToolbarAi icon
 */
const ToolbarAi: Icon = {
  name: 'toolbar-ai',
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
      d: "M.5 10.5a5 5 0 0 0 5-5 5 5 0 0 0 5 5 5 5 0 0 0-5 5 5 5 0 0 0-5-5M9.5 3.5a3 3 0 0 0 3-3 3 3 0 0 0 3 3 3 3 0 0 0-3 3 3 3 0 0 0-3-3",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M.5 10.5a5 5 0 0 0 5-5 5 5 0 0 0 5 5 5 5 0 0 0-5 5 5 5 0 0 0-5-5M9.5 3.5a3 3 0 0 0 3-3 3 3 0 0 0 3 3 3 3 0 0 0-3 3 3 3 0 0 0-3-3"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarAi;
