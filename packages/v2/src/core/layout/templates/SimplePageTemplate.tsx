import StackLayout from '@swiftpost/elysium/layouts/StackLayout';
import Stack from '@swiftpost/elysium/ui/base/Stack';
import Footer from '@/core/layout/components/Footer';
import { staticTheme } from '@/core/styles/staticTheme';
import Header from '@/core/layout/components/Header';
// import TopBar from '@/core/layout/components/TopBar';
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
              {/* Not in use at the moment */}
              {/* <TopBar /> */}
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
