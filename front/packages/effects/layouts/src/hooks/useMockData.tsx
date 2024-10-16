import { Children } from 'react';

export function useMockData() {
  const menuItems = [
    {
      key:'test',
      label:"测试",
      icon: <MenuOverViewIcon></MenuOverViewIcon>,
    },

    {
      key: 'overView',
      label: '概览',
      icon: <MenuOverViewIcon></MenuOverViewIcon>,
      children: [
        {
          key: 'overView-one',
          label: '分析页',
          icon: <MenuOverViewIcon></MenuOverViewIcon>
        },
        {
          key: 'overView-two',
          icon: <MenuOverViewIcon></MenuOverViewIcon>,

          label: '工作台'
        }
      ]
    },
    {
      key: 'demo',
      label: '演示',
      icon: <MenuOverViewIcon></MenuOverViewIcon>,
      children: [
        {
          key: 'demo-auth',
          label: '前端权限',
          icon: <MenuOverViewIcon></MenuOverViewIcon>,
          children: [
            {
              key: 'demo-auth-read',
              label: '页面访问',
              icon: <MenuOverViewIcon></MenuOverViewIcon>
            }
          ]
        }
      ]
    }
  ];

  return { menuItems };
}

const MenuOverViewIcon = () => (
  <svg
    t="1728956611495"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="5782"
    width="20"
    height="20"
  >
    <path
      fill="currentcolor"
      d="M485.9 487.6H315.6c-93.9 0-170.3-76.4-170.3-170.3S221.7 147 315.6 147s170.3 76.4 170.3 170.3v170.3zM315.6 191c-69.7 0-126.3 56.7-126.3 126.3S246 443.6 315.6 443.6h126.3V317.3c0-69.7-56.6-126.3-126.3-126.3z m390.8 296.6H536.1V317.3c0-93.9 76.4-170.3 170.3-170.3s170.3 76.4 170.3 170.3-76.4 170.3-170.3 170.3z m-126.3-44h126.3c69.7 0 126.3-56.7 126.3-126.3S776 191 706.4 191s-126.3 56.7-126.3 126.3v126.3zM706.4 877c-93.9 0-170.3-76.4-170.3-170.3V536.4h170.3c93.9 0 170.3 76.4 170.3 170.3S800.3 877 706.4 877zM580.1 580.4v126.3c0 69.7 56.7 126.3 126.3 126.3s126.3-56.7 126.3-126.3c0-69.7-56.7-126.3-126.3-126.3H580.1zM315.6 877c-93.9 0-170.3-76.4-170.3-170.3s76.4-170.3 170.3-170.3h170.3v170.3c0 93.9-76.4 170.3-170.3 170.3z m0-296.6c-69.7 0-126.3 56.7-126.3 126.3 0 69.7 56.7 126.3 126.3 126.3s126.3-56.7 126.3-126.3V580.4H315.6z"
      p-id="5783"
    ></path>
  </svg>
);
