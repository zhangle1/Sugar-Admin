import { Children } from 'react';

export function useMockData() {
  const menuItems = [
    {
      key: 'test',
      label: '测试',
      icon: <MenuOverViewIcon></MenuOverViewIcon>
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

export function useRouteHelper() {
  function extractBreadcrumbs(path: string): string[] {
    return path.split('/').filter(item => item !== '');
  }

   function findPath(menu, targetKey, path = []) {
    for (const item of menu) {
      const currentPath = [...path, item.key];
  
      if (item.key === targetKey) {
        return currentPath.join('/');
      }
  
      if (item.children) {
        const result = findPath(item.children, targetKey, currentPath);
        if (result) {
          return result;
        }
      }
    }
    return ''; // 如果没有找到返回空字符串
  }

  const findRoot = (path: string, routes: any[]) => {
    for (const item of routes) {
      if (item.key === path) {
        return item;
      }

      if (item.children) {
        const result = findRoot(path, item.children);
        if (result) {
          return result;
        }
      }
    }
    return '';
  };

  const getLeafNodes = menuItems => {
    let leaves = [];

    menuItems.forEach(item => {
      if (item.children && item.children.length > 0) {
        leaves = leaves.concat(getLeafNodes(item.children));
      } else {
        leaves.push(item);
      }
    });

    return leaves;
  };

  const parseLocationToBreadcrumbsItems = (location: string, routes: any[]) => {
    const locationItems = extractBreadcrumbs(location);

    const { menuItems } = useMockData();
    ///获取到路由树
    // const routeTree = routes.filter(filter => filter.path == '/');
    const ret = locationItems.map(item => findRoot(item, menuItems));
    
    return ret;
  };
  function findFirstLeafChild(menu, key) {
    for (const item of menu) {
      console.log(`Checking item: ${item.key}`); // Debugging line
      
      if (item.key === key) {
        console.log(`Match found: ${item.key}`); // Debugging line
        
        // If the item matches the key, check its children
        if (item.children && item.children.length > 0) {
          console.log(`Item ${item.key} has children:`, item.children.map(child => child.key)); // Debugging line
          
          for (const child of item.children) {
            console.log(`Exploring child: ${child.key}`); // Debugging line
            
            const leaf = findFirstLeafChild([child], child.key); // Recursively search for a leaf
            if (leaf) {
              console.log(`Found leaf: ${leaf.key}`); // Debugging line
              return leaf; // Return the found leaf child
            }
          }
        } else {
          return item;
        }
        
        return null; // Return null if there are no leaf children
      } else if (item.children) {
        console.log(`Item ${item.key} does not match, checking children...`); // Debugging line
        
        // Continue searching in children if current item does not match
        const result = findFirstLeafChild(item.children, key);
        if (result) {
          console.log(`Found leaf in children of ${item.key}: ${result.key}`); // Debugging line
          return result; // Return the found leaf child from the recursive call
        }
      }
    }
    
    console.log(`Key ${key} not found in current branch.`); // Debugging line
    return null; // Return null if key not found
  }

  return {
    findPath,
    getLeafNodes,
    extractBreadcrumbs,
    parseLocationToBreadcrumbsItems,
    findFirstLeafChild,
    findRoot
  };
}

export function findPath(menu, targetKey, path = []) {
  for (const item of menu) {
    const currentPath = [...path, item.key];

    if (item.key === targetKey) {
      return currentPath.join('/');
    }

    if (item.children) {
      const result = findPath(item.children, targetKey, currentPath);
      if (result) {
        return result;
      }
    }
  }
  return ''; // 如果没有找到返回空字符串
}

const MenuOverViewIcon = () => (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="11097"
    width="20"
    height="20"
  >
    <path
      d="M810.666667 341.333333h85.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v512a42.666667 42.666667 0 0 1-42.666667 42.666667h-341.333333a42.666667 42.666667 0 0 1-42.666667-42.666667v-42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666666V128a42.666667 42.666667 0 0 1 42.666667-42.666667h597.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v213.333333z m-85.333334 0V170.666667H213.333333v597.333333h298.666667V384a42.666667 42.666667 0 0 1 42.666667-42.666667h170.666666z m-128 85.333334v426.666666h256V426.666667h-256z"
      fill="currentcolor"
      p-id="11098"
    ></path>
  </svg>
);
