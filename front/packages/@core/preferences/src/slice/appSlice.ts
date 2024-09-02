

// import AuthPageLayoutType from '@sugar/'
import { AuthPageLayoutType } from '@sugar/@core/base/typings';
import { AppPreferences } from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState : AppPreferences ={
    authPageLayout: 'panel-right',
    locale:'zh-CN'
}


const appSlice = createSlice({
    name:'app',
    initialState,
    reducers:{
        setAppPreferences(state,action: PayloadAction<Partial<AppPreferences>>){
            return {...state,...action.payload}
        }
    }
})

export function useAppAction(){

    return {...appSlice.actions}
}

export default appSlice.reducer;