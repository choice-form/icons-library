import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * toolbar-preview-regular icon
 */
const ToolbarPreviewRegular: Icon = {
  name: 'toolbar-preview-regular',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M.5 8s3-5.5 7.5-5.5S15.5 8 15.5 8s-3 5.5-7.5 5.5S.5 8 .5 8"/><path d="M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarPreviewRegular;
