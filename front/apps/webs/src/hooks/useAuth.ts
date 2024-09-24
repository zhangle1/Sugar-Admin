import { resetPreferencesStore } from '@sugar-core/preferences/src/action/reset-action';
import { useDispatch } from 'react-redux';
import { PreferencesDispatch } from '@sugar-core/preferences/src/config';
import {
  useAccessAction,
  useUserAction
} from '@sugar-core/preferences/src/slice';
import { useNavigate } from 'react-router-dom';
import { routes } from 'router/routes';
import { getAccessCodesApi, loginApi, logoutApi } from 'api/core/auth';
import { LoginAndRegisterParams } from '@sugar/common-ui';
import { setToken } from 'utils/local-strage-utils';

import { getUserInfoApi } from 'api/core/user';
import { useRef, useState } from 'react';
import { UserInfo } from '@sugar-core/types';

const useAuth = () => {
  const dispatch: PreferencesDispatch = useDispatch();
  const navigate = useNavigate();
  const { setLoginExpired, setAccessToken,setAccessCodes } = useAccessAction();
  const { setUser } = useUserAction();


  const loading = useRef(false);
  const authLogin = async (
    params: LoginAndRegisterParams,
    onSuccess?: () => Promise<void> | void
  ) => {
    // 异步处理用户登录操作并获取 accessToken
    let userInfo: null | UserInfo = null;

    try {
      loading.current = true;
      const { accessToken } = await loginApi(params);

      if (accessToken) {
        setToken(accessToken);
        dispatch(setAccessToken(accessToken));

        // 获取用户信息并存储到 accessStore 中
        const [fetchUserInfoResult, accessCodes] = await Promise.all([
          fetchUserInfo(),
          getAccessCodesApi()
        ]);

        userInfo = fetchUserInfoResult;
        
        dispatch(setUser(userInfo));
        dispatch(setAccessCodes(accessCodes))

        onSuccess?await onSuccess?.():navigate(routes.defaultHome)

      }
    } finally {
      loading.current = false;
    }
  };

  async function fetchUserInfo() {
    let userInfo: null | UserInfo = null;
    userInfo = await getUserInfoApi();
    dispatch(setUser(userInfo));

    return userInfo;
  }
  const logout = async (redirect: boolean = true) => {
    await logoutApi();
    dispatch(resetPreferencesStore());
    dispatch(setLoginExpired(false));
    navigate(routes.authLogin);
  };

  return {
    logout,
    authLogin,
    loading
  };
};

export default useAuth;
