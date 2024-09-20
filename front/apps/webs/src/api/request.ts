import { useEffect, Ref } from 'react';
import {RequestClient}  from '@sugar/request/index'
import{useAppConfig}  from '@sugar/hooks/index';

export function useRequestClientBuilder() {
  const { apiURL } = useAppConfig();
  const client = new RequestClient({
    baseURL: apiURL
  });
  useEffect(() => {}, [apiURL]);
  return {client}
}
