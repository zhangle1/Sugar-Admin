import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuRecordRaw } from "@sugar/@core/base/typings";


type AccessToken = null | string;



interface AccessState {
    /**
     * 权限码
     */
    accessCodes: string[];
    /**
     * 可访问的菜单列表
     */
    accessMenus: MenuRecordRaw[];
    /**
     * 可访问的路由列表
     */
    accessRoutes: [];
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

  const initialState: AccessState ={
    accessCodes:[],
    accessMenus:[],
    accessRoutes:[],
    accessToken:null,
    isAccessChecked:false,
    loginExpired:true,
    refreshToken:null,
  }

  const accessSlice=createSlice({
    name:'access',
    initialState,
    reducers:{
        setAccess(state,action: PayloadAction<Partial<AccessState>>){
            return {...state,...action.payload}
        }
    }
  })

  export function useAccessAction(){
    return {...accessSlice.actions}
  }

  export default accessSlice.reducer;
  