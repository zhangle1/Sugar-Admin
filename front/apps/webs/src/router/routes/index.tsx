import { Routes } from 'react-router-dom';
import { CoreRoutes, FallbackNotFoundRoute } from './core';
import { useRequestClientBuilder } from 'api/request';
import { useEffect } from 'react';
import { useRequestManager } from 'api';

export default function RootRoutes() {
  const client = useRequestManager();

  useEffect(() => {
    client?.post('auth/login', {
      username: 'user1',
      password: 'password1'
    });
  }, []);

  return (
    <Routes>
      {...FallbackNotFoundRoute()}
      {...CoreRoutes()}
    </Routes>
  );
}
