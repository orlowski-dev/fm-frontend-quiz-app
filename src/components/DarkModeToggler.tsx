import { useEffect, useState } from "react";

const DarkModeToggler = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useState(prefersDark);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="dark-mode-toggler">
      {!darkMode ? (
        <img src="/assets/images/icon-sun-dark.svg" alt="sun icon" />
      ) : (
        <img src="/assets/images/icon-sun-light.svg" alt="sun icon" />
      )}
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        aria-label="Toggle dark mode"
        className={darkMode ? "active" : undefined}
      ></button>
      {!darkMode ? (
        <img src="/assets/images/icon-moon-dark.svg" alt="moon icon" />
      ) : (
        <img src="/assets/images/icon-moon-light.svg" alt="moon icon" />
      )}
    </div>
  );
};

export default DarkModeToggler;
