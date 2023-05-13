import { RecoilState, atom } from 'recoil';

import { TDarkMode } from '../types';

const darkModeState: RecoilState<TDarkMode> = atom({
  key: 'darkModeState',
  default: 'dark' as TDarkMode,
});

// eslint-disable-next-line import/prefer-default-export
export { darkModeState };
