import { staticTheme } from '@/features/common/styles/staticTheme';
import Stack from '@swiftpost/elysium/ui/base/Stack';

const TopBar = () => {
  return (
    <Stack
      height={staticTheme.spacing(4)}
      width="100%"
      sx={{
        // TODO: Replace with an actual fitting color
        backgroundColor: 'primary.dark',
      }}
    />
  );
};

export default TopBar;
