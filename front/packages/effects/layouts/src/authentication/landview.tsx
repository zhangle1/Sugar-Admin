import React from 'react';
import styled from 'styled-components';
// import SloganIcon from './SloganIcon'; // Adjust the import path as needed
import logo from '../../public/images/logo.svg'; // 根据你的文件结构调整路径

const Container = styled.div<{ authPanelCenter: boolean }>`
  position: relative;
  display: ${props => (props.authPanelCenter ? 'none' : 'flex')};
  width: 0;
  flex: 1;
  @media (min-width: 1024px) {
    display: block;
  }
`;

const Background = styled.div`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  background-color: #070709;
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 5rem;
  height: 100%;
  width: 100%;
  .animate-float {
    animation: float 3s infinite;
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const Image = styled.div`
  height: 16rem;
  width: 40%;
  background-image: url(${logo}); /* 使用导入的 SVG 文件路径 */
  background-size: contain; /* 使背景图像完全适应容器 */
  background-repeat: no-repeat; /* 不重复背景图像 */
  background-position: center; /* 背景图像居中对齐 */
`;

const Title = styled.div`
  font-size: 1.25rem;
  margin-top: 1.5rem;
  font-family: sans-serif;
  color: white;
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const Description = styled.div`
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.5rem;
`;

const LandView = ({
  appName,
  sloganImage,
  pageTitle,
  pageDescription,
  authPanelCenter
}: any) => (
  <Container authPanelCenter={authPanelCenter}>
    <Background>
      <Content>
        {<Image className="animate-float" />}
        <Title>{pageTitle || 'Default Page Title'}</Title>
        <Description>
          {pageDescription || 'Default Page Description'}
        </Description>
      </Content>
    </Background>
  </Container>
);

export default LandView;
