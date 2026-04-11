const MainLayout = ({ theme, children }) => {
  const isDark = theme === "dark";

  const safePad =
    "pb-[max(0.75rem,env(safe-area-inset-bottom,0px))] pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pt-[max(0.75rem,env(safe-area-inset-top,0px))] sm:px-6 sm:py-5";

  return (
    <main
      className={`relative isolate flex min-h-[100dvh] items-center justify-center overflow-x-hidden transition-colors duration-500 ${safePad} ${
        isDark
          ? "bg-[#060912]"
          : "bg-gradient-to-br from-sky-100 via-white to-emerald-50"
      }`}
    >
      {isDark && (
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden
        >
          {/* Base: gradiente diagonal (profundidad, sin negro puro) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#0f172a] to-[#020617]" />

          {/* Luz difusa esquina superior-izquierda (azul índigo) */}
          <div className="absolute -left-[20%] -top-[25%] h-[min(28rem,55vh)] w-[min(32rem,90vw)] rounded-full bg-[#3B82F6]/[0.24] blur-3xl sm:h-[32rem] sm:w-[36rem]" />

          {/* Luz opuesta inferior-derecha (violeta) */}
          <div className="absolute -bottom-[20%] -right-[15%] h-[min(26rem,50vh)] w-[min(28rem,85vw)] rounded-full bg-[#7C3AED]/[0.2] blur-3xl sm:h-[30rem] sm:w-[32rem]" />

          {/* Acento central suave (índigo) — “limpio” en el foco */}
          <div className="absolute left-1/2 top-1/2 h-[min(24rem,45vh)] w-[min(100%,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.08] blur-3xl" />

          {/* Viñeta radial: oscurece bordes, centra la atención en la card */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_48%,transparent_0%,rgba(2,6,12,0.55)_100%)]" />

          {/* Línea de horizonte muy sutil (capa extra, estilo fintech) */}
          <div className="absolute inset-x-0 top-[38%] h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
        </div>
      )}

      {/* Contenedor card + glow “floating” */}
      <div className="relative z-10 w-full max-w-md">
        {isDark && (
          <div
            className="pointer-events-none absolute left-1/2 top-[42%] z-0 w-[108%] max-w-[calc(100%+2.5rem)] -translate-x-1/2 -translate-y-1/2"
            aria-hidden
          >
            {/* Halo detrás de la card: mezcla azul/violeta, blur fuerte */}
            <div className="mx-auto aspect-[5/6] max-h-[min(34rem,78vh)] w-full rounded-[2rem] bg-gradient-to-b from-sky-400/35 via-violet-500/[0.28] to-indigo-600/25 opacity-80 blur-3xl" />
            <div className="absolute inset-[12%] rounded-[1.75rem] bg-indigo-400/15 blur-2xl" />
          </div>
        )}

        <div className="relative z-10">{children}</div>
      </div>
    </main>
  );
};

export default MainLayout;
