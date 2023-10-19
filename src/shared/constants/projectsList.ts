import project10Big from '../assets/img/projects/10-big.jpg';
import project10 from '../assets/img/projects/10.jpg';
import project11Big from '../assets/img/projects/11-big.jpg';
import project11 from '../assets/img/projects/11.jpg';
import project12Big from '../assets/img/projects/12-big.jpg';
import project12 from '../assets/img/projects/12.jpg';
import project13Big from '../assets/img/projects/13-big.jpg';
import project13 from '../assets/img/projects/13.jpg';
import project14Big from '../assets/img/projects/14-big.jpg';
import project14 from '../assets/img/projects/14.jpg';
import project15Big from '../assets/img/projects/15-big.jpg';
import project15 from '../assets/img/projects/15.jpg';
import { TProjects } from '../types';

const projectsList: TProjects[] = [
  {
    id: 15,
    title: 'React Landing',
    skills: 'React, TailwindCSS, Vite',
    img: project15,
    bigImg: project15Big,
    background: 'rgb(0, 219, 255)',
    gitHubLink: 'https://github.com/WhiteDevilMan/bank-modern',
    liveDemo: 'https://bank-modern-rhccoder.vercel.app/',
  },
  {
    id: 14,
    title: 'Blog',
    skills: 'MongoDB, ExpressJS, React, Node.js, Mongoose, Axios',
    img: project14,
    bigImg: project14Big,
    background: 'rgb(76, 230, 7)',
    gitHubLink: 'https://github.com/WhiteDevilMan/mern-blog',
    liveDemo: 'https://mern-blog-fipk.onrender.com/',
  },
  {
    id: 13,
    title: 'Social',
    skills: 'Next.js, Next-Auth, Emoji-Mart, TailwindCSS, TypeScript, RecoilJS, Firebase',
    img: project13,
    bigImg: project13Big,
    background: 'rgb(98, 0, 153)',
    gitHubLink: 'https://github.com/WhiteDevilMan/twitter-clone',
    liveDemo: 'https://twitter-clone-rhccoder.vercel.app/',
  },
  {
    id: 12,
    title: 'jQuery plugin',
    skills: 'Pug, SCSS, jQuery, TypeScript, Jest, MVP, Webpack',
    img: project12,
    bigImg: project12Big,
    background: 'rgb(54, 54, 255)',
    gitHubLink: 'https://github.com/WhiteDevilMan/RangeSlider',
    liveDemo: 'https://whitedevilman.github.io/RangeSlider/',
  },
  {
    id: 11,
    title: 'Booking Service',
    skills: 'Pug, SCSS, JavaScript, Webpack',
    img: project11,
    bigImg: project11Big,
    background: 'rgb(0, 255, 143)',
    gitHubLink: 'https://github.com/WhiteDevilMan/BookingService',
    liveDemo: 'https://whitedevilman.github.io/BookingService/',
  },
  {
    id: 10,
    title: 'Landing',
    skills: 'Pug, SCSS, JavaScript, jQuery',
    img: project10,
    bigImg: project10Big,
    background: 'rgb(242, 219, 16)',
    gitHubLink: 'https://github.com/WhiteDevilMan/LuxRest',
    liveDemo: 'https://whitedevilman.github.io/LuxRest/',
  },
];

export default projectsList;
