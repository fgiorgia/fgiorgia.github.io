import { ReactElement, ReactNode } from 'react';
import { LucideProps as IconProps } from 'lucide-react';

// Project Types
export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  tags: string[];
  categoryColor: string;
  icon: ReactElement<IconProps> | null;
  iconBgColor: string;
  technologies: string[];
  client: string;
  completedDate: string;
  featured: boolean;
  isDemo?: boolean; // Flag to indicate if this is a demo/placeholder project
  thumbnail?: string; // Path to project thumbnail image
  imageGallery?: string[]; // Array of images for the carousel
  image?: string; // Path to project image
  mainImageUrl?: string | null;
  outcomes?: {
    title: string;
    value: string | number;
    description: string;
  }[];
  challenges?: string[];
  segments?: {
    name: string;
    percentage: string;
    description: string;
    bulletPoints: string[];
  }[];
  marketingResults?: {
    segment: string;
    strategy: string;
    results: string;
  }[];
  codeSnippets?: Array<{
    title: string;
    language: string;
    code: string;
  }>;
}

// Skill Types
export interface Skill {
  id: string;
  title: string;
  description: string;
  icon: ReactElement<IconProps>;
  level: number;
  tools: string[];
}

// Component Prop Types
export interface LayoutProps {
  children: ReactNode;
}

export interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export interface ProjectsGridProps {
  projects: Project[];
}

export interface ProjectTabsProps {
  project: Project;
}

export interface ProjectContentProps {
  project: Project;
}

export interface SkillsProps {
  skills?: Skill[];
}

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogImageAlt?: string;
  noindex?: boolean;
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    tags?: string[];
  };
}

export interface BreadcrumbItem {
  href: string;
  label: string;
  isCurrent?: boolean;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};
