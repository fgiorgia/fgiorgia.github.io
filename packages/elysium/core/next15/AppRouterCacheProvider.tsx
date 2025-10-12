import {
  AppRouterCacheProvider as MUIAppRouterCacheProvider,
  AppRouterCacheProviderProps as MUIAppRouterCacheProviderProps,
} from '@mui/material-nextjs/v15-appRouter';

export type AppRouterCacheProviderProps = MUIAppRouterCacheProviderProps;

const AppRouterCacheProvider: React.FC<AppRouterCacheProviderProps> = ({
  children,
  options,
  ...otherProps
}) => (
  <MUIAppRouterCacheProvider
    options={{ key: 'elysium', ...options }}
    {...otherProps}
  >
    {children}
  </MUIAppRouterCacheProvider>
);

export default AppRouterCacheProvider;
