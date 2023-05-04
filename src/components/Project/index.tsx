import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';
import '../../stories/assets/css/animations/pulse-animation.css';

type Props = {
  title: string;
  img: string;
  index: number;
};

const Project: FC<Props> = ({ title, img, index }) => (
  <li className="project pulse-animation">
    <NavLink to={`/project/${index}`}>
      {img && <img src={img} alt={title} className="project__img" />}
      <h3 className="project__title">{title}</h3>
    </NavLink>
  </li>
);

export default Project;
