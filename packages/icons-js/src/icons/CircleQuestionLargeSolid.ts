import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * circle-question-large-solid icon
 */
const CircleQuestionLargeSolid: Icon = {
  name: 'circle-question-large-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m0 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2m1.623-4.908C9.126 8.519 9 8.663 9 9a1 1 0 1 1-2 0c0-1.294.795-1.976 1.322-2.427.497-.425.623-.57.623-.906 0-.183 0-.667-.944-.667a2.05 2.05 0 0 0-1.258.561A1 1 0 1 1 5.37 4.106a4.08 4.08 0 0 1 2.579-1.104h.003c1.812 0 2.993 1.071 2.993 2.666 0 1.293-.795 1.975-1.321 2.425z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default CircleQuestionLargeSolid;
