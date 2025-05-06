import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * PlaySolid icon
 */
const PlaySolid: Icon = {
  name: 'play-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      "fill-rule": "evenodd",
      d: "M4.249 3.068a.5.5 0 0 1 .5-.002l7 4a.5.5 0 0 1 0 .868l-7 4A.5.5 0 0 1 4 11.5v-8a.5.5 0 0 1 .249-.432",
      "clip-rule": "evenodd",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path fill="currentColor" fill-rule="evenodd" d="M4.249 3.068a.5.5 0 0 1 .5-.002l7 4a.5.5 0 0 1 0 .868l-7 4A.5.5 0 0 1 4 11.5v-8a.5.5 0 0 1 .249-.432" clip-rule="evenodd"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default PlaySolid;
