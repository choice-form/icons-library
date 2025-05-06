import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * RecordCopyUrl icon
 */
const RecordCopyUrl: Icon = {
  name: 'record-copy-url',
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
      d: "m10 3 .086-.086a2 2 0 0 1 2.828 0l.172.172a2 2 0 0 1 0 2.828l-1.879 1.879a1 1 0 0 1-1.414 0L9 7m0 3-.086.086a2 2 0 0 1-2.828 0l-.172-.172a2 2 0 0 1 0-2.828l1.879-1.879a1 1 0 0 1 1.414 0L10 6",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 10.5v2a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2"/><path d="m10 3 .086-.086a2 2 0 0 1 2.828 0l.172.172a2 2 0 0 1 0 2.828l-1.879 1.879a1 1 0 0 1-1.414 0L9 7m0 3-.086.086a2 2 0 0 1-2.828 0l-.172-.172a2 2 0 0 1 0-2.828l1.879-1.879a1 1 0 0 1 1.414 0L10 6"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RecordCopyUrl;
