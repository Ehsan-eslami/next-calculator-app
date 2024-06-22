'use client'

import { useEffect, useState } from "react"

export default function ThemeProvider() {
  const [theme, setTheme] = useState('themeOne');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = window.localStorage.getItem("preferred-theme");
      if (storedTheme !== null) {
        setTheme(storedTheme);
        applyTheme(storedTheme);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      applyTheme(theme);
    }
  }, [theme]);

  const applyTheme = (selectedTheme: string) => {
    const root = document.documentElement;
    root.classList.remove('themeOne', 'themeTwo', 'themeThree');
    root.classList.add(selectedTheme);
  };

  const setThemeOne = () => {
    setTheme('themeOne');
    window.localStorage.setItem('preferred-theme', 'themeOne');
  };

  const setThemeTwo = () => {
    setTheme('themeTwo');
    window.localStorage.setItem('preferred-theme', 'themeTwo');
  };

  const setThemeThree = () => {
    setTheme('themeThree');
    window.localStorage.setItem('preferred-theme', 'themeThree');
  };

  return (
    <div className="theme-provider">
      <div className="col-start-2 flex justify-between gap-2 px-1 text-xs">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <h3 className="text-base">Theme</h3>
      <div className="theme-toggle">
        <div className={theme === "themeOne" ? "toggle-btn" : "w-3 h-3  m-1 rounded-full hover:opacity-75"} onClick={setThemeOne}></div>
        <div className={theme === "themeTwo" ? "toggle-btn" : "w-3 h-3 m-1 rounded-full hover:opacity-75"} onClick={setThemeTwo}></div>
        <div className={theme === "themeThree" ? "toggle-btn" : "w-3 h-3 m-1 rounded-full hover:opacity-75"} onClick={setThemeThree}></div>
      </div>
    </div>
  );
}
