import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * toolbar-screen-aspect-square-regular icon
 */
const ToolbarScreenAspectSquareRegular: Icon = {
  name: 'toolbar-screen-aspect-square-regular',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 1.5h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarScreenAspectSquareRegular;
