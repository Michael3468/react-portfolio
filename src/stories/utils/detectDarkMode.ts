import { TDarkMode } from '../../types';

const isDarkModeEnabled = (): boolean =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const detectDarkMode = (): TDarkMode => (isDarkModeEnabled() === true ? 'dark' : 'light');

export default detectDarkMode;
