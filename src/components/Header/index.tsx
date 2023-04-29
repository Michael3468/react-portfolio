/* eslint-disable react/no-array-index-key */
import TextAnimation from '../../stories/TextAnimation';
import './styles.css';

const Header = () => {
  const name = "Hi, I'm Mikhail,".split('');

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <p>
            {name.map((letter, index) => (
              <TextAnimation key={index}>{letter === ' ' ? '\u00A0' : letter}</TextAnimation>
            ))}
          </p>
          <span>frontend developer</span>
        </h1>

        <div className="header__text">
          <p className="header__text-p">with passion for learning and creating.</p>
        </div>

        {/* <a href="#!" className="btn">
        Download CV
      </a> */}
      </div>
    </header>
  );
};

export default Header;
