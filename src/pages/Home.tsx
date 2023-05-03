import { Header } from '../components';

const Home = () => (
  <>
    <Header />

    <main className="section">
      <div className="container">
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2 text-shadow">Frontend</h2>
            <p className="text-shadow">
              HTML, PUG, CSS, SCSS, Webpack, JavaScript, TypeScript, ReactJS, Redux, Redux Toolkit,
              Redux Thunk, MobX, NPM, BootStrap, TailwindCSS
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2 text-shadow">Backend</h2>
            <p className="text-shadow">
              NodeJS, ExpressJS, MongoDB, PostgreSQL, Mongoose, Sequelize
            </p>
          </li>
        </ul>
      </div>
    </main>
  </>
);

export default Home;
