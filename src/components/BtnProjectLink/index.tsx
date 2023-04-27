import { FC } from 'react';
import './styles.css';

type Props = {
  link: string;
  buttonText: string;
  img: string;
};

const BtnProjectLink: FC<Props> = ({ link, buttonText, img }) => (
  <a
    className="btn-outline"
    href={link}
    target="_blank"
    rel="noreferrer"
  >
    <img src={img} width={26} height={26} alt="github icon" />
    <span style={{ fontWeight: 'bold' }}>{buttonText}</span>
  </a>
);

export default BtnProjectLink;
