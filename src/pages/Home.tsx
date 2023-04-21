import { Header } from '../components';

const Home = () => (
  <>
    <Header />

    <main className="section">
      <div className="container">
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Frontend</h2>
            <p>
              HTML, PUG, CSS, SCSS, Webpack, JavaScript, TypeScript, ReactJS, Redux, Redux Toolkit,
              Redux Thunk, MobX, NPM, BootStrap, TailwindCSS
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Backend</h2>
            <p>NodeJS, ExpressJS, MongoDB, PostgreSQL, Mongoose, Sequelize</p>
          </li>
        </ul>
      </div>
    </main>
  </>
);

export default Home;
