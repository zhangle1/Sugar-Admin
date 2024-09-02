import { ISubscribable } from "@sugar/shared"

export interface ILangLocales {
  resources?: {
    [key: string]: any
  },
  [key: string]: any
}

export interface ILocales {
  [ISOCode: string]: ILangLocales
}

export type LocalesResources = {
  lang: string,
  locales: Record<string, ILangLocales>
}

export interface ILocalesManager extends ISubscribable<LocalesResources> {
  getLang: () => string
  setLang(lang: string): void
  getMessage(key: string): string | null
  registerLocales(...locales: ILocales[]): void
}

