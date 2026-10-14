import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogLabels, formatBlogDate, type BlogPost, type Language } from '@/data/blog';
export function useBlogLanguage() {
  const [lang, setLang] = useState<Language>('en');
  useEffect(() => {
    const update = () => {
      const value = document.documentElement.lang;
      setLang(value === 'pt' || value === 'es' ? value : 'en');
    };
    update();
    window.addEventListener('tsc:language', update);
    return () => window.removeEventListener('tsc:language', update);
  }, []);
  return lang;
}
export function BlogCard({ post, lang }: { post: BlogPost; lang: Language }) {
  const copy = post.copy[lang];
  return <article className="blog-card">
    <Link to="/blog/$slug" params={{ slug: post.slug }} className="blog-card-image" aria-label={copy.title}>
      <img src={post.image} alt={copy.title} width={1024} height={768} loading="lazy" />
    </Link>
    <div className="blog-card-copy">
      <div className="blog-meta"><span className="blog-category">{copy.category}</span><time dateTime={post.date}>{formatBlogDate(post.date, lang)}</time></div>
      <h2><Link to="/blog/$slug" params={{ slug: post.slug }}>{copy.title}</Link></h2>
      <p>{copy.excerpt}</p>
      <Button asChild variant="ghost" className="blog-read"><Link to="/blog/$slug" params={{ slug: post.slug }}>{blogLabels[lang].read}<ArrowRight /></Link></Button>
    </div>
  </article>;
}
