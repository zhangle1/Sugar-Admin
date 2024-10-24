import { RoutesContext } from '@sugar-core/preferences/src/routes/routes-context';
import { CoreRoutes, FallbackNotFoundRoute } from './core';
import { DashboardRoutes } from './modules/dashboard';

export const RoutesWrapper = ({ children }) => {
  const routesConfig = [
    ...CoreRoutes(),
    ...DashboardRoutes(),
    ...FallbackNotFoundRoute()
  ];

  return (
    <RoutesContext.Provider value={routesConfig}>
      {children}
    </RoutesContext.Provider>
  );
};
