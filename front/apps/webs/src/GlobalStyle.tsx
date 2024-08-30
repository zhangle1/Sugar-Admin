import { COLOR_PRESETS } from '@sugar-core/preferences/src/constants';
import { useThemeSelector } from '@sugar-core/preferences/src/useSelector';
import { ConfigProvider } from 'antd';

export const GlobalStyle = ({ children }: any) => {
    const theme= useThemeSelector()
 
    return (<ConfigProvider
    theme={{
      token: {
    colorPrimary: COLOR_PRESETS?.filter(filter=>filter.type==theme.builtinType)?.[0]?.color??'default'

      }
    }}
  >{children}</ConfigProvider>);
};
