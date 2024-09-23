// 存储值
export const setItem = (key: string, value?: string | null): void => {
  if (value === null) {
    localStorage.removeItem(key); // 如果值为 null，则移除该项
  } else {
    localStorage.setItem(key, value ?? ''); // 处理 undefined 的情况
  }
};

// 获取值
export const getItem = (key: string): string | null => {
  return localStorage.getItem(key);
};

// 删除值
export const removeItem = (key: string): void => {
  localStorage.removeItem(key);
};

// 存储 token
export const setToken = (token: string | null): void => {
  setItem('token', token);
};

// 获取 token
export const getToken = (): string | null => {
  return getItem('token');
};

// 存储 locale
export const setLocale = (token: string | null): void => {
  setItem('locale', token);
};

// 获取 locale
export const getLocale = (): string | null => {
  var locale = getItem('locale');

  if (isNullOrEmpty(locale)) {
    locale = 'zh-CN';
  }

  return getItem('locale');
};

// 清空所有存储
export const clear = (): void => {
  localStorage.clear();
};

function isNullOrEmpty(value: any) {
  return value === null || value === '';
}
