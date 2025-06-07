import { optimize } from "svgo";
import type { SvgoConfig } from "./types.js";

/**
 * 默认的 SVGO 优化配置
 */
export const defaultSvgoConfig: SvgoConfig = {
  plugins: [
    {
      name: "preset-default",
      multipass: true,
      params: {
        overrides: {
          removeViewBox: false,
          cleanupNumericValues: true,
          collapseGroups: true,
          mergePaths: true,
          convertColors: {
            currentColor: /^#(000|000000)$|^black$/i,
          },
        },
      },
    },
    { name: "removeXMLNS" }, // 移除 xmlns 属性，前端框架会自动添加
  ],
};

/**
 * 优化 SVG 内容
 * @param svgContent SVG 原始内容
 * @param config SVGO 配置，默认使用 defaultSvgoConfig
 * @returns 优化后的 SVG 内容
 */
export function optimizeSvg(
  svgContent: string,
  config: SvgoConfig = defaultSvgoConfig
): string {
  const { data: optimizedSvg } = optimize(svgContent, config);
  return optimizedSvg;
}
