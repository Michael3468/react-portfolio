/* eslint-disable react/no-array-index-key */
import AnimationScale3d from '../../stories/components/AnimationScale3d';
import './styles.css';

const Header = () => {
  const name = "Hi, I'm Mikhail,".split('');

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <p>
            {name.map((letter, index) => (
              <AnimationScale3d key={index}>{letter === ' ' ? '\u00A0' : letter}</AnimationScale3d>
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
