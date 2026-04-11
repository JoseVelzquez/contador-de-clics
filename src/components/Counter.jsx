import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] }
  }
};

const Counter = ({ count, reachedGoal, theme }) => {
  const isDark = theme === "dark";

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="text-center"
      aria-live="polite"
      aria-atomic="true"
    >
      <p
        className={`text-[11px] font-medium uppercase tracking-[0.14em] ${
          isDark ? "text-[#9CA3AF]" : "text-slate-500"
        }`}
      >
        Contador de clics
      </p>
      <div className="relative mt-3 flex min-h-[3.25rem] items-center justify-center py-1 sm:mt-4 sm:min-h-[3.5rem]">
        <motion.span
          key={count}
          role="status"
          aria-label={`Clics actuales: ${count}`}
          initial={{ scale: 0.94, opacity: 0.55 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
          className={`select-none text-[2.75rem] font-semibold tabular-nums leading-none tracking-tight sm:text-5xl ${
            isDark ? "text-[#F9FAFB]" : "text-slate-900"
          }`}
        >
          {count}
        </motion.span>
      </div>
      {reachedGoal && (
        <motion.p
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-3 inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium ${
            isDark
              ? "bg-emerald-500/15 text-emerald-400"
              : "bg-emerald-50 text-emerald-700"
          }`}
        >
          Meta alcanzada
        </motion.p>
      )}
    </motion.section>
  );
};

export default Counter;
