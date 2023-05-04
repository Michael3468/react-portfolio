import project01Big from '../assets/img/projects/01-big.jpg';
import project01 from '../assets/img/projects/01.jpg';
import project02Big from '../assets/img/projects/02-big.jpg';
import project02 from '../assets/img/projects/02.jpg';
import project03Big from '../assets/img/projects/03-big.jpg';
import project03 from '../assets/img/projects/03.jpg';
import project04Big from '../assets/img/projects/04-big.jpg';
import project04 from '../assets/img/projects/04.jpg';
import project06Big from '../assets/img/projects/06-big.jpg';
import project06 from '../assets/img/projects/06.jpg';
import project07Big from '../assets/img/projects/07-big.png';
import project07 from '../assets/img/projects/07.png';
import project08Big from '../assets/img/projects/08-big.png';
import project08 from '../assets/img/projects/08.png';

type TProjects = {
  title: string;
  skills: string;
  img: string;
  bigImg: string;
  gitHubLink: string;
  liveDemo: string;
};

// eslint-disable-next-line import/prefer-default-export
export const projects: TProjects[] = [
  {
    title: 'Booking Service',
    skills: 'Pug, SCSS, JavaScript',
    img: project08,
    bigImg: project08Big,
    gitHubLink: 'https://github.com/WhiteDevilMan/BookingService',
    liveDemo: 'https://whitedevilman.github.io/BookingService/',
  },
  {
    title: 'Landing',
    skills: 'Pug, SCSS, JavaScript, jQuery',
    img: project07,
    bigImg: project07Big,
    gitHubLink: 'https://github.com/WhiteDevilMan/LuxRest',
    liveDemo: 'https://whitedevilman.github.io/LuxRest/',
  },
  {
    title: 'Gaming streaming portal',
    skills: 'React, Node.js, MongoDB',
    img: project01,
    bigImg: project01Big,
    gitHubLink: 'http://github.com',
    liveDemo: 'https://whitedevilman.github.io',
  },
  {
    title: 'Video service',
    skills: 'React, PHP, MySQL',
    img: project02,
    bigImg: project02Big,
    gitHubLink: 'http://github.com',
    liveDemo: 'https://whitedevilman.github.io',
  },
  {
    title: 'Video portal',
    skills: 'VueJS, Node.js, MongoDB',
    img: project03,
    bigImg: project03Big,
    gitHubLink: 'http://github.com',
    liveDemo: 'https://whitedevilman.github.io',
  },
  {
    title: 'Dating app',
    skills: 'React Native',
    img: project04,
    bigImg: project04Big,
    gitHubLink: 'http://github.com',
    liveDemo: 'https://whitedevilman.github.io',
  },
  {
    title: 'Gaming community',
    skills: 'React, PHP, MySQL',
    img: project06,
    bigImg: project06Big,
    gitHubLink: 'http://github.com',
    liveDemo: 'https://whitedevilman.github.io',
  },
];
