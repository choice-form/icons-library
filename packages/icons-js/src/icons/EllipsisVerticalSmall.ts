import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * EllipsisVerticalSmall icon
 */
const EllipsisVerticalSmall: Icon = {
  name: 'ellipsis-vertical-small',
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
      d: "M8 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8 4.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8 4.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EllipsisVerticalSmall;
