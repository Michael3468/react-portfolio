import { styles } from '../../assets/constants';
import gitHub from './icons/gitHub.svg';
import instagram from './icons/instagram.svg';
import linkedIn from './icons/linkedIn.svg';
import twitter from './icons/twitter.svg';
import vk from './icons/vk.svg';

import './styles.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__wrapper d-flex flex-row">
        <ul className="footer__social">
          <li className="footer__social-item">
            <a href="https://github.com/WhiteDevilMan">
              <img
                style={{ filter: `drop-shadow(${styles.mainTheme.textShadow})` }}
                src={vk}
                alt="link to vk"
              />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="https://github.com/WhiteDevilMan">
              <img
                style={{ filter: `drop-shadow(${styles.mainTheme.textShadow})` }}
                src={instagram}
                alt="link to instagram"
              />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="https://github.com/WhiteDevilMan">
              <img
                style={{ filter: `drop-shadow(${styles.mainTheme.textShadow})` }}
                src={twitter}
                alt="link to twitter"
              />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="https://github.com/WhiteDevilMan">
              <img
                style={{ filter: `drop-shadow(${styles.mainTheme.textShadow})` }}
                src={gitHub}
                alt="link to github"
              />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="https://github.com/WhiteDevilMan">
              <img
                style={{ filter: `drop-shadow(${styles.mainTheme.textShadow})` }}
                src={linkedIn}
                alt="link to linkedin"
              />
            </a>
          </li>
        </ul>
        <div className="footer__copyright">
          <p
            className="footer__copyright-p"
            style={{ textShadow: `${styles.mainTheme.textShadow}` }}
          >
            © 2023
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
