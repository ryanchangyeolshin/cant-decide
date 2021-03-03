import React, { useState } from 'react';
import DecisionContext from './DecisionContext';
import DecisionType from '../types/DecisionType';

const DecisionProvider: React.FC = ({ children }) => {
  const [decision, setDecision] = useState<DecisionType>({ name: "", choices: [] });
  const [winningChoice, setWinningChoice] = useState<string>("");

  return (
    <DecisionContext.Provider
      value={{
        decision: decision,
        setDecision: setDecision,
        winningChoice: winningChoice,
        setWinningChoice: setWinningChoice,
      }}
    >
      {children}
    </DecisionContext.Provider>
  );
}

export default DecisionProvider;