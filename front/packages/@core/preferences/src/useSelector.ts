

import { useSelector, useDispatch } from 'react-redux';
import { PreferencesState } from './config';



export function useThemeSelector(){
    const theme = useSelector((state: PreferencesState) => state.theme);
    return theme
}


export function useAppSelector(){
    const select = useSelector((state: PreferencesState) => state.app);
    return select
}
