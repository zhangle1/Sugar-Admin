import { useEffect, Ref } from 'react';
import {
  authenticateResponseInterceptor,
  RequestClient
} from '@sugar/request/index';
import { useAppConfig } from '@sugar/hooks/index';
import { getLocale, setToken } from 'utils/local-strage-utils';
import { useNavigate } from 'react-router-dom';
import { routes } from 'router/routes';
import { refreshTokenApi } from './core';

const { apiURL } = useAppConfig();

function createRequestClient(baseURL: string) {
  const client = new RequestClient({
    baseURL: apiURL
  });

  async function doReAuthenticate() {
    console.warn('Access token or refresh token is invalid or expired. ');
    setToken(null);
  }

  async function doRefreshToken() {
    const resp = await refreshTokenApi();
    const newToken = resp.data;
    setToken(newToken);

    return newToken;
  }

  function formatToken(token: null | string) {
    return token ? `Bearer ${token}` : null;
  }

  client.addRequestInterceptor({
    fulfilled: async config => {
      const locale = getLocale();

      config.headers.Authorization = formatToken(locale);
      config.headers['Accept-Language'] = locale;
      return config;
    }
  });

  // response数据解构
  client.addResponseInterceptor({
    fulfilled: response => {
      const { data: responseData, status } = response;

      const { code, data, message: msg } = responseData;
      if (status >= 200 && status < 400 && code === 0) {
        return data;
      }
      throw new Error(`Error ${status}: ${msg}`);
    }
  });

  // token过期的处理
  client.addResponseInterceptor(
    authenticateResponseInterceptor({
      client,
      doReAuthenticate,
      doRefreshToken,
      enableRefreshToken: true,
      formatToken
    })
  );

  return client;
}

export const requestClient = createRequestClient(apiURL);

export const baseRequestClient = new RequestClient({ baseURL: apiURL });
