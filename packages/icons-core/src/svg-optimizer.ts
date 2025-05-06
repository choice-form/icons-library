import { optimize } from "svgo";
import { SvgoConfig } from "./types.js";

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
 * 从 SVG 内容中提取 viewBox 属性
 * @param svgContent SVG 内容
 * @returns viewBox 值，如果未找到则返回默认值 "0 0 24 24"
 */
export function extractViewBox(svgContent: string): string {
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  return viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24";
}

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
