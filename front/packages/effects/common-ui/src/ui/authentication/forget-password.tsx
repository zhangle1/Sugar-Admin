import styled from 'styled-components';
import SectionHeader from './auth-title';
import { useTranslate } from '@sugar/locales';
import { SugarButton, SugarInput } from '@sugar/@core/ui-kit/shadcn-ui';
import { useNavigate } from 'react-router-dom';

const ForgetColumn = styled.div`
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

const FogetPasswordContainer = (props: any) => {
  const t = useTranslate('authentication');
  const commonT = useTranslate('');

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // 返回到历史记录中的前一个条目
  };
  return (
    <ForgetColumn>
      <SectionHeader
        title={`${t('forgetPassword')}🤦🏻‍♂️`}
        description={t('forgetPasswordSubtitle')}
      />
      <Space></Space>
      <SugarInput
        type="text"
        placeholder={'example@example.com'}
        autoComplete="false"
      />
      <Space></Space>
      <SugarButton style={{ width: '100%' }}>
        {t('sendResetLink')}
      </SugarButton>
      <Space></Space>
      <SugarButton variant="outline" style={{ width: '100%' }}
        onClick={handleGoBack}
      >
        {commonT('common.back')}
      </SugarButton>
    </ForgetColumn>
  );
};

export default FogetPasswordContainer;