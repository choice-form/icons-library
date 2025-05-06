import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * rating-shape-regular icon
 */
const RatingShapeRegular: Icon = {
  name: 'rating-shape-regular',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8 .867 2.318 4.696 5.182.753-3.75 3.655.885 5.162L8 12.696l-4.635 2.437.885-5.162L.5 6.316l5.182-.753z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RatingShapeRegular;
