import { styles } from '../assets/constants';
import Project from '../components/Project';
import { projects } from '../helpers/projectsList';

const Projects = () => (
  <main className="section">
    <div className="container">
      <h2 className="title-1" style={{ textShadow: `${styles.mainTheme.textShadow}` }}>
        Projects
      </h2>
      <ul className="projects">
        {projects.map((project, index) => (
          <Project
            key={project.title}
            title={project.title}
            img={project.img}
            index={index}
            background={project.background}
          />
        ))}
      </ul>
    </div>
  </main>
);

export default Projects;
