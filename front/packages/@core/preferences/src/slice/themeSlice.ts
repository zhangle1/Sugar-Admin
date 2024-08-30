import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemePreferences } from '../types';
import { ThemeModeType } from '@sugar/@core/typings';


const initialState: ThemePreferences = {
  builtinType: 'default',
  colorDestructive: '#f00',
  colorPrimary: '#00f',
  colorSuccess: '#0f0',
  colorWarning: '#ff0',
  mode: 'light',
  radius: '4px',
  semiDarkHeader: false,
  semiDarkSidebar: false
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemePreferences(state, action: PayloadAction<Partial<ThemePreferences>>) {
      return { ...state, ...action.payload };
    },
    setMode(state, action: PayloadAction<ThemeModeType>) {
      state.mode = action.payload;
    },
    // 其他 reducers
  }
});



export  function useThemeAction(){
    // const { setThemePreferences, setMode } = themeSlice.actions;

    return {... themeSlice.actions}
}


export default themeSlice.reducer;