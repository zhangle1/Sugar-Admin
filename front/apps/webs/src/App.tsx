import { Provider } from 'react-redux';

import RootRoutes from './router/routes/index';
import preferencesStore from '@sugar-core/preferences/src/config';
import { ConfigProvider } from 'antd';
import { useThemeSelector } from '@sugar-core/preferences';
import { GlobalStyle } from 'GlobalStyle';
import { useEffect, useMemo } from 'react';
import { LocalesContext, LocalesManager } from '@sugar/locales';
import { appDesignerLocales } from 'locales';
import { LocalesWrapper } from 'LocalesWrapper';

function App() {
  return (
    <Provider store={preferencesStore}>
      <LocalesWrapper>
        <GlobalStyle>
          <RootRoutes></RootRoutes>
        </GlobalStyle>
      </LocalesWrapper>
    </Provider>
  );
}

export default App;
