import { useEffect, useRef } from 'react';

import { useLocalStorage } from '../../utils/customHooks';
import moon from './moon.svg';
import sun from './sun.svg';

import './styles.css';

type TDarkMode = 'light' | 'dark';

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage<TDarkMode>('darkMode', 'light');
  const btnRef = useRef<HTMLButtonElement>(null);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => (currentValue === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark');
      btnRef.current?.classList.add('dark-mode-btn--active');
    } else {
      document.body.classList.remove('dark');
      btnRef.current?.classList.remove('dark-mode-btn--active');
    }
  }, [darkMode]);

  return (
    <button ref={btnRef} type="button" className="dark-mode-btn" onClick={toggleDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default BtnDarkMode;
