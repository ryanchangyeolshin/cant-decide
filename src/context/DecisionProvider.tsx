import React, { useState } from 'react';
import DecisionContext from './DecisionContext';

export default function DecisionProvider(props: React.Props<any>) {
  const [decision, setDecision] = useState({ name: "", choices: [] });
  const [winningChoice, setWinningChoice] = useState("");

  return (
    <DecisionContext.Provider
      value={{
        decision: decision,
        setDecision: setDecision,
        winningChoice: winningChoice,
        setWinningChoice: setWinningChoice,
      }}
    >
      {props.children}
    </DecisionContext.Provider>
  );
}