import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (v: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  useEffect(() => {
    const item = typeof window !== 'undefined' ? window.localStorage.getItem(key) : false;
    if (item) {
      setStoredValue(JSON.parse(item) as T);
    }
  }, [key, setStoredValue]);

  const setValue = (value: T) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
}
