import { useScrollToTop } from '@/hooks/use-scroll-to-top';

/**
 * A component that scrolls to the top of the page when the route changes.
 * This component doesn't render anything, it just provides the scroll behavior.
 */
export function ScrollToTop() {
  useScrollToTop();
  return null;
}
