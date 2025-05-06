import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * RatingThumbUpSolid icon
 */
const RatingThumbUpSolid: Icon = {
  name: 'rating-thumb-up-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      d: "M2 7H1a.945.945 0 0 0-1 1v7a.945.945 0 0 0 1 1h1zM14 6H9V2a1.89 1.89 0 0 0-2-2L4 7v9h8a2.91 2.91 0 0 0 2.9-2.4l1-5.2A1.937 1.937 0 0 0 14 6",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g fill="currentColor"><path d="M2 7H1a.945.945 0 0 0-1 1v7a.945.945 0 0 0 1 1h1zM14 6H9V2a1.89 1.89 0 0 0-2-2L4 7v9h8a2.91 2.91 0 0 0 2.9-2.4l1-5.2A1.937 1.937 0 0 0 14 6"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RatingThumbUpSolid;
