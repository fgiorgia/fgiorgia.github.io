import { type PropsWithChildren } from 'react'
import Stack from '../Stack/Stack'

const MainContent: React.FC<PropsWithChildren> = ({ children }) => (
  <Stack
    direction="column"
    alignItems="center"
    style={{ width: '100%', padding: '1rem' }}
  >
    {children}
  </Stack>
)

export default MainContent
