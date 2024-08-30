import { Provider } from 'react-redux';

import RootRoutes from './router/routes/index';
import preferencesStore from '@sugar-core/preferences/src/config';
import { ConfigProvider } from 'antd';
import { useThemeSelector } from '@sugar-core/preferences';
import { GlobalStyle } from 'GlobalStyle';

function App() {
  return (
    <Provider store={preferencesStore}>
      <GlobalStyle>
        <RootRoutes></RootRoutes>
      </GlobalStyle>
    </Provider>
  );
}

export default App;
