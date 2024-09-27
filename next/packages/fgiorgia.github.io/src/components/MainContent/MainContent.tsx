import { PropsWithChildren } from "react";
import Stack from "../Stack/Stack";

const MainContent: React.FC<PropsWithChildren> = ({ children }) => (
  <Stack direction="column" className="w-full p-8">
    {children}
  </Stack>
)

export default MainContent;
