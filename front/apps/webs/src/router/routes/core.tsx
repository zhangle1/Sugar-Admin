import AuthenticationLogin from '@sugar/common-ui/src/ui/authentication/login';
import AuthenticationPage from '@sugar/layout-ui/src/authentication/authentication';
import { Route } from 'react-router-dom';
import { routes } from 'router/routes';
import ProtectedRoute from './project-router';
import FogetPasswordContainer from '@sugar/common-ui/src/ui/authentication/forget-password';


export function FallbackNotFoundRoute() {
  return [<Route path={routes.notFound} element={<TextNotFound />}></Route>];
}

export function CoreRoutes() {
  return [
    // <Route path={routes.root} element={<ProtectedRoute />}></Route>,
    <Route path={routes.root} element={<ProtectedRoute  element={<Root></Root>}/>}></Route>,
    <Route path={routes.auth} element={<AuthenticationPage />}>
      <Route path="login" element={<AuthenticationLogin />} />
      <Route path="forget-password" element={<FogetPasswordContainer />} />
      <Route path="register" element={<Register />} />
    </Route>
  ];
}



function Register(){
  return <div>注册</div>
}

function TextNotFound() {
  return <div>未发现页面</div>;
}

const Root = () => {
  return <div>根页面</div>;
};

function Auth() {
  return <div>登录页</div>;
}


