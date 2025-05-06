import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * OrganizationJoin icon
 */
const OrganizationJoin: Icon = {
  name: 'organization-join',
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
      d: "M9.5 13.5h3a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3m-2 0h-2a1 1 0 0 0-1 1v1m3 6h-2a1 1 0 0 1-1-1v-1M9.5 5.5h.005m-.005-2h.005M11.5 5.5h.005m-.005 2h.005m-.005 2h.005m-.005 2h.005m-.005-8h.005M7.5 7.5l2 2m0 0-2 2m2-2h-8",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 13.5h3a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3m-2 0h-2a1 1 0 0 0-1 1v1m3 6h-2a1 1 0 0 1-1-1v-1M9.5 5.5h.005m-.005-2h.005M11.5 5.5h.005m-.005 2h.005m-.005 2h.005m-.005 2h.005m-.005-8h.005M7.5 7.5l2 2m0 0-2 2m2-2h-8"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default OrganizationJoin;
