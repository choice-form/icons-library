import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * DistributeHorizontalSolid icon
 */
const DistributeHorizontalSolid: Icon = {
  name: 'distribute-horizontal-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.5 4.5h2v6h-2z",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 2.5v10m8-10v10"/><path fill="currentColor" d="M6.5 4.5h2v6h-2z"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default DistributeHorizontalSolid;
