import { COLOR_PRESETS } from '@sugar-core/preferences/src/constants';
import { useThemeSelector } from '@sugar-core/preferences/src/useSelector';
import { ConfigProvider, theme } from 'antd';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export const GlobalStyle = ({ children }: any) => {
  const themeSetting = useThemeSelector();

  return (
    <ConfigProvider
      theme={{
        algorithm: themeSetting.mode === "dark" ? theme.darkAlgorithm : undefined,
        token: {
          colorPrimary:
            COLOR_PRESETS?.filter(
              filter => filter.type == themeSetting.builtinType
            )?.[0]?.color ?? 'default'
        }
      }}
    >
      <StyledThemeProvider theme={themeSetting}>{children}</StyledThemeProvider>
    </ConfigProvider>
  );
};
