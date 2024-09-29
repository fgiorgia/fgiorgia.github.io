import MainContent from "@/components/MainContent/MainContent";
import Stack from "@/components/Stack/Stack";
import Text from "@/components/Text/Text";
import React from "react";

import styles from './projects.module.scss';
import { Project, projects } from "./projectsData";

// TODO: refactor this using proper components for this
// TODO: use next optimized images

interface ProjectItemProps { project: Project }

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const projectLink = `https://github.com/fgiorgia/${project.githubName}/`;

  return (
    <div className={styles.projectItem}>
      <div className={styles.projectItemImgContainer}>
        <img
          className={styles.projectItemContentImgBackground}
          src={project.thumbnailImg}
          alt="Project thumbnail"
        />
        <img
          className={styles.projectItemContentImg}
          src={project.thumbnailImg}
          alt="Project thumbnail"
        />
      </div>
      <div className={styles.projectItemContentContainer}>
        <div className={styles.projectItemTextContainer}>
          <a className={styles.projectTitleLink} href={projectLink} target="_blank">
            <h4>{project.title}</h4>
          </a>
          {project.tags.length > 0 && (
            <div className={styles.projectTagsContainer}>
              {project.tags.map((tag, index) => (
                <a
                  key={index}
                  className={styles.projectTag}
                  href={`/tags#${tag}`}
                >
                  {tag}
                </a>
              ))}
            </div>
          )}
          {/* <div className={styles.projectItemContentText}>
            <Text>{project.content}</Text>
          </div> */}
          <a className={styles.projectItemContentReadmore} href={projectLink} target="_blank">
            <p>Read More</p>
          </a>
        </div>
        <div className={styles.projectGithubContainer}>
          <a className={styles.projectGithubLink} href={projectLink} target="_blank">
            <i className="fab fa-github"></i> {project.githubName}
          </a>
          <iframe
            src={`https://ghbtns.com/github-btn.html?user=fgiorgia&repo=${project.githubName}&type=watch&v=2`}
            frameBorder="0"
            scrolling="0"
            width="150"
            height="20"
            title="GitHub"
          />
        </div>
      </div>
    </div>
  );
};


const Page: React.FC = () => {
  return (
    <MainContent>
      <Stack
        spacing={1}
        alignItems="center"
        style={{
          margin: 'max(4rem, 4vw) 0',
          padding: '0 4vw',
          width: '100%'
        }}
      >
        <div className={styles.projectsContainerGrid}>
          {projects.map((project) =>
            <ProjectItem project={project} key={project.githubName} />
          )}
        </div>
      </Stack>
    </MainContent>
  )
};

export default Page;