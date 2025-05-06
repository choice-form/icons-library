import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * rating-thumb-up-regular icon
 */
const RatingThumbUpRegular: Icon = {
  name: 'rating-thumb-up-regular',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7.5H0v8h3zM5 15.5h6.9a2 2 0 0 0 1.952-1.566l1.111-5A2 2 0 0 0 13.007 6.5H9v-4a2 2 0 0 0-2-2l-2 6"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RatingThumbUpRegular;
