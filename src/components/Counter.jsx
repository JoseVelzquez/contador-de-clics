import { useEffect } from "react";

const Counter = ({
  count,
  goal,
  progress,
  remaining,
  reachedGoal,
  isAnimating,
  setIsAnimating
}) => {
  useEffect(() => {
    if (!isAnimating) return undefined;

    const timer = setTimeout(() => setIsAnimating(false), 260);
    return () => clearTimeout(timer);
  }, [isAnimating, setIsAnimating]);

  return (
    <section className="space-y-6">
      <div className="text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Contador de clics
        </p>
        <p
          className={`mt-2 text-6xl font-extrabold text-slate-900 transition dark:text-white sm:text-7xl ${isAnimating ? "animate-pulseScale" : ""}`}
        >
          {count}
        </p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
          <span>Meta: {goal} clics</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all duration-300 ease-out dark:bg-blue-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {reachedGoal
            ? "Objetivo completado. Excelente consistencia."
            : `Te faltan ${remaining} clics para completar el objetivo.`}
        </p>
      </div>
    </section>
  );
};

export default Counter;
