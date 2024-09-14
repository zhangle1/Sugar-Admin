import { useTranslate } from '@sugar/locales';
import styled from 'styled-components';
import SectionHeader from './auth-title';
import {
    REGEXP_ONLY_DIGITS_AND_CHARS,
  SugarButton,
  SugarInput,
  SugarInputOTP,
  SugarInputOTPGroup,
  SugarInputOTPSlot,
  SugarLabel
} from '@sugar/@core/ui-kit/shadcn-ui';
import { useNavigate } from 'react-router-dom';

const CodeLoginColumn = styled.div`
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

const GetCodeRowWapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const CodeLoginContainer = (props: any) => {
  const t = useTranslate('');
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // 返回到历史记录中的前一个条目
  };
  return (
    <CodeLoginColumn>
      <SectionHeader
        title={`${t('authentication.welcomeBack')}📲`}
        description={t('authentication.codeSubtitle')}
      />
      <Space></Space>
      <SugarInput
        type="number"
        placeholder={t('authentication.mobile')}
        autoComplete="false"
      />
      <Space></Space>

      <SugarLabel style={{ width: '100%' }}>
        {t('authentication.code')}
      </SugarLabel>

      <Space></Space>
      <GetCodeRowWapper>
      <SugarInputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
      <SugarInputOTPGroup>
        <SugarInputOTPSlot index={0} />
        <SugarInputOTPSlot index={1} />
        <SugarInputOTPSlot index={2} />
        <SugarInputOTPSlot index={3} />
      </SugarInputOTPGroup>
    </SugarInputOTP>


        <SugarButton
          variant="outline"
          style={{ flex:'1', marginLeft: '0.5rem' }}
        >
          {t('authentication.sendCode')}
        </SugarButton>
      </GetCodeRowWapper>
      <Space></Space>
      <SugarButton style={{ width: '100%' }}>{t('common.login')}</SugarButton>
      <Space></Space>
      <SugarButton
        variant="outline"
        style={{ width: '100%' }}
        onClick={handleGoBack}
      >
        {t('common.back')}
      </SugarButton>
    </CodeLoginColumn>
  );
};

export default CodeLoginContainer;
