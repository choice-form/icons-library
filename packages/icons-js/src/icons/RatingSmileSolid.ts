import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * RatingSmileSolid icon
 */
const RatingSmileSolid: Icon = {
  name: 'rating-smile-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      "fill-rule": "evenodd",
      d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5.429 9.542a.5.5 0 0 0-.858.515 4 4 0 0 0 6.858 0 .5.5 0 1 0-.858-.515 3 3 0 0 1-5.142 0",
      "clip-rule": "evenodd",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path fill="currentColor" fill-rule="evenodd" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5.429 9.542a.5.5 0 0 0-.858.515 4 4 0 0 0 6.858 0 .5.5 0 1 0-.858-.515 3 3 0 0 1-5.142 0" clip-rule="evenodd"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RatingSmileSolid;
