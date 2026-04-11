import { useCallback, useState } from "react";
import ActionButtons from "./components/ActionButtons";
import AppShell from "./components/AppShell";
import ConfirmResetModal from "./components/ConfirmResetModal";
import Counter from "./components/Counter";
import Progress from "./components/Progress";
import { useCounter } from "./hooks/useCounter";
import MainLayout from "./layout/MainLayout";

const App = () => {
  const {
    count,
    goal,
    setGoal,
    progress,
    remaining,
    reachedGoal,
    theme,
    increment,
    decrement,
    resetCount,
    toggleTheme
  } = useCounter();

  const [resetOpen, setResetOpen] = useState(false);

  const onResetRequest = useCallback(() => setResetOpen(true), []);
  const onCancelReset = useCallback(() => setResetOpen(false), []);
  const onConfirmReset = useCallback(() => {
    resetCount();
    setResetOpen(false);
  }, [resetCount]);

  return (
    <MainLayout theme={theme}>
      <AppShell theme={theme} onToggleTheme={toggleTheme}>
        <div className="flex flex-col gap-6 sm:gap-7">
          <Counter count={count} reachedGoal={reachedGoal} theme={theme} />
          <Progress
            count={count}
            goal={goal}
            progress={progress}
            remaining={remaining}
            reachedGoal={reachedGoal}
            onGoalChange={setGoal}
            theme={theme}
          />
          <ActionButtons
            onIncrement={increment}
            onDecrement={decrement}
            onResetRequest={onResetRequest}
            incrementDisabled={reachedGoal}
            decrementDisabled={count <= 0}
            theme={theme}
          />
        </div>
      </AppShell>

      <ConfirmResetModal
        open={resetOpen}
        onCancel={onCancelReset}
        onConfirm={onConfirmReset}
      />
    </MainLayout>
  );
};

export default App;
