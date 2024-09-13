import { useTranslate } from '@sugar/locales';
import { AuthenticationProps } from './types';
import SectionHeader from './auth-title';
import styled from 'styled-components';
import { SugarCheckBox, SugarInput,SugarLabel } from '@sugar/@core/ui-kit/shadcn-ui';

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

const CheckWarpper = styled.div`
  display: flex;
  align-items: center;
`;

const AuthenticationLogin = (props: AuthenticationProps) => {
  const { title } = props;
  const t = useTranslate('authentication');
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

      <CheckWarpper>
        <SugarCheckBox name='rememberMe' ></SugarCheckBox>
        <SugarLabel style={{marginLeft:'5px'}} htmlFor='remeberMe'>{t('rememberMe')}</SugarLabel>
    
      </CheckWarpper>
    </LoginColumn>
  );
};

export default AuthenticationLogin;
