import { useTranslate } from '@sugar/locales';
import { AuthenticationProps } from './types';
import SectionHeader from './auth-title';
import { SugarInput } from '../../components/input';
import styled from 'styled-components';


const LoginColumn=styled.div`
  margin-top: 1.5rem; /* mt-6 对应的 CSS 是 margin-top: 1.5rem */
  width: 100%;
  
  @media (min-width: 640px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 768px) {
    max-width: 28rem; /* md:max-w-md 对应的 CSS 是 max-width: 28rem */
  }

`

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
        name="admin"
        errorTip={t('usernameTip')}
        label={t('username')}
        status="default"
      ></SugarInput>
    </LoginColumn>
  );
};

export default AuthenticationLogin;
