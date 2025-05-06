import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ImageAdd icon
 */
const ImageAdd: Icon = {
  name: 'image-add',
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
      d: "m2 11 2.5-2.5L6 10l3.5-3.5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path d="M12.5 8.5v-5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h5M14.5 12.5h-4m2 2v-4"/><path d="m2 11 2.5-2.5L6 10l3.5-3.5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ImageAdd;
