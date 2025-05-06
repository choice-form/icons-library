import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ToolbarImage icon
 */
const ToolbarImage: Icon = {
  name: 'toolbar-image',
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
      d: "M5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m.5 12.5 3-3 2 2 5-5 5 5"/><path d="M14 15.5H2A1.5 1.5 0 0 1 .5 14V2A1.5 1.5 0 0 1 2 .5h12A1.5 1.5 0 0 1 15.5 2v12a1.5 1.5 0 0 1-1.5 1.5"/><path d="M5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarImage;
