import gitHub from './icons/gitHub.svg';
import instagram from './icons/instagram.svg';
import linkedIn from './icons/linkedIn.svg';
import twitter from './icons/twitter.svg';
import vk from './icons/vk.svg';

import './styles.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__wrapper">
        <ul className="footer__social">
          <li className="footer__social-item">
            <a href="#!">
              <img src={vk} alt="Link" />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="#!">
              <img src={instagram} alt="Link" />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="#!">
              <img src={twitter} alt="Link" />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="#!">
              <img src={gitHub} alt="Link" />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="#!">
              <img src={linkedIn} alt="Link" />
            </a>
          </li>
        </ul>
        <div className="footer__copyright">
          <p className="footer__copyright-p">© 2023 localhost:3000</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
