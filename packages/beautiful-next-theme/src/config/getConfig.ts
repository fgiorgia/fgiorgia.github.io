import defaultConfig from './defaultConfig.json'
import { MainConfig } from './types'

export const getConfig = () => {
  // TODO use zod to check
  return defaultConfig as MainConfig
}