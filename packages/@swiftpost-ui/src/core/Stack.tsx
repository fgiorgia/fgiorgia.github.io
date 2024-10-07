import { Stack as MUIStack } from '@mui/material'
import { type PropsWithChildren } from 'react'

const Stack: React.FC<PropsWithChildren> = ({ children }) => {
  return <MUIStack>{children}</MUIStack>
}

export default Stack
