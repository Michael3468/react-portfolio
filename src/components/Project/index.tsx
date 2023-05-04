import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';
import '../../stories/assets/css/animations/pulse-animation.css';

type Props = {
  title: string;
  img: string;
  index: number;
  background: string;
};

const Project: FC<Props> = ({ title, img, index, background }) => (
  <li
    className="project pulse-animation"
    style={!img ? { display: 'flex', alignItems: 'center' } : {}}
  >
    <NavLink to={`/project/${index}`}>
      {img && (
        <div style={{ padding: 20, background, borderRadius: 10 }}>
          <img src={img} alt={title} className="project__img" />
        </div>
      )}
      <h3 className="project__title">{title}</h3>
    </NavLink>
  </li>
);

export default Project;
