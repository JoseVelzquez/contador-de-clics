const variantClasses = {
  primary:
    "bg-emerald-500 text-white hover:bg-emerald-400 active:bg-emerald-600 dark:bg-blue-500 dark:hover:bg-blue-400 dark:active:bg-blue-600",
  secondary:
    "bg-slate-200 text-slate-900 hover:bg-slate-300 active:bg-slate-400 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 dark:active:bg-slate-600"
};

const Button = ({ children, onClick, variant = "primary", ariaLabel }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`w-full rounded-2xl px-4 py-3 text-sm font-semibold tracking-wide shadow-glass transition duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
