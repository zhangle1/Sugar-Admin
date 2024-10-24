import { createContext, useContext } from "react";



export const RoutesContext = createContext<[]>([])  as any;



export const useRoutesConfig = () => {
    return useContext(RoutesContext);
  } ;
  
