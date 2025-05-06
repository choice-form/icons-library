import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Search icon
 */
const Search: Icon = {
  name: 'search',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "m10.5 10.5 3 3m-2-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" d="m10.5 10.5 3 3m-2-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Search;
