import {
  MenuIcon,
  SugarButton,
  RefreshIcon
} from '@sugar/@core/ui-kit/shadcn-ui';
import { ReactNode, useMemo } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div``;

const BreadcrumbWrapper = styled.div`
  display: flex;
  align-items: center;
  display: block;
  
 
`;

const MenuSlot = styled.div`
  display: flex;
  height: 100%;
  min-width: 0px;
  flex: 1 1 0%;
  align-items: center;
`;

const RightSlot = styled.div`
  display: flex;
  height: 100%;
  min-width: 0px;
  flex-shrink: 0;
  align-items: center;
`;

interface Props {
  breadcrumb?: ReactNode;
  globalSearch?: ReactNode;
}

export const LayoutHeader = (props: Props) => {
  const {breadcrumb,globalSearch}=props
  const RefreshButton = useMemo(() => {
    return (
      <>
        <SugarButton
          variant="ghost-header"
          style={{ borderRadius: '8px', height: '2rem', width: '2rem', marginRight:'6px' }}
          size="icon"
        >
          <RefreshIcon></RefreshIcon>
        </SugarButton>

        <BreadcrumbWrapper>
          {breadcrumb}
        </BreadcrumbWrapper>
        <MenuSlot></MenuSlot>
      <RightSlot>
        {globalSearch??<></>}
      </RightSlot>
      </>
    );
  }, []);

  return <>{RefreshButton}</>;
};
