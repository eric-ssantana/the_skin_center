import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogPosts, blogLabels, formatBlogDate } from '@/data/blog';
import { BlogCard, useBlogLanguage } from '@/components/blog/blog-ui';
export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const post = blogPosts.find(item => item.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({ meta: [
    { title: loaderData ? `${loaderData.copy.en.title} | The Skin Center Blog` : 'Unavailable | The Skin Center Blog' },
    { name: 'description', content: loaderData?.copy.en.excerpt ?? 'This article is unavailable.' },
    { property: 'og:title', content: loaderData?.copy.en.title ?? 'Unavailable | The Skin Center' },
    { property: 'og:description', content: loaderData?.copy.en.excerpt ?? 'This article is unavailable.' },
    { property: 'og:type', content: 'article' }, { name: 'twitter:card', content: 'summary_large_image' },
    ...(!loaderData ? [{ name: 'robots', content: 'noindex' }] : []),
  ] }),
  component: BlogArticle,
});
function BlogArticle() {
  const post = Route.useLoaderData();
  const lang = useBlogLanguage();
  const copy = post.copy[lang];
  return <main>
    <article className="container blog-article">
      <Button asChild variant="ghost" className="blog-read"><Link to="/blog"><ArrowLeft />{blogLabels[lang].back}</Link></Button>
      <header className="blog-article-heading">
        <div className="blog-meta"><span className="blog-category">{copy.category}</span><time dateTime={post.date}>{formatBlogDate(post.date, lang)}</time><span>• {blogLabels[lang].minutes}</span></div>
        <h1>{copy.title}</h1><p className="blog-article-intro">{copy.excerpt}</p>
      </header>
      <img src={post.image} alt={copy.title} width={1024} height={768} className="blog-article-cover" />
      {copy.sections.map(section => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}
      <p className="blog-disclaimer">{blogLabels[lang].disclaimer}</p>
    </article>
    <section className="container blog-related"><h2>{blogLabels[lang].related}</h2><div className="blog-grid">{blogPosts.filter(item => item.slug !== post.slug).map(item => <BlogCard key={item.slug} post={item} lang={lang} />)}</div></section>
  </main>;
}
