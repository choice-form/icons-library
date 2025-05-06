import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * blueprint-timeline icon
 */
const BlueprintTimeline: Icon = {
  name: 'blueprint-timeline',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" d="M1.5 7.5h4m8 0h-4m4-2v4m-12-4v4"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default BlueprintTimeline;
