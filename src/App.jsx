import Button from "./components/Button";
import Counter from "./components/Counter";
import { useCounter } from "./hooks/useCounter";
import MainLayout from "./layout/MainLayout";

const App = () => {
  const {
    count,
    goal,
    progress,
    remaining,
    reachedGoal,
    theme,
    isAnimating,
    setIsAnimating,
    increment,
    reset,
    toggleTheme
  } = useCounter();

  return (
    <MainLayout theme={theme} onToggleTheme={toggleTheme}>
      <div className="space-y-6">
        <Counter
          count={count}
          goal={goal}
          progress={progress}
          remaining={remaining}
          reachedGoal={reachedGoal}
          isAnimating={isAnimating}
          setIsAnimating={setIsAnimating}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Button onClick={increment} ariaLabel="Incrementar contador">
            +1 Clic
          </Button>
          <Button onClick={reset} variant="secondary" ariaLabel="Reiniciar contador">
            Reiniciar
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default App;
