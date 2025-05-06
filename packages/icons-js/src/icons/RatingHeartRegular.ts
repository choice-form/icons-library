import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * rating-heart-regular icon
 */
const RatingHeartRegular: Icon = {
  name: 'rating-heart-regular',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 6A3.49 3.49 0 0 0 8 4.223a3.492 3.492 0 1 0-5.507 4.213L8 14.065l5.338-5.477A3.48 3.48 0 0 0 14.5 6"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RatingHeartRegular;
