// lib/utils.ts
import { useRouter } from 'next/router'

export function getAssetPath(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return normalizedPath
}
