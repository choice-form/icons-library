import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ToolbarPreviewSolid icon
 */
const ToolbarPreviewSolid: Icon = {
  name: 'toolbar-preview-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      "fill-rule": "evenodd",
      d: "m15.5 8 .439-.24zm.438.24a.5.5 0 0 0 0-.48v-.002l-.002-.004-.008-.014-.029-.05-.109-.185a15.558 15.558 0 0 0-1.991-2.6C12.454 3.495 10.456 2 8 2S3.546 3.495 2.2 4.905A15.6 15.6 0 0 0 .1 7.69l-.028.05-.008.014-.002.004v.002a.5.5 0 0 0 0 .48v.002l.002.004.008.014a5 5 0 0 0 .138.235 15.552 15.552 0 0 0 1.991 2.6C3.546 12.505 5.544 14 8 14s4.454-1.495 5.8-2.905a15.6 15.6 0 0 0 2.1-2.785l.028-.05.008-.014.002-.004zM.5 8l-.438-.24zm15.439.24L15.5 8zM6 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
      "clip-rule": "evenodd",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path fill="currentColor" fill-rule="evenodd" d="m15.5 8 .439-.24zm.438.24a.5.5 0 0 0 0-.48v-.002l-.002-.004-.008-.014-.029-.05-.109-.185a15.558 15.558 0 0 0-1.991-2.6C12.454 3.495 10.456 2 8 2S3.546 3.495 2.2 4.905A15.6 15.6 0 0 0 .1 7.69l-.028.05-.008.014-.002.004v.002a.5.5 0 0 0 0 .48v.002l.002.004.008.014a5 5 0 0 0 .138.235 15.552 15.552 0 0 0 1.991 2.6C3.546 12.505 5.544 14 8 14s4.454-1.495 5.8-2.905a15.6 15.6 0 0 0 2.1-2.785l.028-.05.008-.014.002-.004zM.5 8l-.438-.24zm15.439.24L15.5 8zM6 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clip-rule="evenodd"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarPreviewSolid;
