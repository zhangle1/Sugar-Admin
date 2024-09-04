import Icon from '@ant-design/icons';
import {
  PreferencesDispatch,
  useAppAction,
  useAppSelector
} from '@sugar/@core/preferences';
import { LayoutIcon, PaletteIcon } from '@sugar/@core/ui-kit/antd-ui';
import { Button, Dropdown, MenuProps } from 'antd';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const ButtonWrapper = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  border: none;
  background: transparent;
  display: inline-flex;
`;

const LayoutToggleContainer = (props: any) => {
  const items: MenuProps['items'] = [
    {
      key: 'panel-left',
      label: '居左'
    },
    {
      key: 'panel-center',
      label: '居中'
    },
    {
      key: 'panel-right',
      label: '居右'
    }
  ];

  const app = useAppSelector();

  const dispatch: PreferencesDispatch = useDispatch();
  const { setAppPreferences } = useAppAction();
  const updatePageLayout = (key: any) => {
    dispatch(
      setAppPreferences({
        authPageLayout: key
      })
    );
  };

  const onMenuClick: MenuProps['onClick'] = ({ key }) => {
    // message.info(`Click on item ${key}`);
    updatePageLayout(key)
  };

  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        onClick:onMenuClick,
        defaultSelectedKeys: [app.authPageLayout]
      }}
      placement="bottomLeft"
      arrow
    >
      <ButtonWrapper
        shape="circle"
        icon={
          <Icon
            component={LayoutIcon as React.ForwardRefExoticComponent<any>}
          ></Icon>
        }
      ></ButtonWrapper>
    </Dropdown>
  );
};

export default LayoutToggleContainer;