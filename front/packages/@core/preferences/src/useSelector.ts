

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

export function useAccessSelector(){
    const select = useSelector((state: PreferencesState) => state.access);
    return select
}


export function useUserSelector(){
    const select = useSelector((state: PreferencesState) => state.user);
    return select
}

export function useSidebarSelector(){
    const select = useSelector((state: PreferencesState) => state.sidebar);
    return select
}

