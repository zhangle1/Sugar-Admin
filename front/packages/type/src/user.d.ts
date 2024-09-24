import type { BasicUserInfo } from "@sugar/@core/base/typings";
/** 用户信息 */
interface UserInfo extends BasicUserInfo {
  /**
   * 用户描述
   */
  desc: string;
  /**
   * 首页地址
   */
  homePath: string;

  /**
   * accessToken
   */
  token: string;

    /**
   * 头像
   */
    avatar: string;
    /**
     * 用户昵称
     */
    realName: string;
    /**
     * 用户角色
     */
    roles?: string[];
    /**
     * 用户id
     */
    userId: string;
    /**
     * 用户名
     */
    username: string;
}

export type { UserInfo };
