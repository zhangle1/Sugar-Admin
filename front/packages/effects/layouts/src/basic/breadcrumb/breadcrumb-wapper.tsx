import { useRoutesConfig } from '@sugar/@core/preferences';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@sugar/@core/ui-kit/shadcn-ui';
import { useLocation, useRoutes } from 'react-router-dom';
import { findPath, useMockData, useRouteHelper } from '../../hooks/useMockData';
import React from 'react';

interface Props {}

const BreadCrumbWrapper = (props: Props) => {
  const location = useLocation();

  const routes = useRoutesConfig() as any;
  // const element = useRoutes(routes);
  //   const currentRoute = routes.find(route => route.path === location.pathname);
  //   console.log("currentRoute:"+JSON.stringify(currentRoute))
  const { parseLocationToBreadcrumbsItems } = useRouteHelper();

  //    const breadCrumPathList= extractBreadcrumbs(location.pathname)
  const items = parseLocationToBreadcrumbsItems(location.pathname, routes);

    const {menuItems}= useMockData()

  const breadcrumbComponent = (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink >{item?.label}</BreadcrumbLink>
              </BreadcrumbItem>
              {/* 只有在不是最后一个元素时才渲染 BreadcrumbSeparator */}
              {index < items.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );

  return breadcrumbComponent;
};

export default BreadCrumbWrapper;
