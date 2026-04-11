import { motion } from "framer-motion";

const AppShell = ({ theme, onToggleTheme, children }) => {
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl border shadow-xl transition-all duration-300 sm:rounded-[1.25rem] ${
        isDark
          ? "border-white/[0.08] bg-white/[0.04] shadow-black/50 backdrop-blur-xl"
          : "border-slate-200/90 bg-white shadow-slate-900/[0.06] backdrop-blur-xl"
      }`}
    >
      <header
        className={`flex items-center justify-between gap-4 border-b px-5 py-4 sm:px-6 sm:py-5 ${
          isDark ? "border-white/[0.08]" : "border-slate-100"
        }`}
      >
        <div className="min-w-0">
          <p
            className={`text-[11px] font-medium uppercase tracking-[0.12em] ${
              isDark ? "text-[#9CA3AF]" : "text-slate-500"
            }`}
          >
            Portafolio · 2026
          </p>
          <h1
            className={`mt-1 truncate text-[1.125rem] font-semibold leading-tight tracking-tight sm:text-xl ${
              isDark ? "text-[#F3F4F6]" : "text-slate-900"
            }`}
          >
            Click Counter Pro
          </h1>
        </div>
        <motion.button
          type="button"
          onClick={onToggleTheme}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          aria-label={
            isDark ? "Activar modo claro" : "Activar modo oscuro"
          }
          className={`shrink-0 rounded-lg border px-3 py-2 text-xs font-medium transition-all duration-200 ${
            isDark
              ? "border-white/10 bg-white/[0.06] text-[#E5E7EB] hover:bg-white/[0.1]"
              : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
          }`}
        >
          {isDark ? "Modo claro" : "Modo oscuro"}
        </motion.button>
      </header>

      <div className="px-5 py-5 sm:px-6 sm:py-6">{children}</div>
    </motion.div>
  );
};

export default AppShell;
