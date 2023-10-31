import project21Big from '../assets/img/testProjects/21-big.jpg';
import project21 from '../assets/img/testProjects/21.jpg';
import project22Big from '../assets/img/testProjects/22-big.jpg';
import project22 from '../assets/img/testProjects/22.jpg';
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
    id: 22,
    title: 'Vue TODO',
    skills: 'Vue, Typescript, Vite',
    img: project22,
    bigImg: project22Big,
    background: 'rgb(63, 251, 11)',
    gitHubLink: 'https://github.com/Michael3468/vue3-test-task-2',
    liveDemo: 'https://vue3-test-task-2.vercel.app',
  },
  {
    id: 21,
    title: 'Vue Landing',
    skills: 'Vue, Typescript, Vite',
    img: project21,
    bigImg: project21Big,
    background: 'rgb(94, 69, 185)',
    gitHubLink: 'https://github.com/Michael3468/vue-test-task',
    liveDemo: 'https://vue-test-task-rhccoder.vercel.app/',
  },
];

export default testTasksList;
