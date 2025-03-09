'use client';

import { LV_APP_THEME } from '@/lib/constants';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

type APP_THEME_TYPE = 'light' | 'dark';

function ThemeSwitch() {
  const [theme, setTheme] = useState<APP_THEME_TYPE>(LV_APP_THEME.LIGHT);

  const checkStoredTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    const preferColorScheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (
      storedTheme === LV_APP_THEME.DARK ||
      (storedTheme === null && preferColorScheme)
    ) {
      document.body.classList.add(LV_APP_THEME.DARK);
      localStorage.setItem('theme', LV_APP_THEME.DARK);
      setTheme(LV_APP_THEME.DARK);
      return;
    }

    document.body.classList.add(LV_APP_THEME.LIGHT);
    localStorage.setItem('theme', LV_APP_THEME.LIGHT);
    setTheme(LV_APP_THEME.LIGHT);
  };

  const toggleTheme = (theme: APP_THEME_TYPE) => {
    document.body.classList.remove(LV_APP_THEME.LIGHT, LV_APP_THEME.DARK);
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
    setTheme(theme);
  };

  useEffect(() => {
    checkStoredTheme();
  }, []);

  return (
    <Button
      variant='secondary'
      size='icon'
      className='mr-2 rounded-full'
      onClick={() =>
        toggleTheme(
          theme === LV_APP_THEME.LIGHT ? LV_APP_THEME.DARK : LV_APP_THEME.LIGHT
        )
      }
    >
      {theme === LV_APP_THEME.LIGHT ? (
        <Moon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      ) : (
        <Sun className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}

export default ThemeSwitch;
