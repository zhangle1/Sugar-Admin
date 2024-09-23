import { useRequestManager } from 'api/hooks';
import { baseRequestClient, requestClient } from 'api/request';

export namespace AuthApi {
  /** 登录接口参数 */
  export interface LoginParams {
    password: string;
    username: string;
  }

  /** 登录接口返回值 */
  export interface LoginResult {
    accessToken: string;
    desc: string;
    realName: string;
    userId: string;
    username: string;
  }

  export interface RefreshTokenResult {
    data: string;
    status: number;
  }
}
export async function loginApi(data: AuthApi.LoginParams) {
  return requestClient.post<AuthApi.LoginResult>('/auth/login', data);
}



export async function refreshTokenApi() {
    return baseRequestClient.post<AuthApi.RefreshTokenResult>('/auth/refresh', {
      withCredentials: true
    });
  }

  export  async function logoutApi() {
    return baseRequestClient.post('/auth/logout', {
      withCredentials: true,
    });
  }
  
  /**
   * 获取用户权限码
   */
  export  async function getAccessCodesApi() {
    return requestClient.get<string[]>('/auth/codes');
  }



