import styled from 'styled-components';
import LandView from './landview';

const AuthContainer = styled.div`
  display: flex;
  min-height: 100%;
  flex: 1;
  user-select: none;
  overflow-x: hidden;
`;

const Panel = styled.div<{
  authPanelRight: boolean;
}>`
  color: ${props => (props.authPanelRight ? 'white' : 'var(--foreground)')};
  margin-left: 1rem;

  display: flex;
  flex: 1;
  align-items: center;
  position: relative;
  left: 1.5rem;
  z-index: 999;
  @media (min-width: 640px) {
    position: absolute;
    left: 1rem;
  }
`;

const Logo = styled.img`
  margin-right: 0.5rem;
  width: 42px;
`;

const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
`;

function AuthenticationPage() {
  const authPanelRight = true;
  const appName = 'Sugar Admin';
  const logoSource =
    'https://unpkg.com/@vbenjs/static-source@0.1.6/source/logo-v1.webp';

  const pageTitle = '开箱即用的中后台管理系统';
  const authPanelCenter = false;
  const pageDescription = '工程化、高性能、跨组件库的前端模版';

  return (
    <AuthContainer>
      <Panel authPanelRight={authPanelRight}>
        <Logo src={logoSource} alt={appName} />
        <Title>{appName}</Title>
      </Panel>
      <LandView
        appName={appName}
        pageTitle={pageTitle}
        authPanelCenter={authPanelCenter}
        pageDescription={pageDescription}
      ></LandView>
    </AuthContainer>
  );
}

export default AuthenticationPage;
