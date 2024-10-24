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

interface Props {
  breadcrumb?: ReactNode;
}

export const LayoutHeader = (props: Props) => {
  const {breadcrumb}=props
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
      </>
    );
  }, []);

  return <>{RefreshButton}</>;
};
