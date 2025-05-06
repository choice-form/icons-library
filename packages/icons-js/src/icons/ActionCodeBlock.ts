import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * action-code-block icon
 */
const ActionCodeBlock: Icon = {
  name: 'action-code-block',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 5.5 2 2-2 2m-2 3h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1"/><path stroke-opacity=".25" d="M7.5 9.5h4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ActionCodeBlock;
