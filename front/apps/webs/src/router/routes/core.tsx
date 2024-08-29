import AuthenticationPage from '@sugar/layout-ui/src/authentication/authentication';
import { Route } from 'react-router-dom';
import { routes } from 'router/routes';

export function FallbackNotFoundRoute() {
  return [<Route path={routes.notFound} element={<TextNotFound />}></Route>];
}

export function CoreRoutes() {
  return [
    <Route path={routes.root} element={<Root />}></Route>,
    <Route path={routes.auth} element={<AuthenticationPage />}></Route>
  ];
}

function TextNotFound() {
  return <div>未发现页面</div>;
}

function Root() {
  return <div>根页面</div>;
}

function Auth() {
  return <div>登录页</div>;
}


