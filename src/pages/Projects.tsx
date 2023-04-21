import { projects } from '../components/helpers/projectsList';
import Project from '../components/Project';

const Projects = () => (
  <main className="section">
    <div className="container">
      <h2 className="title-1">Projects</h2>
      <ul className="projects">
        {projects.map((project) => (
          <Project key={project.title} title={project.title} img={project.img} />
        ))}
      </ul>
    </div>
  </main>
);

export default Projects;
