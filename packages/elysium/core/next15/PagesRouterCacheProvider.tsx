import { AppCacheProvider as MUIPagesRouterCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';

export type PagesRouterCacheProviderProps = React.ComponentProps<
  typeof MUIPagesRouterCacheProvider
>;

const PagesRouterCacheProvider = MUIPagesRouterCacheProvider;
export default PagesRouterCacheProvider;
