import Stack from '@swiftpost/elysium/ui/base/Stack';
import { unit } from '@/core/styles/staticTheme';

interface Props {
  children: React.ReactNode;
  height?: number;
  backgroundColor: string;
  borderColor: string;
}

const SectionContainer: React.FC<Props> = ({
  children,
  height,
  backgroundColor,
  borderColor,
}) => {
  return (
    <Stack
      sx={{
        backgroundColor,
        height: height != null ? unit(height) : undefined,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: unit(2),
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor,
      }}
    >
      {children}
    </Stack>
  );
};

export default SectionContainer;
