import { useTranslate } from '@sugar/locales';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SectionHeader from './auth-title';
import {
    SugarButton,
  SugarCheckBox,
  SugarInput,
  SugarLabel
} from '@sugar/@core/ui-kit/shadcn-ui';

const RegisterColumn = styled.div`
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

const LoginLinkRowWrapper=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const defaultProps={
    loginPath:'/auth/login'

}

const RegisterContainer = (props: any) => {
  const t = useTranslate('');

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // 返回到历史记录中的前一个条目
  };

  const goLogin=()=>{
    navigate(defaultProps.loginPath)
  }

  return (
    <RegisterColumn>
      <SectionHeader
        title={`${t('authentication.createAnAccount')}🚀`}
        description={t('authentication.signUpSubtitle')}
      />
      <Space></Space>
      <SugarInput
        type="text"
        placeholder={t('authentication.username')}
        autoComplete="false"
      ></SugarInput>
      <Space></Space>
      <SugarInput
        type="password"
        placeholder={t('authentication.password')}
        autoComplete="false"
        needPasswordStrengthCheck={true}
      />
      <Space></Space>
      <SugarInput
        type="password"
        placeholder={t('authentication.confirmPassword')}
        autoComplete="fa
        lse"
      />
      <Space></Space>

      <CheckRowWrapper>
        <CheckWarpper>
          <SugarCheckBox name="agreePolicy"></SugarCheckBox>
          <SugarLabel style={{ marginLeft: '1rem',marginRight:'0.25rem' }} htmlFor="agreePolicy">
            {t('authentication.agree')}
          </SugarLabel>
          <SugarLabel variant="link" style={{marginRight:'0.25rem'}}>{t('authentication.privacyPolicy')}</SugarLabel>
          <SugarLabel  htmlFor="agreePolicy"style={{marginRight:'0.25rem'}}>
            &
          </SugarLabel>
          <SugarLabel variant="link">{t('authentication.terms')}</SugarLabel>
        </CheckWarpper>
      </CheckRowWrapper>

      <Space></Space>
      <SugarButton
   
          style={{ width: '100%' }}
        >
          {t('authentication.alreadyHaveAccount')}
        </SugarButton>
        <Space></Space>
        <LoginLinkRowWrapper>
        <SugarLabel style={{ marginLeft: '1rem',marginRight:'0.25rem' }} htmlFor="agreePolicy">
            {t('authentication.alreadyHaveAccount')}
          </SugarLabel>
          <SugarLabel
            onClick={goLogin}
          variant="link" style={{marginRight:'0.25rem'}}>{t('authentication.goToLogin')}</SugarLabel>
      

        </LoginLinkRowWrapper>
    </RegisterColumn>

  );
};

export default RegisterContainer;
