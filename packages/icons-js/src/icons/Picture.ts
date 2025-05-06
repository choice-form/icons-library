import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Picture icon
 */
const Picture: Icon = {
  name: 'picture',
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
      d: "M4.5 5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0",
      "fill-opacity": ".25",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 2.5h-9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1"/><path fill="currentColor" fill-opacity=".25" d="m9.346 7.11-5.919 5.524a.5.5 0 0 0 .342.866H12.5a1 1 0 0 0 1-1v-3l-2.82-2.418a1 1 0 0 0-1.334.028"/><path d="M4.5 5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Picture;
