import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import Icon, { CheckCircleOutlined } from '@ant-design/icons';
import { COLOR_PRESETS, PreferencesDispatch,  useThemeAction, useThemeSelector } from '@sugar/@core/preferences';
import { useDispatch } from 'react-redux';
import { PaletteIcon } from '@sugar/@core/ui-kit/antd-ui';

const Container = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;

  &:hover .child {
    width: 240px; /* 15rem 或 240px，取决于你想要的宽度 */
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 500ms;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
`;

const ColorContainer = styled.div`
  display: flex;
  width: 0px;
  overflow: hidden;
  justify-content: space-around;
`;

const ColorButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  border: none;
  background: transparent;
  display: inline-flex;
`;

const ColorCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px; // Adjust size-5
  height: 20px; // Adjust size-5
  border-radius: 50%;
  background-color: ${props => props.color};
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

const ColorPicker = (props: any) => {
  const theme = useThemeSelector();

  function convertHSLToHSLA(hsl, alpha) {
    // 检查传入的 HSL 字符串
    const hslPattern = /^hsl\(\s*(\d+)\s+(\d+)%\s+(\d+)%\s*\)$/;
    const match = hsl.match(hslPattern);

    if (!match) {
        throw new Error("Invalid HSL format");
    }
    debugger
    // 提取 HSL 的各个部分
    const hue = match[1];      // 色相
    const saturation = match[2]; // 饱和度
    const lightness = match[3];  // 明度

    // 构造带 alpha 通道的 HSL 字符串
    return `hsl(${hue} ${saturation}% ${lightness}% / ${alpha}%)`;
}


  
  const dispatch:PreferencesDispatch= useDispatch()
  const {setThemePreferences} = useThemeAction()
  const updateTheme=(key:string)=>{
    dispatch(setThemePreferences({
        builtinType:key,
        colorPrimary:COLOR_PRESETS.filter(src=>src.type==key)?.[0]?.color,
        menuItemsActiveColor:COLOR_PRESETS.filter(src=>src.type==key)?.[0]?.color,
        menuItemActiveHoverBg:convertHSLToHSLA(COLOR_PRESETS.filter(src=>src.type==key)?.[0]?.color,15),
    }))
  }

  return (
    <Container>
      <ColorContainer className="child">
        {COLOR_PRESETS.map(preset => (
          <ColorButton key={preset.color} onClick={() => updateTheme(preset.type)}>
            <ColorCircle color={preset.color}>
              {theme.builtinType == preset.type ? (
                <CheckCircleOutlined
                  style={{ color: 'white', fontSize: '1em' }}
                />
              ) : (
                <></>
              )}
            </ColorCircle>
          </ColorButton>
        ))}
      </ColorContainer>
      <ColorButton shape="circle" icon={<Icon component={PaletteIcon as React.ForwardRefExoticComponent<any>}></Icon>}>
      </ColorButton>
    </Container>
  );
};

export default ColorPicker;
