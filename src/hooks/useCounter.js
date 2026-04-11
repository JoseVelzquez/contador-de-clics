import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "click-counter-value";
const THEME_KEY = "click-counter-theme";
const GOAL = 100;

const getStoredCounter = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  const value = Number(stored);
  return Number.isNaN(value) ? 0 : Math.max(0, value);
};

const getStoredTheme = () => {
  const storedTheme = localStorage.getItem(THEME_KEY);
  return storedTheme === "light" ? "light" : "dark";
};

export const useCounter = () => {
  const [count, setCount] = useState(() => getStoredCounter());
  const [theme, setTheme] = useState(() => getStoredTheme());
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(count));
  }, [count]);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const increment = () => {
    setCount((prev) => prev + 1);
    setIsAnimating(true);
  };

  const reset = () => {
    const shouldReset = window.confirm(
      "Se reiniciara el contador a 0. Deseas continuar?"
    );

    if (shouldReset) {
      setCount(0);
    }
  };

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const progress = useMemo(() => Math.min((count / GOAL) * 100, 100), [count]);
  const remaining = Math.max(GOAL - count, 0);
  const reachedGoal = count >= GOAL;

  return {
    count,
    goal: GOAL,
    progress,
    remaining,
    reachedGoal,
    theme,
    isAnimating,
    setIsAnimating,
    increment,
    reset,
    toggleTheme
  };
};
