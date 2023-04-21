import { FC } from 'react';

import './styles.css';

type Props = {
  title: string;
  img: string;
};

const Project: FC<Props> = ({ title, img }) => (
  <li className="project">
    <a href="./project-page.html">
      <img src={img} alt={title} className="project__img" />
      <h3 className="project__title">{title}</h3>
    </a>
  </li>
);

export default Project;
