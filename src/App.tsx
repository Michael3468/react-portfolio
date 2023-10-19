import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { Footer, Navbar } from './components';
import { Contacts, Home, Project, Projects } from './pages';
import ScrollToTop from './stories/utils/ScrollToTop';

import './assets/styles/main.css';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <RecoilRoot>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <Footer />
      </RecoilRoot>
    </BrowserRouter>
  </div>
);

export default App;
