import '@/core/styles/legacyGlobals.css';
import './globals.css';
import AppRouterCacheProvider from '@swiftpost/elysium/core/next15/AppRouterCacheProvider';
import ThemeProvider from '@swiftpost/elysium/core/ThemeProvider';
import { theme, mainFont } from '@/core/styles/theme';
import {
  generateSEOMetadata,
  SeoInputMetadata,
} from '@/features/seo/generateSEOMetadata';

const layoutBaseMetadata: SeoInputMetadata = {};
export const metadata = generateSEOMetadata(layoutBaseMetadata);

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) => {
  return (
    <html lang="en" className={mainFont.variable}>
      <body>
        <AppRouterCacheProvider
          options={{
            // Required while transitioning from Tailwind
            enableCssLayer: true,
          }}
        >
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
