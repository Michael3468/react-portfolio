/* eslint-disable react/no-array-index-key */
import AnimationScale3d from '../../stories/Animations/AnimationScale3d';
import AnimationText from '../../stories/Animations/AnimationText';
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
        </h1>
        <AnimationText
          text="frontend developer"
          animationType="words"
          delayChildren={5}
          style={{ fontSize: 36, fontWeight: 'bold', marginRight: 15 }}
        />

        <div className="header__text">
          <AnimationText
            text="with passion for learning and creating"
            animationType="letters"
            staggerChildren={0.05}
            delayChildren={7}
            hiddenX={-20}
            hiddenY={-20}
          />
        </div>

        {/* <a href="#!" className="btn">
        Download CV
      </a> */}
      </div>
    </header>
  );
};

export default Header;
