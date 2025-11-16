import { AppCacheProvider as MUIPagesRouterCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';

export {
  DocumentHeadTags,
  documentGetInitialProps,
} from '@mui/material-nextjs/v15-pagesRouter';
export type { DocumentHeadTagsProps } from '@mui/material-nextjs/v15-pagesRouter';

export type PagesRouterCacheProviderProps = React.ComponentProps<
  typeof MUIPagesRouterCacheProvider
>;

const PagesRouterCacheProvider = MUIPagesRouterCacheProvider;
export default PagesRouterCacheProvider;
