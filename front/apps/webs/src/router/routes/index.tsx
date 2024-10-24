import { Routes, useRoutes } from 'react-router-dom';
import { CoreRoutes, FallbackNotFoundRoute } from './core';
import { useRequestClientBuilder } from 'api/request';
import { useEffect } from 'react';
import { useRequestManager } from 'api';
import { DashboardRoutes } from './modules/dashboard';
import { useRoutesConfig } from '@sugar-core/preferences/src/routes/routes-context';

export default function RootRoutes() {
  const client = useRequestManager();

  // const routesConfig = [
  //   ...CoreRoutes(),
  //   ...DashboardRoutes(),
  //   ...FallbackNotFoundRoute()
  // ];

   const RouteContext= useRoutesConfig() as any

  // console.log(RouteContext)
  const element = useRoutes(RouteContext);
  // 找到当前路由信息
  const currentRoute = RouteContext.find(
    route => route.path === location.pathname
  );
  useEffect(() => {
    client?.post('auth/login', {
      username: 'user1',
      password: 'password1'
    });
  }, []);

  return <>{element}</>;
}
