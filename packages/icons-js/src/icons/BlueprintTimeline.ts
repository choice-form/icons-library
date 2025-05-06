import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * BlueprintTimeline icon
 */
const BlueprintTimeline: Icon = {
  name: 'blueprint-timeline',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M1.5 7.5h4m8 0h-4m4-2v4m-12-4v4",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" d="M1.5 7.5h4m8 0h-4m4-2v4m-12-4v4"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default BlueprintTimeline;
