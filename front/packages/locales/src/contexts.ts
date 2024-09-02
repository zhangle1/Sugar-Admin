import { createContext } from "react"
import { ILocalesManager } from "./interfaces"

export const LocalesContext = createContext<ILocalesManager | undefined>(undefined)