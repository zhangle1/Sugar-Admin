import { RequestClient } from "@sugar/request/index"
import { createContext } from "react"


type  Request=RequestClient

export const RequestContext = createContext<Request|undefined>(undefined)