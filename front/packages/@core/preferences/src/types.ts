import { AuthPageLayoutType, BuiltinThemeType, ThemeModeType } from "@sugar/@core/base/typings";


import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemePreferences {}
}
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

    foregroundColor:string;

    mutedForegroundColor:string;

    backgroundDeep:string;

    background:string;

    inputBackground:string;

    inputBorderColor:string;

    primaryForeground:string;
  }



interface LogoPreferences {
  /** logo是否可见 */
  enable: boolean;
  /** logo地址 */
  source: string;
}


type SupportedLanguagesType = 'en-US' | 'zh-CN';

interface AppPreferences {
  /** 权限模式 */
  // accessMode: AccessModeType;
  /** 登录注册页面布局 */
  authPageLayout: AuthPageLayoutType;
  /** 检查更新轮询时间 */
  // checkUpdatesInterval: number;
  // /** 是否开启灰色模式 */
  // colorGrayMode: boolean;
  // /** 是否开启色弱模式 */
  // colorWeakMode: boolean;
  // /** 是否开启紧凑模式 */
  // compact: boolean;
  // /** 是否开启内容紧凑模式 */
  // contentCompact: ContentCompactType;
  // // /** 应用默认头像 */
  // defaultAvatar: string;
  // // /** 开启动态标题 */
  // dynamicTitle: boolean;
  // /** 是否开启检查更新 */
  // enableCheckUpdates: boolean;
  // /** 是否显示偏好设置 */
  // enablePreferences: boolean;
  // /**
  //  * @zh_CN 是否开启refreshToken
  //  */
  // enableRefreshToken: boolean;
  // /** 是否移动端 */
  // isMobile: boolean;
  // /** 布局方式 */
  // layout: LayoutType;
  /** 支持的语言 */
  locale: SupportedLanguagesType;
  // /** 登录过期模式 */
  // loginExpiredMode: LoginExpiredModeType;
  // /** 应用名 */
  // name: string;
  // /** 偏好设置按钮位置 */
  // preferencesButtonPosition: PreferencesButtonPositionType;
  // /**
  //  * @zh_CN 是否开启水印
  //  */
  // watermark: boolean;
}





export type {ThemePreferences,LogoPreferences,AppPreferences}
