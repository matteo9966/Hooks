import { useState, useCallback, useRef } from "react";

export const useStateWithHistory = (initialValue, { capacity = 10 } = {}) => {
  const [state, setState] = useState(initialValue);
  //you need a history of data:
  const stateHistory = useRef([initialValue]); //all state values will be inside here
  const HEAD = useRef(0); // the pointer to the head!

  //set is a function that sets the value of state and updates the history starting from pointer!

  const set = useCallback(
    (value) => {
      //value can be a function or a value, if its a function execute it and to eval the new state
      let newvalue = typeof value === "function" ? value(state) : value;

      //now i must check if the value at HEAD position is the same
      //if its not the same i must update history and remove all items afer
      //the new added item
      const currentValue = stateHistory.current[HEAD.current];
      if (currentValue !== newvalue) {
        stateHistory.current.splice(HEAD.current + 1); // remove all items after current
        stateHistory.current.push(newvalue);
        HEAD.current += 1;
        console.log(HEAD.current);
      }
      if (stateHistory.current.length > capacity) {
        stateHistory.current.shift();
        HEAD.current--;
      }
      setState(newvalue);
    },
    [state, capacity]
  );

  //with this function i can travel back in time!
  const forward = useCallback(() => {
    const lastIndex = stateHistory.current.length - 1;
    if (HEAD.current < lastIndex) {
      HEAD.current = HEAD.current + 1;
      setState(stateHistory.current[HEAD.current]);
    }
  }, []);

  const goback = useCallback(() => {
    if (HEAD.current > 0 && stateHistory.current.length > 0) {
      HEAD.current--;
      setState(stateHistory.current[HEAD.current]);
    }
  }, []);

  return [
    state,
    set,
    { history: stateHistory.current, forward: forward, goback: goback }
  ];
};
