import { useTranslate } from '@sugar/locales';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SectionHeader from './auth-title';
import useQRCode from '../../hooks/useQrCode';
import { SugarButton, SugarLabel } from '@sugar/@core/ui-kit/shadcn-ui';

const QrCodeLoginColumn = styled.div`
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

const QrCodeColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const QrCodeImg = styled.img`
  width: 50%;
`;

const QrCodeLoginContainer = (props: any) => {
  const t = useTranslate('');
  const navigate = useNavigate();

  const qrCodeSrc = useQRCode('TestQrCode');
  const handleGoBack = () => {
    navigate(-1); // 返回到历史记录中的前一个条目
  };

  return (
    <QrCodeLoginColumn>
      <SectionHeader
        title={`${t('authentication.welcomeBack')}📲`}
        description={t('authentication.qrcodeSubtitle')}
      />
      <Space></Space>
      <QrCodeColumnWrapper>
        <QrCodeImg src={qrCodeSrc}></QrCodeImg>
        <Space></Space>
        <SugarLabel>{`${t('authentication.qrcodePrompt')}`}</SugarLabel>
      </QrCodeColumnWrapper>
      <Space></Space>
      <SugarButton variant="outline" style={{ width: '100%' }}
        onClick={handleGoBack}
      >
        {t('common.back')}
      </SugarButton>
    </QrCodeLoginColumn>
  );
};

export default QrCodeLoginContainer;
