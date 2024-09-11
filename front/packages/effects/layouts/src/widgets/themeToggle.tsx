import Icon from '@ant-design/icons';
import { darkTheme, lightTheme, PreferencesDispatch, useThemeAction, useThemeSelector } from '@sugar/@core/preferences';
import {
  LayoutIcon,
  NightThemeIcon,
  PaletteIcon,
  SunThemeIcon
} from '@sugar/@core/ui-kit/antd-ui';
import { Button, Dropdown, MenuProps } from 'antd';
import { useDispatch } from 'react-redux';
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

  const theme= useThemeSelector()
  const dispatch: PreferencesDispatch = useDispatch();

  const {setMode,setThemePreferences}= useThemeAction()
  const toggleTheme=()=>{
      var _mode='light' as any;

      var _theme={...lightTheme,mode:'light'} as any
      if(theme.mode=='light'){
        _mode='dark'
        _theme={...darkTheme,mode:_mode}
      }else{
        _mode='light'
        _theme={...lightTheme,mode:_mode}

      }
      dispatch(setThemePreferences(_theme))
  }

  return (
    <ThemeContainer onClick={toggleTheme}>
      {theme.mode=='light'?
      <ButtonWrapper
        shape="circle"
        icon={
          <Icon
            component={SunThemeIcon as React.ForwardRefExoticComponent<any>}
          ></Icon>
        }
      ></ButtonWrapper>:(<></>)
      }
      {
      theme.mode=='dark'?
      <ButtonWrapper
        shape="circle"
        icon={
          <Icon
            component={NightThemeIcon as React.ForwardRefExoticComponent<any>}
          ></Icon>
        }
      ></ButtonWrapper>:(<div></div>)}
    </ThemeContainer>
  );
};

export default ThemeToggleContainer;
