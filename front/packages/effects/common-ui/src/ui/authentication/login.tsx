import { useTranslate } from '@sugar/locales';
import { AuthenticationProps } from './types';
import SectionHeader from './auth-title';
import styled from 'styled-components';
import {
  SugarCheckBox,
  SugarInput,
  SugarLabel
} from '@sugar/@core/ui-kit/shadcn-ui';
import {
  getColorPrimary,
  getColorPrimaryHover
} from '@sugar/@core/preferences';
import { SugarButton } from 'packages/@core/ui-kit/shadcn-ui/src/components/button/button';
import ThirdPartyLogin from './third-part-login';
import { useNavigate } from 'react-router-dom';

const LoginColumn = styled.div`
  margin-top: 1.5rem; /* mt-6 对应的 CSS 是 margin-top: 1.5rem */
  width: 100%;

  @media (min-width: 640px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 768px) {
    max-width: 28rem; /* md:max-w-md 对应的 CSS 是 max-width: 28rem */
  }
`;

const Space = styled.div`
  margin-bottom: 1rem;
`;

const CheckRowWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const CheckWarpper = styled.div`
  display: flex;
  align-items: center;
`;

const LinkLabel = styled.span`
  color: ${p => getColorPrimary(p.theme)};
  font-size: 0.875rem;
  line-height: 1.25rem;
  cursor: pointer;
  :hover {
    color: ${p => getColorPrimaryHover(p.theme)};
  }
`;

const OhterLoginWarpper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const RegisterRowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const defaultProps = {
  codeLoginPath: '/auth/code-login',
  forgetPasswordPath: '/auth/forget-password',
  loading: false,
  passwordPlaceholder: '',
  qrCodeLoginPath: '/auth/qrcode-login',
  registerPath: '/auth/register',
  showCodeLogin: true,
  showForgetPassword: true,
  showQrcodeLogin: true,
  showRegister: true,
  showRememberMe: true,
  showThirdPartyLogin: true,
  subTitle: '',
  title: '',
  usernamePlaceholder: ''
};

const AuthenticationLogin = (props: AuthenticationProps) => {
  const { title, forgetPasswordPath,onLogin } = { ...props };
  const t = useTranslate('authentication');
  const commonT = useTranslate('');
  const navigate = useNavigate();
  const handleGo = (path: string) => {
    navigate(path);
  };

  // $t('authentication.welcomeBack')
  return (
    <LoginColumn>
      <SectionHeader
        title={`${t('welcomeBack')}👋🏻`}
        description={t('loginSubtitle')}
      />
      <SugarInput
        type="text"
        placeholder={t('username')}
        autoComplete="false"
      />
      <Space></Space>
      <SugarInput
        type="password"
        placeholder={t('password')}
        autoComplete="false"
      />
      <Space></Space>
      <CheckRowWrapper>
        <CheckWarpper>
          <SugarCheckBox name="rememberMe"></SugarCheckBox>
          <SugarLabel style={{ marginLeft: '1rem' }} htmlFor="remeberMe">
            {t('rememberMe')}
          </SugarLabel>
        </CheckWarpper>
        <LinkLabel onClick={() => handleGo(defaultProps.forgetPasswordPath)}>
          {t('forgetPassword')}
        </LinkLabel>
      </CheckRowWrapper>
      <Space></Space>
      <SugarButton style={{ width: '100%' }}
        onClick={()=>{
          onLogin?.()
        }}
      >
        {commonT('common.login')}
      </SugarButton>
      <Space></Space>
      <OhterLoginWarpper>
        <SugarButton
          onClick={() => {
            handleGo(defaultProps.codeLoginPath);
          }}
          variant="outline"
          style={{ width: '50%' }}
        >
          {t('mobileLogin')}
        </SugarButton>
        <SugarButton
          variant="outline"
          onClick={() => {
            handleGo(defaultProps.qrCodeLoginPath);
          }}
          style={{ width: '50%', marginLeft: '1rem' }}
        >
          {t('qrcodeLogin')}
        </SugarButton>
      </OhterLoginWarpper>
      <Space></Space>
      <ThirdPartyLogin></ThirdPartyLogin>
      <Space></Space>
      <RegisterRowWrapper>
        <SugarLabel style={{ marginLeft: '1rem' }}>
          {t('accountTip')}
        </SugarLabel>
        <LinkLabel style={{ marginLeft: '0.25rem' }}
            onClick={() => {
              handleGo(defaultProps.registerPath);
            }}
        >
          {t('createAccount')}
        </LinkLabel>
      </RegisterRowWrapper>
    </LoginColumn>
  );
};

export default AuthenticationLogin;
