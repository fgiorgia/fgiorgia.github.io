// lib/projects.ts
import { Project } from '@/features//common/types';
import { projects as projectsData } from './projectData';

/**
 * Get all projects
 */
export function getProjects(): Project[] {
  return projectsData;
}

/**
 * Get a specific project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project: Project) => project.slug === slug);
}

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  return projectsData.filter((project: Project) => project.featured);
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: string): Project[] {
  return projectsData.filter(
    (project: Project) =>
      project.category.toLowerCase() === category.toLowerCase(),
  );
}

/**
 * Get all project slugs (for static paths in Next.js)
 */
export function getAllProjectSlugs(): { params: { slug: string } }[] {
  return projectsData.map((project: Project) => ({
    params: { slug: project.slug },
  }));
}

/**
 * Get related projects for a specific project
 */
export function getRelatedProjects(currentSlug: string, limit = 3): Project[] {
  const currentProject = getProjectBySlug(currentSlug);

  if (!currentProject) {
    return [];
  }

  return projectsData
    .filter(
      (project: Project) =>
        project.slug !== currentSlug &&
        (project.category === currentProject.category ||
          project.tags.some((tag) => currentProject.tags.includes(tag))),
    )
    .sort(() => 0.5 - Math.random()) // Simple shuffling
    .slice(0, limit);
}

/**
 * Search projects by query
 */
export function searchProjects(query: string): Project[] {
  const searchTerm = query.toLowerCase();

  return projectsData.filter((project: Project) => {
    return (
      project.title.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.category.toLowerCase().includes(searchTerm) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm),
      )
    );
  });
}
