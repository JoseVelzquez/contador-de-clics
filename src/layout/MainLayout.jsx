const MainLayout = ({ theme, onToggleTheme, children }) => {
  return (
    <main
      className={`min-h-screen bg-gradient-to-b px-4 py-12 transition-colors duration-300 sm:px-6 ${
        theme === "dark"
          ? "from-slate-900 to-slate-950"
          : "from-slate-100 to-sky-50"
      }`}
    >
      <div className="mx-auto max-w-xl">
        <header className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Portafolio Frontend
            </p>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              Click Counter Pro
            </h1>
          </div>
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-xl border border-slate-300 bg-white/70 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            {theme === "dark" ? "Modo claro" : "Modo oscuro"}
          </button>
        </header>

        <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-glass backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70 sm:p-8">
          {children}
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
