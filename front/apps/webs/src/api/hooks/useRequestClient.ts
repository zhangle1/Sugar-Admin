import { RequestContext } from "api/context";
import { useContext } from "react";



export function useRequestManager(){
    return useContext(RequestContext)
}