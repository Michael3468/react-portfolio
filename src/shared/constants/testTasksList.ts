import project20Big from '../assets/img/testProjects/20-big.jpg';
import project20 from '../assets/img/testProjects/20.jpg';
import { TProjects } from '../types';

const testTasksList: TProjects[] = [
  {
    id: 20,
    title: 'React Landing',
    skills: 'React, Typescript, Vite',
    img: project20,
    bigImg: project20Big,
    background: 'rgb(255, 178, 32)',
    gitHubLink: 'https://github.com/WhiteDevilMan/astrum-entertainment-test',
    liveDemo: 'https://astrum-entertainment-test.vercel.app/',
  },
];

export default testTasksList;
