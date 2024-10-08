import AuthenticationLogin from '@sugar/common-ui/src/ui/authentication/login';
import useAuth from 'hooks/useAuth';

const LoginView = (props: any) => {
  const { authLogin, loading } = useAuth();
  const login = (values: any) => {

    authLogin(values)

  };

  return (
    <AuthenticationLogin
      onLogin={login}
      loading={loading.current}
    ></AuthenticationLogin>
  );
};

export default LoginView;
