/* eslint-disable react/no-array-index-key */
import { styles } from '../../assets/constants';
import Project from '../../components/Project';
import { projectsList, testTasksList } from '../../shared/constants';
import AnimationScale3d from '../../stories/components/Animations/AnimationScale3d';
import { IProjectsSection } from './Projects.types';

import './Projects.styles.scss';

const Projects = () => {
  const projectsString = 'Projects'.split('');
  const testTasksString = 'Test Tasks'.split('');

  const projectsSections: IProjectsSection[] = [
    {
      title: projectsString,
      projects: projectsList,
    },
    {
      title: testTasksString,
      projects: testTasksList,
    },
  ];

  return (
    <main className="section">
      {/* TODO: move 'container' class to mixin */}
      <div className="projects-list container">
        {projectsSections.map((item) => (
          <div className="projects-list__block">
            <h2 className="title-1" style={{ textShadow: `${styles.mainTheme.textShadow}` }}>
              {item.title.map((letter, index) => (
                <AnimationScale3d key={index}>
                  {letter === ' ' ? '\u00A0' : letter}
                </AnimationScale3d>
              ))}
            </h2>

            <ul className="projects-list__block-items">
              {item.projects.map((project) => (
                <Project
                  key={project.title}
                  title={project.title}
                  img={project.img}
                  id={project.id}
                  background={project.background}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
