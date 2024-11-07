import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuRecordRaw } from '@sugar/@core/base/typings';

type AccessToken = null | string;

export interface AccessState {
  /**
   * 权限码
   */
  accessCodes: string[];
  /**
   * 可访问的菜单列表
   */
  accessMenus: Object[];
  /**
   * 可访问的路由列表
   */
  accessRoutes: Object[];
  /**
   * 登录 accessToken
   */
  accessToken: AccessToken;
  /**
   * 是否已经检查过权限
   */
  isAccessChecked: boolean;
  /**
   * 登录是否过期
   */
  loginExpired: boolean;
  /**
   * 登录 accessToken
   */
  refreshToken: AccessToken;
}

const initialState: AccessState = {
  accessCodes: [],
  accessMenus: [],
  accessRoutes: [],
  accessToken: null,
  isAccessChecked: false,
  loginExpired: true,
  refreshToken: null
};

const accessSlice = createSlice({
  name: 'access',
  initialState,
  reducers: {
    setAccess(state, action: PayloadAction<Partial<AccessState>>) {
      return { ...state, ...action.payload };
    },
    setAccessRoutes(state,action:PayloadAction<Object[]>){
      state.accessRoutes=action.payload
    },
    setAccessMenus(state,action:PayloadAction<Object[]>){
      state.accessMenus=action.payload
    },
    setAccessToken(state, action: PayloadAction<AccessToken>) {
      state.accessToken = action.payload;
    },
    setLoginExpired(state, action: PayloadAction<boolean>) {
      state.loginExpired = action.payload;
    },

    setAccessCodes: (state, action: PayloadAction<string[]>) => {
      state.accessCodes = action.payload;
    },
    resetAccess: () => initialState
  }
});

export function useAccessAction() {
  return { ...accessSlice.actions };
}

export default accessSlice.reducer;
