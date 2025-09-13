import MainContent from '@/components/MainContent/MainContent';
import { projects } from '../projectsData';
import ProjectItem from '../ProjectItem';
import Stack from '@/components/Stack/Stack';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.githubName }));
}

interface Params {
  slug: string;
}

interface Props {
  params: Params;
}

const ProjectPage: React.FC<Props> = ({ params }) => {
  const project = projects.find((project) => {
    return project.githubName === params.slug;
  });
  if (project == null) {
    throw new Error('Project not found');
  }

  return (
    <MainContent>
      <Stack
        style={{ maxWidth: '900px', marginTop: '6rem', marginBottom: '4rem' }}
      >
        <ProjectItem project={project} extended />
      </Stack>
    </MainContent>
  );
};

export default ProjectPage;
