import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * QrCode icon
 */
const QrCode: Icon = {
  name: 'qr-code',
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
      d: "M5 1.5H2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5M13 1.5h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5M5 9.5H2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5M7.5 3.5v2a2 2 0 0 1-2 2h-1m-3 0h1M13.5 9.5H10a.5.5 0 0 0-.5.5v3.5M13.5 7.5v.005M7.5 9.5v.005M7.5 1.5v.005M3.5 3.5v.005M3.5 11.5v.005M11.5 3.5v.005M7.5 11.5v2m4-6h-2M13.5 12v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5 1.5H2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5M13 1.5h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5M5 9.5H2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5M7.5 3.5v2a2 2 0 0 1-2 2h-1m-3 0h1M13.5 9.5H10a.5.5 0 0 0-.5.5v3.5M13.5 7.5v.005M7.5 9.5v.005M7.5 1.5v.005M3.5 3.5v.005M3.5 11.5v.005M11.5 3.5v.005M7.5 11.5v2m4-6h-2M13.5 12v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default QrCode;
