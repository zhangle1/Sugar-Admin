import styled from 'styled-components';
import Toolbar from './toolbar';
import { Outlet } from 'react-router-dom';
import { ThemePreferences } from '@sugar/@core/preferences';

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  background-color: ${props => props.theme.backgroundDeep};
  position: relative;
  padding: 10px 6px; /* 10px top and bottom, 6px left and right */
  @media (min-width: 1024px) {
    flex: 0 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;




const LoginFormView = ({ authPanelRight }: any) => {
  return <LoginFormContainer>
    <Toolbar></Toolbar>
    <Outlet></Outlet>
  </LoginFormContainer>;
};

export default LoginFormView;
