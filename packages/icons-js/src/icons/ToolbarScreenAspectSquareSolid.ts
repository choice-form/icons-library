import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * toolbar-screen-aspect-square-solid icon
 */
const ToolbarScreenAspectSquareSolid: Icon = {
  name: 'toolbar-screen-aspect-square-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path fill="currentColor" fill-rule="evenodd" d="M1 3.5A2.5 2.5 0 0 1 3.5 1h9A2.5 2.5 0 0 1 15 3.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5z" clip-rule="evenodd"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarScreenAspectSquareSolid;
