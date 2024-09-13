import {
  GithubSugarIcon,
  MaYunSugarIcon,
  QQSugarIcon,
  WeiXinSugarIcon
} from '@sugar/@core/ui-kit/shadcn-ui';
import { useTranslate } from '@sugar/locales';
import { SugarButton } from 'packages/@core/ui-kit/shadcn-ui/src/components/button/button';
import React from 'react';
import styled from 'styled-components';

// 定义样式
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 28rem; // md:max-w-md equivalent
`;

const Divider = styled.span`
  border-bottom: 1px solid ${p => p.theme.inputBorderColor}; // 根据实际颜色调整
  width: 35%;
  display: block;
`;

const Header = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderText = styled.span`
  color: var(--text-muted-foreground, #6b6b6b); // 根据实际颜色调整
  text-align: center;
  text-transform: uppercase;
  font-size: 0.75rem; // text-xs equivalent
`;

const IconContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const IconButton = styled.button`
  margin-bottom: 0.75rem; // mb-3 equivalent
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem; // 根据实际需要调整
`;

// React 组件
const ThirdPartyLogin = () => {
  const t = useTranslate();

  return (
    <Container>
      <Header>
        <Divider />
        <HeaderText>{t('authentication.thirdPartyLogin')}</HeaderText>
        <Divider />
      </Header>

      <IconContainer>
        <SugarButton
          variant="ghost"
          style={{ borderRadius: '9999px' }}
          size="icon"
        >
          <WeiXinSugarIcon></WeiXinSugarIcon>
        </SugarButton>
        <SugarButton
          variant="ghost"
          style={{ borderRadius: '9999px' }}
          size="icon"
        >
          <QQSugarIcon></QQSugarIcon>
        </SugarButton>
        <SugarButton
          variant="ghost"
          style={{ borderRadius: '9999px' }}
          size="icon"
        >
          <GithubSugarIcon></GithubSugarIcon>
        </SugarButton>
        <SugarButton
          variant="ghost"
          style={{ borderRadius: '9999px' }}
          size="icon"
        >
          <MaYunSugarIcon></MaYunSugarIcon>
        </SugarButton>
        {/* <IconButton>
          <MdiWechat />
        </IconButton>
        <IconButton>
          <MdiQqchat />
        </IconButton>
        <IconButton>
          <MdiGithub />
        </IconButton>
        <IconButton>
          <MdiGoogle />
        </IconButton> */}
      </IconContainer>
    </Container>
  );
};

export default ThirdPartyLogin;
