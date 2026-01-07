import { MetadataRoute } from 'next';
import { featuredProjects, archiveProjects, trainingVideos } from './data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://leonardodemurtas.com';

  const featuredUrls = featuredProjects.map((project) => ({
    url: `${baseUrl}/featured/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const archiveUrls = archiveProjects.map((project) => ({
    url: `${baseUrl}/archive/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const trainingUrls = trainingVideos.map((project) => ({
    url: `${baseUrl}/training/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
        url: `${baseUrl}/archive`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    },
    ...featuredUrls,
    ...archiveUrls,
    ...trainingUrls,
  ];
}
