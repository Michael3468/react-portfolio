import './styles.css';
import { FC } from 'react';

import gitHubIcon from './gitHub-black.svg';

type Props = {
  link: string;
};

const BtnGitHub: FC<Props> = ({ link }) => (
  <a className="btn-outline" href={link} target="_blank" rel="noreferrer">
    <img src={gitHubIcon} alt="github icon" />
    GitHub repo
  </a>
);

export default BtnGitHub;
