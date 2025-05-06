import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * toolbar-screen-aspect-vertical-regular icon
 */
const ToolbarScreenAspectVerticalRegular: Icon = {
  name: 'toolbar-screen-aspect-vertical-regular',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 2.5h-11a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarScreenAspectVerticalRegular;
