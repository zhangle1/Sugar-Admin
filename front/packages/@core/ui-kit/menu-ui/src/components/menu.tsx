import React, { useState } from 'react';
import styled from 'styled-components';
import MenuItem, { Item } from './menu-item';

export interface MenuProps extends React.HTMLAttributes<HTMLHtmlElement> {
  /**
   * menu collapsed status
   */
  collapsed?: boolean;
 
  width?: string;

  items?: Item[]

  onMenuChange?: Function
}

const MenuContainer = styled.div`
  width: 100%;
`;

export const Menu = React.forwardRef<HTMLHtmlElement, MenuProps>(
  ({ collapsed ,items,onMenuChange}, ref) => {

    const [activeKey, setActiveKey] = useState<string>(''); // 管理激活的 key
    const [rootKey, setRootKey] = useState<string>('');
    const [updateKey,setUpdateKey]=useState<number>(1)
    const handleItemClick = (key: string) => {
      setActiveKey(key); // 更新激活的 key
      onMenuChange?.(key)
    };
  


    return (
      <MenuContainer>
        {items?.map(item => (
          <MenuItem collapsed={collapsed} key={item.key} 
          item={item} onClick={handleItemClick} 
          rootKey={rootKey}
          setRootKey={setRootKey}
          updateKey={updateKey}
          setUpdateKey={setUpdateKey}
          level={0}
          activeKey={activeKey} // 传递激活的 key
          />
        ))}
      </MenuContainer>
    );
  }
);

export default Menu;
