import { createFileRoute, Outlet } from '@tanstack/react-router';
import bodyHtml from '@/site/body.html?raw';
import { useSiteController } from '@/components/blog/site-controller';
const header = bodyHtml.slice(0, bodyHtml.indexOf('<!-- ================= HERO'));
const footerStart = bodyHtml.indexOf('<!-- ================= LUXURY FOOTER');
const footer = bodyHtml.slice(footerStart);
// Imported links are ordinary document navigation, preserving controller initialization on home.
const shellHeader = header.replaceAll('src="assets/', 'src="/assets/').replaceAll('href="#', 'href="/#').replace('class="nav-link active"', 'class="nav-link"').replace('href="/blog" class="nav-link"', 'href="/blog" class="nav-link active"');
const shellFooter = footer.replaceAll('src="assets/', 'src="/assets/').replaceAll('href="#', 'href="/#');
export const Route = createFileRoute('/blog')({
  head: () => ({ links: [
    { rel: 'stylesheet', href: '/assets/css/styles.css' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap' },
  ] }),
  component: BlogLayout,
});
function BlogLayout() {
  useSiteController();
  return <><div dangerouslySetInnerHTML={{ __html: shellHeader }} /><Outlet /><div dangerouslySetInnerHTML={{ __html: shellFooter }} /></>;
}
