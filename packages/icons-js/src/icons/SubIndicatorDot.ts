import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * SubIndicatorDot icon
 */
const SubIndicatorDot: Icon = {
  name: 'sub-indicator-dot',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      d: "M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path fill="currentColor" d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default SubIndicatorDot;
