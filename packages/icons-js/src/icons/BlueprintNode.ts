import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * blueprint-node icon
 */
const BlueprintNode: Icon = {
  name: 'blueprint-node',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M2.5 6.5v-3a1 1 0 0 1 1-1h3m-4 6v3a1 1 0 0 0 1 1h3m2 0h3a1 1 0 0 0 1-1v-3m0-2v-3a1 1 0 0 0-1-1h-3"/><path d="M6.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM1.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM6.5 12.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM11.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default BlueprintNode;
