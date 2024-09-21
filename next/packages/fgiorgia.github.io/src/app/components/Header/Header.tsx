import Stack from "../Stack/Stack"
import Avatar from "./Avatar"

const Header: React.FC = () => {
  return (
    <header>
      <Stack direction="row" className="w-full min-h-20 bg-gray-100 px-4">
        {/* Left side */}
        <Stack className="flex-row justify-center items-center">
          <p>Giorgia Faedda</p>
        </Stack>
        <Stack className="flex-1 relative justify-center">
          <Avatar />
        </Stack>
        {/* Right side */}
        <Stack direction="row" className="justify-center items-center gap-2">
          <p>Projects</p>
          <p>GitHub</p>
          <p>About Me</p>
        </Stack>
      </Stack>
    </header>
  )
}

export default Header