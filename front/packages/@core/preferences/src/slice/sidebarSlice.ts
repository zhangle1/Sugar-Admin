import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SidebarPreferences } from "../types";


const initialState:SidebarPreferences={
    collapsed: false,
    /** 侧边栏折叠时，是否显示title */
    collapsedShowTitle: false,
    /** 侧边栏是否可见 */
    enable: true,
    /** 菜单自动展开状态 */
    expandOnHover: true,
    /** 侧边栏扩展区域是否折叠 */
    extraCollapse: true,
    /** 侧边栏是否隐藏 - css */
    hidden: false,
    /** 侧边栏宽度 */
    width: 230
}


const sidebarSlice=createSlice({
    name:'sider',
    initialState,
    reducers:{
        setSidebarPreferences(
            state,
            action: PayloadAction<Partial<SidebarPreferences>>
        ){
            return {...state,...action.payload}
        }

    }
})

export function useSidebarAction(){

    return {...sidebarSlice.actions}
}

export default sidebarSlice.reducer;