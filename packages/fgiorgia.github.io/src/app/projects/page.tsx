import MainContent from "@/components/MainContent/MainContent";
import Stack from "@/components/Stack/Stack";
import React from "react";

import styles from './projects.module.scss';
import { Project, projects } from "./projectsData";
import ProjectItem from "./ProjectItem";

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