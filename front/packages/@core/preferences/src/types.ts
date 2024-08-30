import { BuiltinThemeType, ThemeModeType } from "@sugar/@core/typings";

interface ThemePreferences {
    /** 内置主题名 */
    builtinType: BuiltinThemeType;
    /** 错误色 */
    colorDestructive: string;
    /** 主题色 */
    colorPrimary: string;
    /** 成功色 */
    colorSuccess: string;
    /** 警告色 */
    colorWarning: string;
    /** 当前主题 */
    mode: ThemeModeType;
    /** 圆角 */
    radius: string;
    /** 是否开启半深色header（只在theme='light'时生效） */
    semiDarkHeader: boolean;
    /** 是否开启半深色菜单（只在theme='light'时生效） */
    semiDarkSidebar: boolean;
  }



interface LogoPreferences {
  /** logo是否可见 */
  enable: boolean;
  /** logo地址 */
  source: string;
}



export type {ThemePreferences,LogoPreferences}
