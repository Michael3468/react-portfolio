import { Footer, Navbar } from './components';
// import Home from './pages/Home';
import Projects from './pages/Projects';

import './assets/styles/main.css';

const App = () => (
  <div className="App">
    <Navbar />

    {/* <Home /> */}
    <Projects />

    <Footer />
  </div>
);

export default App;
