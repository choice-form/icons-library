import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ColorTypeImage icon
 */
const ColorTypeImage: Icon = {
  name: 'color-type-image',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      d: "M8.5 5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z",
      "stroke-linejoin": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor"><path d="M2.5 4.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z"/><path stroke-linejoin="round" d="m2.5 10 3.146-3.146a.5.5 0 0 1 .708 0L11.5 12"/><path d="M8.5 5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ColorTypeImage;
