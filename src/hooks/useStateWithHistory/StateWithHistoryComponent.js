import { useStateWithHistory } from "./useStateWithHistory";

export const StateWithHistoryComponent = () => {
  const [value, set, { history, goback, forward }] = useStateWithHistory(0);

  const onClick = () => {
    const newVal = value + 1;
    set(newVal);
  };
  const onBack = () => {
    goback();
  };
  const onForward = () => {
    forward();
  };

  return (
    <>
      <div>{value}</div>
      <p>{history.toString()}</p>
      <button onClick={onBack}>BACK</button>
      <button onClick={onClick}>Aggiungi elemento</button>
      <button onClick={onForward}>FORWARD</button>
    </>
  );
};
