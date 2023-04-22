import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

type Props = {
  title: string;
  img: string;
  index: number;
};

const Project: FC<Props> = ({ title, img, index }) => (
  <li className="project">
    <NavLink to={`/project/${index}`}>
      <img src={img} alt={title} className="project__img" />
      <h3 className="project__title">{title}</h3>
    </NavLink>
  </li>
);

export default Project;
