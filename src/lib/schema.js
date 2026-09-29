import { site } from '../data/site.js';
import reviews from '../data/reviews.json';

const U = site.url;
export const ids = { business: `${U}/#business`, maria: `${U}/#maria`, website: `${U}/#website` };

export function coreGraph(lang = 'en') {
  const published = reviews.filter((r) => r.published !== false);
  const business = {
    '@type': 'ProfessionalService',
    '@id': ids.business,
    name: site.name,
    url: `${U}/`,
    email: site.email,
    telephone: site.phone,
    image: `${U}/og-default.jpg`,
    logo: `${U}/favicon.svg`,
    description: 'One-to-one Spanish lessons online and in person in London with María, a native Spanish speaker from Peru.',
    areaServed: [{ '@type': 'City', name: 'London' }, { '@type': 'Place', name: 'Worldwide (online)' }],
    availableLanguage: ['Spanish', 'English', 'Italian'],
    priceRange: '£16–£50',
    founder: { '@id': ids.maria },
  };
  if (published.length > 0) {
    business.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: (published.reduce((a, r) => a + r.rating, 0) / published.length).toFixed(1),
      reviewCount: published.length,
      bestRating: 5,
    };
  }
  return [
    business,
    {
      '@type': 'Person',
      '@id': ids.maria,
      name: site.teacher,
      alternateName: 'María',
      jobTitle: 'Spanish tutor',
      knowsLanguage: ['es', 'it', 'en'],
      nationality: { '@type': 'Country', name: 'Peru' },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidad de San Martín de Porres' },
      worksFor: { '@id': ids.business },
    },
    { '@type': 'WebSite', '@id': ids.website, url: `${U}/`, name: site.name, inLanguage: ['en', 'es', 'it'], publisher: { '@id': ids.business } },
  ];
}

export function breadcrumbs(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: new URL(it.href, U).href })),
  };
}

export function faqPage(faqs) {
  return { '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
}

export function serviceSchema(s, lang) {
  return {
    '@type': 'Service',
    name: s.title,
    serviceType: 'Spanish lessons',
    description: s.metaDesc,
    url: new URL(s.href, U).href,
    inLanguage: lang,
    provider: { '@id': ids.business },
    areaServed: s.key === 'inperson' ? { '@type': 'City', name: 'London' } : { '@type': 'Place', name: 'Worldwide (online)' },
    offers: {
      '@type': 'AggregateOffer', priceCurrency: 'GBP', lowPrice: String(s.lowPrice), highPrice: String(s.highPrice), offerCount: s.durations.length,
      offers: s.durations.map((d) => ({ '@type': 'Offer', name: `${d} minutes`, price: String(s.rates[d]), priceCurrency: 'GBP', url: new URL(s.href, U).href })),
    },
  };
}

export function reviewSchemas() {
  return reviews
    .filter((r) => r.published !== false)
    .map((r) => ({
      '@type': 'Review',
      itemReviewed: { '@id': ids.business },
      author: { '@type': 'Person', name: r.name },
      datePublished: r.date,
      reviewBody: r.text,
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
    }));
}
