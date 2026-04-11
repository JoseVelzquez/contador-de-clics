import { useCallback, useEffect, useMemo, useState } from "react";

const STORAGE_COUNT = "click-counter-value";
const STORAGE_THEME = "click-counter-theme";
const STORAGE_GOAL = "click-counter-goal";

const DEFAULT_GOAL = 100;
const MIN_GOAL = 1;
const MAX_GOAL = 9999;

const readNumber = (key, fallback) => {
  const raw = localStorage.getItem(key);
  const n = Number(raw);
  return Number.isNaN(n) ? fallback : n;
};

const getStoredCount = () => {
  const v = readNumber(STORAGE_COUNT, 0);
  return Math.max(0, Math.floor(v));
};

const getStoredTheme = () => {
  const stored = localStorage.getItem(STORAGE_THEME);
  return stored === "light" ? "light" : "dark";
};

const getStoredGoal = () => {
  const v = readNumber(STORAGE_GOAL, DEFAULT_GOAL);
  const g = Math.floor(v);
  if (g < MIN_GOAL || g > MAX_GOAL) return DEFAULT_GOAL;
  return g;
};

export const useCounter = () => {
  const [count, setCount] = useState(getStoredCount);
  const [theme, setTheme] = useState(getStoredTheme);
  const [goal, setGoal] = useState(getStoredGoal);

  useEffect(() => {
    localStorage.setItem(STORAGE_COUNT, String(count));
  }, [count]);

  useEffect(() => {
    localStorage.setItem(STORAGE_THEME, theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(STORAGE_GOAL, String(goal));
  }, [goal]);

  useEffect(() => {
    document.title = `Clicks: ${count} · Click Counter Pro`;
  }, [count]);

  const progress = useMemo(
    () => Math.min((count / goal) * 100, 100),
    [count, goal]
  );
  const remaining = Math.max(goal - count, 0);
  const reachedGoal = count >= goal;

  const increment = useCallback(() => {
    setCount((prev) => {
      if (prev >= goal) return prev;
      return prev + 1;
    });
  }, [goal]);

  const decrement = useCallback(() => {
    setCount((prev) => Math.max(0, prev - 1));
  }, []);

  const resetCount = useCallback(() => {
    setCount(0);
  }, []);

  const setGoalClamped = useCallback((value) => {
    const n = Math.floor(Number(value));
    if (Number.isNaN(n)) return;
    setGoal(Math.min(MAX_GOAL, Math.max(MIN_GOAL, n)));
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((c) => (c === "dark" ? "light" : "dark"));
  }, []);

  return {
    count,
    goal,
    setGoal: setGoalClamped,
    progress,
    remaining,
    reachedGoal,
    theme,
    increment,
    decrement,
    resetCount,
    toggleTheme
  };
};
