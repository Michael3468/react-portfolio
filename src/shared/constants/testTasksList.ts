import project21Big from '../assets/img/testProjects/21-big.jpg';
import project21 from '../assets/img/testProjects/21.jpg';
import project29Big from '../assets/img/testProjects/29-big.jpg';
import project29 from '../assets/img/testProjects/29.jpg';
import { TProjects } from '../types';

const testTasksList: TProjects[] = [
  {
    id: 29,
    title: 'React Landing',
    skills: 'React, Typescript, Vite',
    img: project29,
    bigImg: project29Big,
    background: 'rgb(255, 178, 32)',
    gitHubLink: 'https://github.com/Michael3468/astrum-entertainment-test',
    liveDemo: 'https://astrum-entertainment-test.vercel.app/',
  },
  {
    id: 21,
    title: 'Vue Landing',
    skills: 'Vue, Typescript, Vite',
    img: project21,
    bigImg: project21Big,
    background: 'rgb(238, 147, 67)',
    gitHubLink: 'https://github.com/Michael3468/vue-test-task',
    liveDemo: 'https://vue-test-task-rhccoder.vercel.app/',
  },
];

export default testTasksList;
