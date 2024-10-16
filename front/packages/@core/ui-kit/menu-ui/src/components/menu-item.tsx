import { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

const MenuItemContainer = styled.div<{ active: boolean; childActive: boolean }>`
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
  padding-bottom: 2px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${p =>
    p.childActive
      ? p.theme.menuItemsActiveColor
      : p.theme.menuItemColor}; // 激活时字体颜色
  transition: border-color 0.5s ease, border-width 0.5s ease; /* 定义过渡效果 */
`;

const MenuItemContent = styled.div<{ active: boolean; childActive: boolean }>`
  border-radius: 8px;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 6px;
  padding-right: 6px;
  display: flex; // 使用 flexbox 以支持对齐
  justify-content: center;
  align-items: center;
  white-space: nowrap; // 防止文本换行
  overflow: hidden; // 隐藏溢出的文本
  text-overflow: ellipsis; // 使用省略号表示溢出的文本
  background-color: ${p =>
    p.active ? p.theme.menuItemActiveHoverBg : 'transparent'}; // 激活时背景颜色

  &:hover {
    background-color: ${p =>
      p.active ? p.theme.menuItemActiveHoverBg : 'hsl(240 5% 96%)'};
  }
`;

const SubmenuContainer = styled.div``;

const FixedSubMenuContainer = styled.div<{
  rootMenu: boolean;
}>`
  position: absolute;
  width: 200px;
  left: ${p => (p.rootMenu ? '65px' : '210px')};
  transform: translate(0px, -40px);
  border-radius: 0.25rem;
  padding: 5px;
  border: 1px solid ${p => p.theme.border};
`;

const Icon = styled.span`
  margin-right: 8px;
`;

const ToggleIcon = styled.span`
  margin-left: auto; // 将图标放到右侧
`;

export interface Item {
  children?: Item[];
  icon?: React.ReactNode;
  label?: string;
  key?: string;
}

export interface MenuItemProps {
  item: Item;
  onClick: Function;
  collapsed: boolean;
  level: number;
  activeKey?: string; // 传入激活的 key
  rootMenu: boolean;
  setRootKey?: Function;
  rootKey?: string;
  updateKey: number;
  setUpdateKey: Function;
}

const MenuItem = ({
  item,
  onClick,
  collapsed,
  level = 0,
  activeKey,
  rootMenu = true,
  setRootKey,
  rootKey,
  updateKey,
  setUpdateKey
}: MenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        itemRef.current &&
        !itemRef.current.contains(event.target as Node) &&
        collapsed
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [itemRef.current]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setRootKey?.(item.key ?? '');
    }
  };

  useEffect(() => {
    if (collapsed) {
      setIsOpen(rootKey == item.key);
    }
  }, [rootKey, collapsed]);
  const isActiveRecursively = item => {
    if (item.key === activeKey) return true;
    if (item.children) {
      return item.children.some(isActiveRecursively);
    }
    return false;
  };

  var isActive = item.key === activeKey;
  const isChildActive = isActiveRecursively(item);

  if (isChildActive && collapsed) {
    isActive = true;
  }

  useEffect(() => {
    if (collapsed) {
      setIsOpen(false);
    }
  }, [collapsed, activeKey,updateKey]);

  const paddLeftLevel = useMemo(() => {
    var paddLeftLevel = 0;
    if (!collapsed) {
      paddLeftLevel = level;
    }
    return paddLeftLevel;
  }, [collapsed, level]);

  return (
    <div ref={itemRef}>
      <MenuItemContainer
        active={isActive}
        childActive={isChildActive}
        onClick={
          item.children
            ? handleToggle
            : () => {
                onClick(item.key);
                setUpdateKey?.(state => state + 1);
              }
        }
      >
        {collapsed ? (
          rootMenu ? (
            <MenuItemContent
              style={{ paddingLeft: `${paddLeftLevel * 16}px` }}
              active={isActive}
              childActive={isChildActive}
            >
              {item.icon}
            </MenuItemContent>
          ) : (
            <MenuItemContent
              style={{ paddingLeft: `${paddLeftLevel * 16}px` }}
              active={isActive}
              childActive={isChildActive}
            >
              {item.icon && <Icon>{item.icon}</Icon>}
              {item.label}
              <ToggleIcon>
                {item.children ? (
                  isOpen ? (
                    <MenuArrorTop />
                  ) : (
                    <MenuArrorBottom />
                  )
                ) : null}
              </ToggleIcon>
            </MenuItemContent>
          )
        ) : (
          <MenuItemContent
            style={{ paddingLeft: `${paddLeftLevel * 16}px` }}
            active={isActive}
            childActive={isChildActive}
          >
            {item.icon && <Icon>{item.icon}</Icon>}
            {item.label}
            <ToggleIcon>
              {item.children ? (
                isOpen ? (
                  <MenuArrorTop />
                ) : (
                  <MenuArrorBottom />
                )
              ) : null}
            </ToggleIcon>
          </MenuItemContent>
        )}
      </MenuItemContainer>
      {isOpen && !collapsed && item.children && (
        <SubmenuContainer>
          {item.children.map(child => (
            <MenuItem
              rootMenu={false}
              key={child.key}
              item={child}
              onClick={onClick}
              collapsed={collapsed}
              setUpdateKey={setUpdateKey}
              updateKey={updateKey}
              level={level + 1}
              activeKey={activeKey} // 传递激活的 key
            />
          ))}
        </SubmenuContainer>
      )}

      {isOpen && collapsed && item.children && (
        <FixedSubMenuContainer rootMenu={rootMenu}>
          {item.children.map(child => (
            <MenuItem
              rootMenu={false}
              key={child.key}
              setUpdateKey={setUpdateKey}
              updateKey={updateKey}
              item={child}
              onClick={onClick}
              collapsed={collapsed}
              level={level + 1}
              activeKey={activeKey} // 传递激活的 key
            />
          ))}
        </FixedSubMenuContainer>
      )}
    </div>
  );
};

export const MenuArrorBottom = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="4688"
      width="14"
      height="14"
    >
      <path
        fill="currentcolor"
        d="M300.118 417.667c-14.414 14.01100001-14.414 36.749 0 50.793l185.86 180.563c14.44 14.00399999 37.851 14.004 52.262 0l185.855-180.563c14.441-14.043 14.441-36.781 1e-8-50.793-14.419-14.035-37.824-14.035-52.26800001 0l-159.717 155.17500001-159.7-155.17500001c-14.44-14.034-37.846-14.034-52.293 0v0z"
        p-id="4689"
      ></path>
    </svg>
  );
};

export const MenuArrorTop = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="4494"
      width="14"
      height="14"
    >
      <path
        fill="currentcolor"
        d="M723.882 606.333c14.414-14.01100001 14.414-36.749 0-50.793l-185.86-180.563c-14.44-14.00399999-37.851-14.004-52.262 0l-185.855 180.563c-14.441 14.043-14.441 36.781-1e-8 50.793 14.419 14.035 37.824 14.035 52.26800001 0l159.717-155.17500001 159.7 155.17500001c14.44 14.034 37.846 14.034 52.293 0v0z"
        p-id="4495"
      ></path>
    </svg>
  );
};

export default MenuItem;
