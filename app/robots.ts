import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Sitemap {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: '/admin', // Exemplu de pagină pe care o ascunzi de Google
    },
    sitemap: 'https://site-ul-tau-de-tractari.ro/sitemap.xml',
  };
}