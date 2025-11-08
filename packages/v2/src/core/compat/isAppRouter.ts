import { useRouter } from 'next/compat/router';

/**
 * Useful for transitioning between pages router and app router
 *
 * See more: https://www.reddit.com/r/nextjs/comments/1aep6bv/comment/leiantd/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
 * See more: https://github.com/vercel/next.js/blob/9caa2fdc4dd43b6a967abc14148fede87789baa2/packages/next/src/client/compat/router.ts#L6-L11
 */
export const useIsAppRouter = () => {
  const router = useRouter();
  return router == null;
};
