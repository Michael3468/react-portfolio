import project01Big from '../assets/img/projects/01-big.png';
import project01 from '../assets/img/projects/01.png';
import project02Big from '../assets/img/projects/02-big.png';
import project02 from '../assets/img/projects/02.png';
import project03Big from '../assets/img/projects/03-big.png';
import project03 from '../assets/img/projects/03.png';
import project04Big from '../assets/img/projects/04-big.png';
import project04 from '../assets/img/projects/04.png';
import project05Big from '../assets/img/projects/05-big.png';
import project05 from '../assets/img/projects/05.png';

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
    img: project05,
    bigImg: project05Big,
    background: 'rgb(76, 230, 7)',
    gitHubLink: 'https://github.com/WhiteDevilMan/mern-blog',
    liveDemo: 'https://mern-blog-fipk.onrender.com/',
  },
  {
    title: 'Social',
    skills: 'Next.js, Next-Auth, Emoji-Mart, TailwindCSS, TypeScript, RecoilJS, Firebase',
    img: project04,
    bigImg: project04Big,
    background: 'rgb(98, 0, 153)',
    gitHubLink: 'https://github.com/WhiteDevilMan/twitter-clone',
    liveDemo: 'https://twitter-clone-rhccoder.vercel.app/',
  },
  {
    title: 'jQuery plugin',
    skills: 'Pug, SCSS, jQuery, TypeScript, Jest, MVP, Webpack',
    img: project03,
    bigImg: project03Big,
    background: 'rgb(54, 54, 255)',
    gitHubLink: 'https://github.com/WhiteDevilMan/RangeSlider',
    liveDemo: 'https://whitedevilman.github.io/RangeSlider/',
  },
  {
    title: 'Booking Service',
    skills: 'Pug, SCSS, JavaScript, Webpack',
    img: project02,
    bigImg: project02Big,
    background: 'rgb(0, 255, 113)',
    gitHubLink: 'https://github.com/WhiteDevilMan/BookingService',
    liveDemo: 'https://whitedevilman.github.io/BookingService/',
  },
  {
    title: 'Landing',
    skills: 'Pug, SCSS, JavaScript, jQuery',
    img: project01,
    bigImg: project01Big,
    background: 'rgb(242, 219, 16)',
    gitHubLink: 'https://github.com/WhiteDevilMan/LuxRest',
    liveDemo: 'https://whitedevilman.github.io/LuxRest/',
  },
];
