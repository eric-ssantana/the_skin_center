import { createFileRoute, Outlet } from '@tanstack/react-router';
import { SiteShell, siteLinks } from '@/components/site/site-shell';
export const Route = createFileRoute('/blog')({
  head: () => ({ links: siteLinks }),
  component: BlogLayout,
});
function BlogLayout() {
  return <SiteShell><Outlet /></SiteShell>;
}
