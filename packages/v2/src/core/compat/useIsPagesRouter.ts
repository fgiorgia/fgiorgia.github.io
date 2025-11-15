import { useRouter } from 'next/compat/router';

/**
 * Useful for transitioning between pages router and app router
 *
 * See more: https://www.reddit.com/r/nextjs/comments/1aep6bv/comment/leiantd/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
 * See more: https://github.com/vercel/next.js/blob/canary/packages/next/src/client/compat/router.ts
 */
export const useIsPagesRouter = () => {
  const router = useRouter();
  return router != null;
};
