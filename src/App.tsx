import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Footer, Navbar } from './components';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Project from './pages/Project';
import Projects from './pages/Projects';

import './assets/styles/main.css';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
