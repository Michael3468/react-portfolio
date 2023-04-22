import { useParams } from 'react-router-dom';

import BtnGitHub from '../components/BtnGitHub';
import { projects } from '../helpers/projectsList';

const Project = () => {
  const { id } = useParams();
  const project = projects[Number(id)];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img src={project.bigImg} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>{`Skills: ${project.skills}`}</p>
          </div>

          <BtnGitHub link={project.gitHubLink} />
        </div>
      </div>
    </main>
  );
};

export default Project;
