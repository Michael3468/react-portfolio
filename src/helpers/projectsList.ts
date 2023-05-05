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
import project09Big from '../assets/img/projects/09-big.png';
import project09 from '../assets/img/projects/09.png';
import project10Big from '../assets/img/projects/10-big.png';
import project10 from '../assets/img/projects/10.png';
import project11Big from '../assets/img/projects/11-big.png';
import project11 from '../assets/img/projects/11.png';

type TProjects = {
  title: string;
  skills: string;
  img: string;
  bigImg: string;
  background: string;
  gitHubLink: string;
  liveDemo: string;
};

// eslint-disable-next-line import/prefer-default-export
export const projects: TProjects[] = [
  {
    title: 'Blog',
    skills: 'MongoDB, ExpressJS, React, Node.js, Mongoose, Axios',
    img: project11,
    bigImg: project11Big,
    background: 'rgb(76, 230, 7)',
    gitHubLink: 'https://github.com/WhiteDevilMan/mern-blog',
    liveDemo: 'https://mern-blog-fipk.onrender.com/',
  },
  {
    title: 'Social',
    skills: 'Next.js, Next-Auth, Emoji-Mart, TailwindCSS, TypeScript, RecoilJS, Firebase',
    img: project10,
    bigImg: project10Big,
    background: 'rgb(98, 0, 153)',
    gitHubLink: 'https://github.com/WhiteDevilMan/twitter-clone',
    liveDemo: 'https://twitter-clone-rhccoder.vercel.app/',
  },
  {
    title: 'jQuery plugin',
    skills: 'Pug, SCSS, jQuery, TypeScript, Jest, MVP, Webpack',
    img: project09,
    bigImg: project09Big,
    background: 'rgb(54, 54, 255)',
    gitHubLink: 'https://github.com/WhiteDevilMan/RangeSlider',
    liveDemo: 'https://whitedevilman.github.io/RangeSlider/',
  },
  {
    title: 'Booking Service',
    skills: 'Pug, SCSS, JavaScript, Webpack',
    img: project08,
    bigImg: project08Big,
    background: 'rgb(0, 255, 113)',
    gitHubLink: 'https://github.com/WhiteDevilMan/BookingService',
    liveDemo: 'https://whitedevilman.github.io/BookingService/',
  },
  {
    title: 'Landing',
    skills: 'Pug, SCSS, JavaScript, jQuery',
    img: project07,
    bigImg: project07Big,
    background: 'rgb(242, 219, 16)',
    gitHubLink: 'https://github.com/WhiteDevilMan/LuxRest',
    liveDemo: 'https://whitedevilman.github.io/LuxRest/',
  },
  {
    title: 'Gaming streaming portal',
    skills: 'React, Node.js, MongoDB',
    img: project01,
    bigImg: project01Big,
    background: '#370037',
    gitHubLink: 'http://github.com',
    liveDemo: 'https://whitedevilman.github.io',
  },
  {
    title: 'Video service',
    skills: 'React, PHP, MySQL',
    img: project02,
    bigImg: project02Big,
    background: '#370037',
    gitHubLink: 'http://github.com',
    liveDemo: 'https://whitedevilman.github.io',
  },
  {
    title: 'Video portal',
    skills: 'VueJS, Node.js, MongoDB',
    img: project03,
    bigImg: project03Big,
    background: '#370037',
    gitHubLink: 'http://github.com',
    liveDemo: 'https://whitedevilman.github.io',
  },
  {
    title: 'Dating app',
    skills: 'React Native',
    img: project04,
    bigImg: project04Big,
    background: '#370037',
    gitHubLink: 'http://github.com',
    liveDemo: 'https://whitedevilman.github.io',
  },
  {
    title: 'Gaming community',
    skills: 'React, PHP, MySQL',
    img: project06,
    bigImg: project06Big,
    background: '#370037',
    gitHubLink: 'http://github.com',
    liveDemo: 'https://whitedevilman.github.io',
  },
];
