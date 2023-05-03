import { useEffect, useState } from 'react';

const getStorageValue = <T>(key: string, defaultValue: T): T => {
  const savedData = localStorage.getItem(key);

  let storageValue: T | null = null;
  if (savedData) {
    if (typeof savedData === 'string') {
      storageValue = savedData as T;
    } else {
      storageValue = JSON.parse(savedData);
    }
  }
  return storageValue || defaultValue;
};

/**
 * Add generic type after useLocalStorage
 *
 * example: (for define toggle variable darkMode on site)
 *
 * type TDarkMode = 'light' | 'dark';
 * const [darkMode, setDarkMode] = useLocalStorage<TDarkMode>('darkMode', 'light');
 */
// eslint-disable-next-line import/prefer-default-export
export const useLocalStorage = <T>(
  key: string,
  defaultValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState(() => getStorageValue<T>(key, defaultValue));

  useEffect(() => {
    if (typeof value === 'string') {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
};
