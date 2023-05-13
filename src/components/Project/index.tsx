import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';
import '../../stories/assets/css/animations/pulse-animation.css';

type Props = {
  title: string;
  img: string;
  index: number;
  background: string;
};

const Project: FC<Props> = ({ title, img, index, background }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleImgLoaded = () => {
    setImgLoaded(true);
  };

  return (
    <li
      className="project pulse-animation"
      style={
        !img
          ? { display: 'flex', alignItems: 'center', boxShadow: `0 0 11px ${background}` }
          : { boxShadow: `0 0 11px ${background}` }
      }
    >
      <NavLink to={`/project/${index}`} style={{ width: 'inherit', maxWidth: 'inherit' }}>
        {img && (
          <div
            className="project__container"
            style={{
              background,
            }}
          >
            <img
              src={img}
              alt={title}
              className={`project__img ${imgLoaded ? 'project__img_loaded' : ''}`}
              onLoad={handleImgLoaded}
            />
          </div>
        )}
        <h3 className="project__title">{title}</h3>
      </NavLink>
    </li>
  );
};

export default Project;
