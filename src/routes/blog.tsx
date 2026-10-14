import { createFileRoute, Outlet } from '@tanstack/react-router';
import { withBase } from '@/lib/base';
import rawBody from '@/site/body.html?raw';
const bodyHtml = rawBody.replaceAll('href="/blog"', `href="${withBase('/blog')}"`);
import { useSiteController } from '@/components/blog/site-controller';
const header = bodyHtml.slice(0, bodyHtml.indexOf('<!-- ================= HERO'));
const footerStart = bodyHtml.indexOf('<!-- ================= LUXURY FOOTER');
const footer = bodyHtml.slice(footerStart);
// Imported links are ordinary document navigation, preserving controller initialization on home.
const shellHeader = header.replaceAll('src="assets/', `src="${withBase('/assets/')}`).replaceAll('href="#', `href="${withBase('/')}#`).replace('class="nav-link active"', 'class="nav-link"').replace(`href="${withBase('/blog')}" class="nav-link"`, `href="${withBase('/blog')}" class="nav-link active"`);
const shellFooter = footer.replaceAll('src="assets/', `src="${withBase('/assets/')}`).replaceAll('href="#', `href="${withBase('/')}#`);
export const Route = createFileRoute('/blog')({
  head: () => ({ links: [
    { rel: 'stylesheet', href: withBase('/assets/css/styles.css') },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap' },
  ] }),
  component: BlogLayout,
});
function BlogLayout() {
  useSiteController();
  return <><div dangerouslySetInnerHTML={{ __html: shellHeader }} /><Outlet /><div dangerouslySetInnerHTML={{ __html: shellFooter }} /></>;
}
