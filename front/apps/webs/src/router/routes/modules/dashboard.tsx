import { Route } from 'react-router-dom';
import ProtectedRoute from '../project-router';
import { routes } from 'router/routes';
import BasicView from 'layout/basic';
import {
  useMockData,
  useRouteHelper
} from '@sugar/layout-ui/src/hooks/useMockData';

export const DashboardRoutes = () => {
  const { menuItems } = useMockData();
  const { findPath, getLeafNodes } = useRouteHelper();

  const routePathList = getLeafNodes(menuItems).map(src => ({
    path: findPath(menuItems, src.key),
    name: src.label,
    icon:src?.icon,
    element: <Test name={src.label} />
  }));

  return [
    {
      path: routes.root,
      element: <ProtectedRoute element={<BasicView />} />,
      children: routePathList
    }
  ];
};

const Test = (props: any) => {
  return <div>{props?.name ?? ''}</div>;
};
