import { MainConfig } from "./src/config/types";

export interface ContextProps {
  config: MainConfig
  page: PageConfig
}


export interface PageConfig {
  language?: string
  showAvatar?: boolean
}