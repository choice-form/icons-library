import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * RatingThumbUpRegular icon
 */
const RatingThumbUpRegular: Icon = {
  name: 'rating-thumb-up-regular',
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
      d: "M3 7.5H0v8h3zM5 15.5h6.9a2 2 0 0 0 1.952-1.566l1.111-5A2 2 0 0 0 13.007 6.5H9v-4a2 2 0 0 0-2-2l-2 6",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7.5H0v8h3zM5 15.5h6.9a2 2 0 0 0 1.952-1.566l1.111-5A2 2 0 0 0 13.007 6.5H9v-4a2 2 0 0 0-2-2l-2 6"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RatingThumbUpRegular;
