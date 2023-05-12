/* eslint-disable react/no-array-index-key */
import { styles } from '../assets/constants';
import AnimationScale3d from '../stories/components/Animations/AnimationScale3d';

const Contacts = () => {
  const contactsString = 'Contacts'.split('');

  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1" style={{ textShadow: `${styles.mainTheme.textShadow}` }}>
          {/* Contacts */}
          {contactsString.map((letter, index) => (
            <AnimationScale3d key={index}>{letter === ' ' ? '\u00A0' : letter}</AnimationScale3d>
          ))}
        </h1>

        <ul className="content-list">
          {/* <li className="content-list__item">
          <h2 className="title-2">Location</h2>
          <p>Moscow, Russia</p>
        </li> */}
          <li className="content-list__item">
            <h2 className="title-2 text-shadow">Telegram</h2>
            <a href="https://t.me/rhccoder" className="text-shadow">
              Click to send message
            </a>
          </li>
          <li className="content-list__item">
            <h2 className="title-2 text-shadow">Email</h2>
            <p>
              <a href="mailto:mikhail3468@yandex.ru" className="text-shadow">
                Click to send message
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
