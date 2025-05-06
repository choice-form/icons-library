import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * RatingHeartSolid icon
 */
const RatingHeartSolid: Icon = {
  name: 'rating-heart-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      d: "M11 2a3.94 3.94 0 0 0-3 1.371A3.94 3.94 0 0 0 5 2a4 4 0 0 0-2.865 6.785l5.508 5.629a.5.5 0 0 0 .715-.001l5.315-5.454A3.988 3.988 0 0 0 11 2",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path fill="currentColor" d="M11 2a3.94 3.94 0 0 0-3 1.371A3.94 3.94 0 0 0 5 2a4 4 0 0 0-2.865 6.785l5.508 5.629a.5.5 0 0 0 .715-.001l5.315-5.454A3.988 3.988 0 0 0 11 2"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RatingHeartSolid;
