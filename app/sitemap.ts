import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://site-ul-tau-de-tractari.ro'; // Aici vei pune domeniul tău final

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1.0, // Pagina principală are prioritate maximă
    },
    // Dacă vei adăuga pagini separate mai târziu (ex: /servicii), le adaugi aici
    // {
    //   url: `${baseUrl}/servicii`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];
}