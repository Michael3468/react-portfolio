import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { styles } from '../../assets/constants';
import { projects } from '../../helpers/projectsList';
import gitHubIcon from '../../stories/assets/images/icons/gitHub-black.svg';
import liveDemo from '../../stories/assets/images/icons/live-demo-icon.svg';
import ButtonIconWithLink from '../../stories/components/Buttons/ButtonIconWithLink';

import './styles.css';

const Project = () => {
  const { id } = useParams();
  const [imgLoaded, setImgLoaded] = useState(false);
  const project = projects[Number(id)];
  const buttonGradient = 'linear-gradient(to bottom, rgb(255, 255, 255), rgba(0, 0, 0, 0.5))';

  const handleImgLoaded = () => {
    setImgLoaded(true);
  };

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1" style={{ textShadow: `${styles.mainTheme.textShadow}` }}>
            {project.title}
          </h1>

          <div className="project-details__desc text-shadow">
            <p>{`Skills: ${project.skills}`}</p>
          </div>

          <div
            className={`project-details__container ${
              imgLoaded ? 'project-details__container__loaded' : ''
            }`}
            style={{
              background: `${project.background}`,
            }}
          >
            <img
              src={project.bigImg}
              alt={project.title}
              className={`project-details__cover ${
                imgLoaded ? 'project-details__cover_loaded' : ''
              }`}
              onLoad={handleImgLoaded}
            />
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
