import { createFileRoute } from '@tanstack/react-router';
import { blogPosts, blogLabels } from '@/data/blog';
import { BlogCard, useBlogLanguage } from '@/components/blog/blog-ui';
export const Route = createFileRoute('/blog/')({
  head: () => ({ meta: [
    { title: 'Blog | The Skin Center — Skin Health & Aesthetic Care' },
    { name: 'description', content: 'Explore skincare, aesthetic medicine and laser treatment articles from The Skin Center in English, Portuguese and Spanish.' },
    { property: 'og:title', content: 'Blog | The Skin Center' },
    { property: 'og:description', content: 'Skin health, aesthetic care and well-being: discover our latest articles.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: BlogIndex,
});
function BlogIndex() {
  const lang = useBlogLanguage();
  return <main>
    <section className="blog-hero">
      {blogPosts[0] && <img src={blogPosts[0].image} alt="" width={1024} height={768} />}
      <div className="blog-hero-copy"><span className="blog-eyebrow">The Skin Center</span><h1>Blog</h1><p>{blogLabels[lang].subtitle}</p></div>
    </section>
    <section className="container blog-listing"><div className="blog-grid">{blogPosts.map(post => <BlogCard key={post.slug} post={post} lang={lang} />)}</div></section>
  </main>;
}
