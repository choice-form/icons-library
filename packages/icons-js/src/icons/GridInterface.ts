import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * GridInterface icon
 */
const GridInterface: Icon = {
  name: 'grid-interface',
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
      d: "M6.5 2.5h-4v4h4zM13.5 2.5h-4v4h4zM6.5 9.5h-4v4h4zM13.5 9.5h-4v4h4z",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 2.5h-4v4h4zM13.5 2.5h-4v4h4zM6.5 9.5h-4v4h4zM13.5 9.5h-4v4h4z"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default GridInterface;
