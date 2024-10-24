import { Provider } from 'react-redux';

import RootRoutes from './router/routes/index';
import preferencesStore from '@sugar-core/preferences/src/config';
import { ConfigProvider } from 'antd';
import { GlobalStyle } from 'GlobalStyle';
import { useEffect, useMemo } from 'react';
import { LocalesContext, LocalesManager } from '@sugar/locales';
import { appDesignerLocales } from 'locales';
import { LocalesWrapper } from 'LocalesWrapper';
import { RoutesWrapper } from 'router/routes/router-provider';
// import { RequestWrapper } from 'RequestWrapper';

function App() {
  return (
    <Provider store={preferencesStore}>
      {/* <RequestWrapper> */}
        <LocalesWrapper>
          <GlobalStyle>
            <RoutesWrapper>
            <RootRoutes></RootRoutes>
            </RoutesWrapper>
          </GlobalStyle>
        </LocalesWrapper>
      {/* </RequestWrapper> */}
    </Provider>
  );
}

export default App;
