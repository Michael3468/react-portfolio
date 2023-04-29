import { useParams } from 'react-router-dom';

import { projects } from '../helpers/projectsList';
import gitHubIcon from '../stories/assets/images/icons/gitHub-black.svg';
import liveDemo from '../stories/assets/images/icons/live-demo-icon.svg';
import ButtonIconWithLink from '../stories/ButtonIconWithLink';

const Project = () => {
  const { id } = useParams();
  const project = projects[Number(id)];
  const buttonGradient = 'linear-gradient(to bottom, rgb(255, 255, 255), rgba(0, 0, 0, 0.5))';

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img src={project.bigImg} alt={project.title} className="project-details__cover" />

          <div className="project-details__desc">
            <p>{`Skills: ${project.skills}`}</p>
          </div>

          <div>
            <ButtonIconWithLink
              link={project.gitHubLink}
              buttonText="GitHub"
              img={gitHubIcon}
              altText="github repo"
              backgroundColor={buttonGradient}
              style={{ marginBottom: 10 }}
            />

            <ButtonIconWithLink
              link={project.liveDemo}
              buttonText="Live Demo"
              img={liveDemo}
              altText="live demo"
              backgroundColor={buttonGradient}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
