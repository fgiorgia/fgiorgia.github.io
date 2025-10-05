import StackLayout from '@swiftpost/elysium/layouts/StackLayout';
import Stack from '@swiftpost/elysium/ui/base/Stack';
import Footer from '@/features/layout/components/Footer';
import { staticTheme } from '@/features/common/styles/staticTheme';
import Header from '@/features/layout/components/Header';
import TopBar from '@/features/layout/components/TopBar';
import ContentFittedStack from '@swiftpost/elysium/ui/ContentFittedStack';

const contentMaxWidth = staticTheme.breakpoints.values.lg;

interface Props {
  children: React.ReactNode;
}

const SimplePageTemplate: React.FC<Props> = ({ children }) => {
  return (
    <StackLayout
      slotProps={{
        mainContainer: {
          children: (
            <Stack>
              <TopBar />
              {/* TODO: use contentMaxWidth to automate content width */}
              <Header /* contentMaxWidth={contentMaxWidth} */ />
              <ContentFittedStack
                component="main"
                id="main"
                marginX={staticTheme.spacing(2)}
                contentMaxWidth={contentMaxWidth}
              >
                {children}
              </ContentFittedStack>
            </Stack>
          ),
        },
        footerContainer: {
          // TODO: use contentMaxWidth to automate content width
          children: <Footer /* contentMaxWidth={contentMaxWidth} */ />,
        },
      }}
    />
  );
};

export default SimplePageTemplate;
