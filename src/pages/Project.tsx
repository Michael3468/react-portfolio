import { useParams } from 'react-router-dom';

import BtnProjectLink from '../components/BtnProjectLink';
import gitHubIcon from '../components/BtnProjectLink/gitHub-black.svg';
import liveDemo from '../components/BtnProjectLink/live-demo-icon.svg';
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

          <div>
            <BtnProjectLink link={project.gitHubLink} buttonText="GitHub Repo" img={gitHubIcon} />

            <BtnProjectLink link={project.liveDemo} buttonText="Live Demo" img={liveDemo} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
