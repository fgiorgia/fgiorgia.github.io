import Stack from '@/core/Stack'
import { type PropsWithChildren } from 'react'

const Section: React.FC<PropsWithChildren> = ({ children }) => {
  return <Stack>{children}</Stack>
}

export default Section
