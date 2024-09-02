import Icon, { TranslationOutlined } from '@ant-design/icons';
import {
  PreferencesDispatch,
  useAppAction,
  useAppSelector
} from '@sugar/@core/preferences';
import { LayoutIcon, PaletteIcon } from '@sugar/@core/ui-kit/antd-ui';
import { useTranslate } from '@sugar/locales';
import { Button, Dropdown, MenuProps } from 'antd';
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

const LanguageToggleContainer = (props: any) => {

  const t = useTranslate("preferences")

  const items: MenuProps['items'] = [
    {
      key: 'zh-CN',
      label: t('chinese')
    },
    {
      key: 'en-US',
      label: t('english')
    }
  ];

  const app = useAppSelector();

  const dispatch: PreferencesDispatch = useDispatch();
  const { setAppPreferences } = useAppAction();
  const updateLocale = (key: any) => {
    dispatch(
      setAppPreferences({
        locale: key
      })
    );
  };

  const onMenuClick: MenuProps['onClick'] = ({ key }) => {
    // message.info(`Click on item ${key}`);
    updateLocale(key);
  };

  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        onClick: onMenuClick,

        defaultSelectedKeys: [app.locale]
      }}
      placement="bottomLeft"
      arrow
    >
      <ButtonWrapper
        shape="circle"
        icon={<TranslationOutlined />}
      ></ButtonWrapper>
    </Dropdown>
  );
};

export default LanguageToggleContainer;
