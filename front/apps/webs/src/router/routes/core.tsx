import AuthenticationLogin from '@sugar/common-ui/src/ui/authentication/login';
import AuthenticationPage from '@sugar/layout-ui/src/authentication/authentication';
import { Route } from 'react-router-dom';
import { routes } from 'router/routes';
import ProtectedRoute from './project-router';
import FogetPasswordContainer from '@sugar/common-ui/src/ui/authentication/forget-password';
import CodeLoginContainer from '@sugar/common-ui/src/ui/authentication/code-login';
import QrCodeLoginContainer from '@sugar/common-ui/src/ui/authentication/qr-code-login';
import RegisterContainer from '@sugar/common-ui/src/ui/authentication/register';


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
      <Route path="code-login" element={<CodeLoginContainer />} />
      <Route path="qrcode-login" element={<QrCodeLoginContainer />} />
      <Route path="register" element={<RegisterContainer />} />
    </Route>
  ];
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


