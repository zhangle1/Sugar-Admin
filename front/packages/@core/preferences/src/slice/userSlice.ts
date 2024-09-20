import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BasicUserInfo {
  /**
   * 头像
   */
  avatar: string;
  /**
   * 用户昵称
   */
  realName: string;
  /**
   * 用户角色
   */
  roles?: string[];
  /**
   * 用户id
   */
  userId: string;
  /**
   * 用户名
   */
  username: string;
}

const initialState: BasicUserInfo = {
  avatar: '',

  realName: '',
  roles: [],

  userId: '',

  username: ''
};

const userSlice = createSlice({
  name: 'core-user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<Partial<BasicUserInfo>>) {
      return { ...state, ...action.payload };
    }
  }
});

export function useUserAction(){
    return {...userSlice.actions}
}

export default userSlice.reducer