import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * BlockAdd icon
 */
const BlockAdd: Icon = {
  name: 'block-add',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "fill-opacity": ".25",
      "stroke-linejoin": "round",
      d: "M12.5 1.5h-10a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1ZM4.5 7.5h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round"><path fill="currentColor" fill-opacity=".25" stroke-linejoin="round" d="M14.5 10.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0"/><path stroke-linejoin="round" d="M12.5 10.5h-4m2-2v4"/><path d="M12.5 1.5h-10a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1ZM4.5 7.5h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default BlockAdd;
