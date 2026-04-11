import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const panel = {
  hidden: { opacity: 0, scale: 0.94, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 380, damping: 28 }
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 8,
    transition: { duration: 0.18 }
  }
};

const ConfirmResetModal = ({ open, onCancel, onConfirm }) => {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onCancel();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onCancel]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="reset-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.button
            type="button"
            aria-label="Cerrar diálogo"
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm dark:bg-[#020617]/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCancel}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="reset-title"
            aria-describedby="reset-desc"
            className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-white/90 p-5 shadow-xl shadow-black/20 backdrop-blur-xl dark:border-white/10 dark:bg-[#0B1120]/95 dark:shadow-black/50 sm:p-6"
            variants={panel}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <h2
              id="reset-title"
              className="text-base font-bold text-slate-900 dark:text-[#E5E7EB] sm:text-lg"
            >
              ¿Reiniciar contador?
            </h2>
            <p
              id="reset-desc"
              className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-[#9CA3AF]"
            >
              El valor volverá a 0. Tu meta y preferencias de tema se mantienen.
            </p>
            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <motion.button
                type="button"
                onClick={onCancel}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl border border-slate-300/80 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition-all hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-[#E5E7EB] dark:hover:bg-white/10 sm:rounded-xl"
              >
                Cancelar
              </motion.button>
              <motion.button
                type="button"
                onClick={onConfirm}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl bg-[#EF4444] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition-all hover:brightness-110"
              >
                Sí, reiniciar
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmResetModal;
