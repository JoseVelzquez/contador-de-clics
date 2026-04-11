import { motion } from "framer-motion";
import { memo } from "react";

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const ActionButtons = ({
  onIncrement,
  onDecrement,
  onResetRequest,
  incrementDisabled,
  decrementDisabled,
  theme
}) => {
  const isDark = theme === "dark";
  const ringOffset = isDark
    ? "focus-visible:ring-offset-[#0B1120]"
    : "focus-visible:ring-offset-white";

  const motionTap = { scale: 0.985 };
  const motionHover = { y: -1 };

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.06, duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-4"
    >
      <p
        className={`text-[11px] font-medium uppercase tracking-[0.1em] ${
          isDark ? "text-[#9CA3AF]" : "text-slate-500"
        }`}
      >
        Acciones
      </p>

      <div className="grid grid-cols-2 gap-3">
        {/* Primario: gradiente + sombra de color + aro interior */}
        <motion.button
          type="button"
          onClick={onIncrement}
          disabled={incrementDisabled}
          whileHover={incrementDisabled ? {} : motionHover}
          whileTap={incrementDisabled ? {} : motionTap}
          aria-label="Incrementar contador en uno"
          className={`relative flex h-11 items-center justify-center overflow-hidden rounded-xl px-3 text-sm font-semibold tracking-tight text-white transition-all duration-200 disabled:pointer-events-none disabled:opacity-40 ${focus} focus-visible:ring-emerald-400/90 ${ringOffset} ${
            isDark
              ? "bg-gradient-to-b from-emerald-700 to-emerald-900 shadow-md shadow-black/40 ring-1 ring-inset ring-white/5 enabled:hover:from-emerald-600 enabled:hover:to-emerald-800 enabled:active:shadow-sm enabled:hover:shadow-black/50"
              : "bg-gradient-to-b from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/25 ring-1 ring-inset ring-white/20 enabled:hover:from-emerald-300 enabled:hover:to-emerald-500 enabled:hover:shadow-emerald-500/35 enabled:active:shadow-md"
          }`}
        >
          <span className="relative z-10">+1 Clic</span>
          {!isDark && (
            <span
              className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent opacity-80"
              aria-hidden
            />
          )}
        </motion.button>

        {/* Secundario: superficie glass / muted */}
        <motion.button
          type="button"
          onClick={onDecrement}
          disabled={decrementDisabled}
          whileHover={decrementDisabled ? {} : motionHover}
          whileTap={decrementDisabled ? {} : motionTap}
          aria-label="Decrementar contador en uno"
          className={`flex h-11 items-center justify-center rounded-xl border px-3 text-sm font-semibold tracking-tight shadow-sm transition-all duration-200 disabled:pointer-events-none disabled:opacity-40 ${focus} focus-visible:ring-slate-400/80 ${ringOffset} ${
            isDark
              ? "border-white/[0.12] bg-white/[0.06] text-[#F3F4F6] backdrop-blur-sm hover:border-white/[0.18] hover:bg-white/[0.1] active:bg-white/[0.08]"
              : "border-slate-200/90 bg-slate-100/90 text-slate-700 hover:border-slate-300 hover:bg-slate-200/90 active:bg-slate-200"
          }`}
        >
          −1 Clic
        </motion.button>
      </div>

      <div
        className={`border-t pt-4 dark:border-white/[0.08] ${
          isDark ? "" : "border-slate-100"
        }`}
      >
        {/* Destructivo: outline premium + hover con relleno suave */}
        <motion.button
          type="button"
          onClick={onResetRequest}
          whileHover={motionHover}
          whileTap={motionTap}
          aria-label="Abrir confirmación para reiniciar contador"
          className={`flex h-11 w-full items-center justify-center rounded-xl border px-4 text-sm font-semibold tracking-tight transition-all duration-200 ${focus} focus-visible:ring-red-400/80 ${ringOffset} ${
            isDark
              ? "border-red-500/35 bg-red-500/[0.08] text-red-300 shadow-sm shadow-red-950/20 hover:border-red-500/50 hover:bg-red-500/[0.14] hover:text-red-200 active:bg-red-500/[0.1]"
              : "border-red-200 bg-red-50/90 text-red-600 hover:border-red-300 hover:bg-red-100/90 active:bg-red-100"
          }`}
        >
          Reiniciar contador
        </motion.button>
      </div>
    </motion.div>
  );
};

export default memo(ActionButtons);
