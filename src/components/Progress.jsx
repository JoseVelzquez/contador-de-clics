import { motion } from "framer-motion";
import { memo, useCallback, useEffect, useState } from "react";

const Progress = ({
  count,
  goal,
  progress,
  remaining,
  reachedGoal,
  onGoalChange,
  theme
}) => {
  const isDark = theme === "dark";
  const [draft, setDraft] = useState(String(goal));

  useEffect(() => {
    setDraft(String(goal));
  }, [goal]);

  const applyDraft = useCallback(() => {
    const n = Math.floor(Number(draft));
    if (Number.isNaN(n) || String(draft).trim() === "") {
      setDraft(String(goal));
      return;
    }
    onGoalChange(draft);
  }, [draft, goal, onGoalChange]);

  const onBlur = useCallback(() => {
    applyDraft();
  }, [applyDraft]);

  const panelClass = isDark
    ? "rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 sm:p-5"
    : "rounded-xl border border-slate-100 bg-slate-50/80 p-4 sm:p-5";

  return (
    <motion.section
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.04, duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className={panelClass}
      aria-label="Progreso hacia la meta"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <label
            htmlFor="goal-input"
            className={`mb-1.5 block text-[11px] font-medium uppercase tracking-[0.1em] ${
              isDark ? "text-[#9CA3AF]" : "text-slate-500"
            }`}
          >
            Meta de clics
          </label>
          <input
            id="goal-input"
            type="number"
            min={1}
            max={9999}
            inputMode="numeric"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onBlur={onBlur}
            onKeyDown={(e) => {
              if (e.key === "Enter") applyDraft();
            }}
            className={`h-10 w-[5.25rem] rounded-lg border px-3 text-sm font-semibold tabular-nums outline-none transition-all duration-200 focus:ring-2 ${
              isDark
                ? "border-white/10 bg-[#0f172a]/80 text-[#F3F4F6] focus:border-emerald-500/40 focus:ring-emerald-500/20"
                : "border-slate-200 bg-white text-slate-900 focus:border-emerald-500/60 focus:ring-emerald-500/15"
            }`}
            aria-describedby="goal-hint"
          />
          <span id="goal-hint" className="sr-only">
            Entre 1 y 9999. Guarda al salir o con Enter.
          </span>
        </div>
        <div className="shrink-0 text-right">
          <p
            className={`text-[11px] font-medium uppercase tracking-[0.1em] ${
              isDark ? "text-[#9CA3AF]" : "text-slate-500"
            }`}
          >
            Progreso
          </p>
          <p
            className={`mt-1 text-2xl font-semibold tabular-nums leading-none sm:text-[1.75rem] ${
              isDark ? "text-[#F3F4F6]" : "text-slate-900"
            }`}
            aria-live="polite"
          >
            {Math.round(progress)}
            <span
              className={`text-base font-medium ${
                isDark ? "text-[#9CA3AF]" : "text-slate-500"
              }`}
            >
              %
            </span>
          </p>
        </div>
      </div>

      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
        aria-valuetext={`${Math.round(progress)} por ciento completado`}
        className="mt-4 space-y-2"
      >
        <div
          className={`h-2 w-full overflow-hidden rounded-full ${
            isDark ? "bg-white/[0.08]" : "bg-slate-200/90"
          }`}
        >
          <motion.div
            className="h-full rounded-full bg-emerald-500"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 150, damping: 26 }}
          />
        </div>
        <p
          className={`text-[13px] leading-snug ${
            isDark ? "text-[#9CA3AF]" : "text-slate-600"
          }`}
        >
          {reachedGoal
            ? "Listo. Ajusta la meta o reinicia el contador."
            : `${remaining} restantes · ${count} de ${goal}`}
        </p>
      </div>
    </motion.section>
  );
};

export default memo(Progress);
