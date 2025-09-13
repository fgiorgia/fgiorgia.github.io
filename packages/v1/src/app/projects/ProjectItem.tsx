import { type Project } from './projectsData'
import Text from '@/components/Text/Text'
import styles from './projects.module.scss'
import Link from 'next/link'
import { useCallback } from 'react'
import Image from 'next/image'

interface Props {
  project: Project
  extended?: boolean
}

const ProjectItem: React.FC<Props> = ({ project, extended }) => {
  const projectLink = `https://github.com/fgiorgia/${project.githubName}/`

  const ImageLinkOrFragment = useCallback(
    ({ children }: React.PropsWithChildren) => {
      if (extended === true) {
        return <>{children}</>
      }

      return <Link href={`/projects/${project.githubName}`}>{children}</Link>
    },
    [extended],
  )

  return (
    <div className={styles.projectItem}>
      <ImageLinkOrFragment>
        <div className={styles.projectItemImgContainer}>
          <Image
            className={styles.projectItemContentImgBackground}
            src={project.thumbnailImg}
            alt="Project thumbnail"
          />
          <Image
            className={styles.projectItemContentImg}
            src={project.thumbnailImg}
            alt="Project thumbnail"
          />
        </div>
      </ImageLinkOrFragment>
      <div className={styles.projectItemContentContainer}>
        <div className={styles.projectItemTextContainer}>
          {extended !== true && (
            <Link
              className={styles.projectItemContentReadmore}
              href={`/projects/${project.githubName}`}
            >
              <h4>{project.title}</h4>
            </Link>
          )}

          {project.tags.length > 0 && (
            <div className={styles.projectTagsContainer}>
              {project.tags.map((tag, index) => (
                <span key={tag} className={styles.projectTag}>
                  {/* 
                    TODO: we may want to update this at some point
                    to filter projects based on the tags
                  */}
                  {/* <a
                    key={index}
                    className={styles.projectTag}
                    href={`/tags#${tag}`}
                  > */}
                  {tag}
                  {/* </a> */}
                </span>
              ))}
            </div>
          )}
          {extended === true && (
            <div className={styles.projectItemContentText}>
              <Text>{project.content}</Text>
            </div>
          )}
        </div>
        <div className={styles.projectGithubContainer}>
          <a
            className={styles.projectGithubLink}
            href={projectLink}
            target="_blank"
          >
            <i className="fab fa-github"></i> {project.githubName}
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
