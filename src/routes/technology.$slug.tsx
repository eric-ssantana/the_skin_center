import { createFileRoute, notFound } from '@tanstack/react-router';
import { withBase } from '@/lib/base';
import { SiteShell, siteLinks } from '@/components/site/site-shell';
import { useBlogLanguage } from '@/components/blog/blog-ui';
import { technologies, techLabels } from '@/data/technologies';

export const Route = createFileRoute('/technology/$slug')({
  loader: ({ params }) => {
    const tech = technologies.find(item => item.slug === params.slug);
    if (!tech) throw notFound();
    return tech;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} | The Skin Center` : 'Technology | The Skin Center' },
      { name: 'description', content: loaderData?.copy.en.sub ?? 'Advanced aesthetic technology at The Skin Center.' },
      { property: 'og:title', content: loaderData ? `${loaderData.title} | The Skin Center` : 'The Skin Center' },
      { property: 'og:description', content: loaderData?.copy.en.sub ?? '' },
      { property: 'og:type', content: 'article' },
      ...(!loaderData ? [{ name: 'robots', content: 'noindex' }] : []),
    ],
    links: siteLinks,
  }),
  component: TechnologyPage,
});

const pad = (i: number) => String(i + 1).padStart(2, '0');

function TechnologyPage() {
  const tech = Route.useLoaderData();
  const lang = useBlogLanguage();
  const copy = tech.copy[lang];
  const l = techLabels[lang];
  return <SiteShell>
    <main>
      <section className="tp-hero pad">
        <div className="gs tp-hero-grid">
          <div>
            <a href={withBase('/#technologies')} className="tp-back">← {l.back}</a>
            <h1 className="tp-title">{tech.title}</h1>
            <p className="tp-sub">{copy.sub}</p>
          </div>
          <div className="tp-media"><img src={withBase(tech.image)} alt={tech.title} /></div>
        </div>
      </section>
      <section className="tp-section pad">
        <p className="eyebrow">{l.about}</p>
        <h2 className="tp-h2">{tech.title}</h2>
        <p className="tp-text">{copy.about}</p>
      </section>
      {copy.platform.length > 0 && <section className="tp-platform pad">
        <h2 className="tp-h2">{copy.platformTitle}</h2>
        <div className="tp-cards">{copy.platform.map((p, i) => <div className="tp-card" key={p.title}>
          <div className="tp-num">{pad(i)}</div><h3 className="tp-card-title">{p.title}</h3><p className="tp-card-text">{p.text}</p>
        </div>)}</div>
      </section>}
      <section className="tp-benefits pad dark">
        <div className="tp-benefits-inner">
          <h2 className="tp-h2">{l.ben}</h2>
          <div className="tp-ben-grid">{copy.benefits.map((b, i) => <div className="tp-ben" key={b.title}>
            <div className="tp-num">{pad(i)}</div><h3 className="tp-ben-title">{b.title}</h3><p className="tp-ben-text">{b.text}</p>
          </div>)}</div>
        </div>
      </section>
      <section className="tp-section pad">
        <h2 className="tp-h2">{l.ind}</h2>
        <ul className="tp-ind">{copy.indications.map(item => <li key={item}>{item}</li>)}</ul>
      </section>
      <section className="tp-cta">
        <div className="tp-cta-inner">
          <h2 className="tp-h2">{copy.ctaTitle}</h2>
          <p>{copy.ctaText}</p>
          <button type="button" className="btn btn-plum" data-open-modal="booking-modal">{l.book}</button>
        </div>
      </section>
    </main>
  </SiteShell>;
}
