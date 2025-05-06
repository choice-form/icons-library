import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * circle-question-large icon
 */
const CircleQuestionLarge: Icon = {
  name: 'circle-question-large',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g fill="currentColor"><path d="M8 0a8 8 0 1 0 8 8 8.024 8.024 0 0 0-8-8m0 14a6 6 0 1 1 6-6 6.02 6.02 0 0 1-6 6"/><path d="M8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M8 10a1 1 0 0 1-1-1 3.06 3.06 0 0 1 1.322-2.427c.5-.425.622-.57.622-.906 0-.183 0-.667-.944-.667a2.05 2.05 0 0 0-1.258.561 1 1 0 1 1-1.373-1.456A4.08 4.08 0 0 1 7.948 3a2.68 2.68 0 0 1 2.993 2.666 3.05 3.05 0 0 1-1.318 2.426C9.126 8.519 9 8.663 9 9a1 1 0 0 1-1 1"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default CircleQuestionLarge;
