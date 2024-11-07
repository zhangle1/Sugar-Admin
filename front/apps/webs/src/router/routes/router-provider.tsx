import { RoutesContext } from '@sugar-core/preferences/src/routes/routes-context';
import { CoreRoutes, FallbackNotFoundRoute } from './core';
import { DashboardRoutes } from './modules/dashboard';
import { useDispatch } from 'react-redux';
import { PreferencesDispatch } from '@sugar-core/preferences/src/config';
import { useAccessAction } from '@sugar-core/preferences/src/slice';
import { useEffect } from 'react';
import { useMockData } from '@sugar/layout-ui/src/hooks/useMockData';

export const RoutesWrapper = ({ children }) => {
  const routesConfig = [
    ...CoreRoutes(),
    ...DashboardRoutes(),
    ...FallbackNotFoundRoute()
  ];
  const dispatch: PreferencesDispatch = useDispatch();
  const {setAccessMenus,setAccessRoutes}= useAccessAction();

  const  {menuItems}= useMockData()

  useEffect(()=>{
    dispatch(setAccessRoutes(routesConfig))
    dispatch(setAccessMenus(menuItems))
  },[])


  return (
    <RoutesContext.Provider value={routesConfig}>
      {children}
    </RoutesContext.Provider>
  );
};
