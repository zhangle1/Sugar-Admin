// import { useAppSelector } from '@sugar-core/preferences';
// import { LocalesContext, LocalesManager } from '@sugar/locales';
import { useAppSelector } from '@sugar-core/preferences/src/useSelector';
import { LocalesManager } from '@sugar/locales/src/classes/LocalesManager';
import { LocalesContext } from '@sugar/locales/src/contexts';
import { appDesignerLocales } from 'locales';
import { useEffect, useMemo } from 'react';

export const LocalesWrapper = ({ children }: any) => {
  const app = useAppSelector();
  const localesManger = useMemo(
    () => new LocalesManager(app.locale),
    [app.locale]
  );

  useEffect(() => {
    localesManger.registerLocales(appDesignerLocales);
  }, [localesManger]);

  return (
    <LocalesContext.Provider value={localesManger}>
      {children}
    </LocalesContext.Provider>
  );
};
