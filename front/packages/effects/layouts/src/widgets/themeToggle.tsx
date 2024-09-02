import Icon from '@ant-design/icons';
import {
  LayoutIcon,
  NightThemeIcon,
  PaletteIcon,
  SunThemeIcon
} from '@sugar/@core/ui-kit/antd-ui';
import { Button, Dropdown, MenuProps } from 'antd';
import styled from 'styled-components';

const ThemeContainer = styled.div`
  display: flex;
  height: 100%;
`;

const ButtonWrapper = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  border: none;
  background: transparent;
  display: inline-flex;
`;

const ThemeToggleContainer = (props: any) => {
  return (
    <ThemeContainer>
      <ButtonWrapper
        shape="circle"
        icon={
          <Icon
            component={SunThemeIcon as React.ForwardRefExoticComponent<any>}
          ></Icon>
        }
      ></ButtonWrapper>

      {/* <ButtonWrapper
        shape="circle"
        icon={
          <Icon
            component={NightThemeIcon as React.ForwardRefExoticComponent<any>}
          ></Icon>
        }
      ></ButtonWrapper> */}
    </ThemeContainer>
  );
};

export default ThemeToggleContainer;
