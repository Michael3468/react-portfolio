/* eslint-disable react/no-array-index-key */
import { styles } from '../assets/constants';
import Project from '../components/Project';
import { projectsList } from '../shared/constants';
import AnimationScale3d from '../stories/components/Animations/AnimationScale3d';

const Projects = () => {
  const projectsString = 'Projects'.split('');

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1" style={{ textShadow: `${styles.mainTheme.textShadow}` }}>
          {projectsString.map((letter, index) => (
            <AnimationScale3d key={index}>{letter === ' ' ? '\u00A0' : letter}</AnimationScale3d>
          ))}
        </h2>

        <ul className="projects">
          {projectsList.map((project) => (
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
    </main>
  );
};

export default Projects;
