// styles/utils.ts
import { DefaultTheme } from 'styled-components';
import Color from 'color';


export function tailwindColorAdjust(hsl: string, variant: number) {
  // 解析输入的 HSL 颜色
  const color = Color(hsl).hsl();

  // 确保 variant 是一个有效的值
  const validVariant = Math.min(900, Math.max(100, variant));

  // 计算调整量
  const base = (validVariant - 500) / 1000; // 计算变化范围（500 为基础色）
  const lightenAmount = base * 0.3; // 亮度调整量
  const saturateAmount = base * 0.2; // 饱和度调整量

  // 根据调整量应用变化
  return color
    .lighten(lightenAmount) // 调整亮度
    .saturate(saturateAmount) // 调整饱和度
    .toString(); // 转换为 CSS 字符串
}
export const getColorPrimary = (theme: DefaultTheme) => theme.colorPrimary;

export const getColorPrimaryHover = (theme: DefaultTheme) =>
  tailwindColorAdjust(theme.colorPrimary, 100);


export const getAccentHover = (theme: DefaultTheme) =>
  tailwindColorAdjust(theme.accent, 100);

export const getHover =(theme: string)=>
  tailwindColorAdjust(theme, 100);
