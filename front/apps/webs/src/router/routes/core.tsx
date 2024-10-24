import AuthenticationLogin from '@sugar/common-ui/src/ui/authentication/login';
import AuthenticationPage from '@sugar/layout-ui/src/authentication/authentication';
import { Route } from 'react-router-dom';
import { routes } from 'router/routes';
import ProtectedRoute from './project-router';
import FogetPasswordContainer from '@sugar/common-ui/src/ui/authentication/forget-password';
import CodeLoginContainer from '@sugar/common-ui/src/ui/authentication/code-login';
import QrCodeLoginContainer from '@sugar/common-ui/src/ui/authentication/qr-code-login';
import RegisterContainer from '@sugar/common-ui/src/ui/authentication/register';
import LoginView from 'views/_core/authentication/login';


// export function FallbackNotFoundRoute() {
//   return [<Route path={routes.notFound} element={<TextNotFound />}></Route>];
// }

 export const FallbackNotFoundRoute = () => {
  return [{ path: routes.notFound, element: <TextNotFound />, name: 'Not Found' }];
};

// export function CoreRoutes() {
//   return [
//     // <Route path={routes.root} element={<ProtectedRoute />}></Route>,

//     <Route path={routes.auth} element={<AuthenticationPage />}>
//       <Route path="login" element={<LoginView />} />
//       <Route path="forget-password" element={<FogetPasswordContainer />} />
//       <Route path="code-login" element={<CodeLoginContainer />} />
//       <Route path="qrcode-login" element={<QrCodeLoginContainer />} />
//       <Route path="register" element={<RegisterContainer />} />
//     </Route>
//   ];
// }

export const CoreRoutes = () => {
  return [
    {
      path: routes.auth,
      element: <AuthenticationPage />,
      name: 'Auth',
      children: [
        { path: 'login', element: <LoginView />, name: 'Login' },
        { path: 'forget-password', element: <FogetPasswordContainer />, name: 'Forget Password' },
        { path: 'code-login', element: <CodeLoginContainer />, name: 'Code Login' },
        { path: 'qrcode-login', element: <QrCodeLoginContainer />, name: 'QR Code Login' },
        { path: 'register', element: <RegisterContainer />, name: 'Register' }
      ]
    }
  ];
};



function TextNotFound() {
  return <div>未发现页面</div>;
}


function Auth() {
  return <div>登录页</div>;
}


