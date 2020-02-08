import React, { useLayoutEffect, useRef } from 'react';

import './style.scss';

const ThemeToggle = () => {
  const checkboxRef = useRef();

  const switchTheme = event => {
    const checked = event.target.checked;
    document
      .querySelector('body')
      .setAttribute('data-theme', checked ? 'light' : null);

    localStorage.setItem('milosdzeletovic-theme', checked ? 'light' : null);
  };

  useLayoutEffect(() => {
    const theme = localStorage.getItem('milosdzeletovic-theme');

    checkboxRef.current.checked = theme === 'light';

    document.querySelector('body').setAttribute('data-theme', theme);
  }, []);

  return (
    <div className="theme-toggle">
      <input
        ref={checkboxRef}
        id="theme-toggle"
        name="theme-toggle"
        type="checkbox"
        onChange={switchTheme}
        aria-label="Switch between Dark and Light mode"
      />
      <label htmlFor="theme-toggle">
        <div className="theme-toggle__thumb" />
        <span />
      </label>
    </div>
  );
};

export default ThemeToggle;
