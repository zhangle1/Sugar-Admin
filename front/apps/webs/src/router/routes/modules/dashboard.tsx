import { Route } from 'react-router-dom';
import ProtectedRoute from '../project-router';
import { routes } from 'router/routes';
import BasicView from 'layout/basic';

export function DashboardRoutes() {
  return [
    <Route
      path={routes.root}
      element={<ProtectedRoute element={<BasicView></BasicView>} />}
    ></Route>
  ];
}

const Root = () => {
  return <div>根页面</div>;
};
