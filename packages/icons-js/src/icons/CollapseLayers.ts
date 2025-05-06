import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * CollapseLayers icon
 */
const CollapseLayers: Icon = {
  name: 'collapse-layers',
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
      d: "M2.5 3.5h5m-5 3h5m-5 3h5m-5 3h5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="m9.5 12.5 2-2 2 2M9.5 3.5l2 2 2-2"/><path d="M2.5 3.5h5m-5 3h5m-5 3h5m-5 3h5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default CollapseLayers;
