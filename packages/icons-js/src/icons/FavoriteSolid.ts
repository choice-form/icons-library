import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FavoriteSolid icon
 */
const FavoriteSolid: Icon = {
  name: 'favorite-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      d: "M12.988 4.055a3.34 3.34 0 0 0-5.001.149 3.336 3.336 0 0 0-5.006-.141A3.7 3.7 0 0 0 2.989 9.1l4.641 4.75a.5.5 0 0 0 .715 0l4.644-4.75a3.614 3.614 0 0 0-.001-5.045",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path fill="currentColor" d="M12.988 4.055a3.34 3.34 0 0 0-5.001.149 3.336 3.336 0 0 0-5.006-.141A3.7 3.7 0 0 0 2.989 9.1l4.641 4.75a.5.5 0 0 0 .715 0l4.644-4.75a3.614 3.614 0 0 0-.001-5.045"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FavoriteSolid;
