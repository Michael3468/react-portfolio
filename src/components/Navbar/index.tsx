import { NavLink } from 'react-router-dom';

import { styles } from '../../assets/constants';
import ButtonToggleDarkMode from '../../stories/components/Buttons/ButtonToggleDarkMode';

import './styles.css';

const Navbar = () => {
  const activeLink = 'nav-list__link nav-list__link--active';
  const normalLink = 'nav-list__link';

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong style={{ textShadow: `${styles.mainTheme.textShadow}` }}>Portfolio</strong>
          </NavLink>

          <ButtonToggleDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
                style={{ textShadow: `${styles.mainTheme.textShadow}` }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
                style={{ textShadow: `${styles.mainTheme.textShadow}` }}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
                style={{ textShadow: `${styles.mainTheme.textShadow}` }}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
