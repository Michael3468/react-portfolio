import './styles.css';

const Header = () => (
  <header className="header">
    <div className="header__wrapper">
      <h1 className="header__title">
        <p>Hi, my name is Yuri,</p>
        <span>a frontend developer</span>
      </h1>

      <div className="header__text">
        <p className="header__text-p">with passion for learning and creating.</p>
      </div>

      <a href="#!" className="btn">
        Download CV
      </a>
    </div>
  </header>
);

export default Header;
