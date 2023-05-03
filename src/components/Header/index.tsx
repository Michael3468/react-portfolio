/* eslint-disable react/no-array-index-key */
import { styles } from '../../assets/constants';
import AnimationScale3d from '../../stories/components/Animations/AnimationScale3d';
import AnimationText from '../../stories/components/Animations/AnimationText';
import './styles.css';

const Header = () => {
  const name = "Hi, I'm Mikhail,".split('');

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title" style={{ textShadow: `${styles.mainTheme.textShadow}` }}>
          {name.map((letter, index) => (
            <AnimationScale3d key={index} startOnInit>
              {letter === ' ' ? '\u00A0' : letter}
            </AnimationScale3d>
          ))}
        </h1>
        <AnimationText
          text="frontend developer"
          animationType="words"
          delayChildren={3}
          style={{
            fontSize: 36,
            fontWeight: 'bold',
            marginRight: 15,
            textShadow: `${styles.mainTheme.textShadow}`,
          }}
        />

        <div className="header__text">
          <AnimationText
            text="with passion for learning and creating"
            animationType="letters"
            staggerChildren={0.05}
            delayChildren={5}
            hiddenX={-20}
            hiddenY={-20}
            style={{ textShadow: `${styles.mainTheme.textShadow}` }}
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
