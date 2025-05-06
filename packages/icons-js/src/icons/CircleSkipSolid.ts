import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * CircleSkipSolid icon
 */
const CircleSkipSolid: Icon = {
  name: 'circle-skip-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      "fill-rule": "evenodd",
      d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m3.207 4.793a1 1 0 0 0-1.414 1.414l.793.793H7a1 1 0 0 0 0 2h3.586l-.793.793a1 1 0 0 0 1.414 1.414l2.5-2.5a1 1 0 0 0 0-1.414zM3 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2",
      "clip-rule": "evenodd",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path fill="currentColor" fill-rule="evenodd" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m3.207 4.793a1 1 0 0 0-1.414 1.414l.793.793H7a1 1 0 0 0 0 2h3.586l-.793.793a1 1 0 0 0 1.414 1.414l2.5-2.5a1 1 0 0 0 0-1.414zM3 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2" clip-rule="evenodd"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default CircleSkipSolid;
