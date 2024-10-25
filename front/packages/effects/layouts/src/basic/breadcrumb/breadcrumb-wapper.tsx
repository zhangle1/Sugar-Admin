import { useRoutesConfig } from '@sugar/@core/preferences';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@sugar/@core/ui-kit/shadcn-ui';
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';
import { useMockData, useRouteHelper } from '../../hooks/useMockData';
import React from 'react';

interface Props {
  onItemClick?: Function



}

const BreadCrumbWrapper = (props: Props) => {

     const {onItemClick}= props

  const location = useLocation();

  const routes = useRoutesConfig() as any;

  const { findPath, parseLocationToBreadcrumbsItems, findFirstLeafChild } =
    useRouteHelper();
  // const navigate = useNavigate();
  const items = parseLocationToBreadcrumbsItems(location.pathname, routes);
  const { menuItems } = useMockData();
  const jumpToTargetMenu = (item: any) => {
    var firstNode = findFirstLeafChild(menuItems, item?.key);
    const targetPath = findPath(menuItems, firstNode?.key);
    console.log("firstNode?.key:"+firstNode?.key)
    // navigate(routeKey);
    onItemClick?.(targetPath,firstNode?.key)
  };

  const breadcrumbComponent = (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => {
          var noDeepLevel = index < items.length - 1;

          return (
            <React.Fragment key={index}>
              <BreadcrumbItem noDeepLevel={noDeepLevel}
                onClick={() => {
                  if (noDeepLevel) jumpToTargetMenu(item);
                }}
              >
                <BreadcrumbLink>{item?.label}</BreadcrumbLink>
              </BreadcrumbItem>
              {/* 只有在不是最后一个元素时才渲染 BreadcrumbSeparator */}
              {noDeepLevel && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );

  return breadcrumbComponent;
};

export default BreadCrumbWrapper;
