import React from 'react';
import DecisionType from '../types/decision';

type DecisionState = {
  decision: DecisionType,
  setDecision: (decision: DecisionType) => void,
  winningChoice: string,
  setWinningChoice: (choice: string) => void
}

const DecisionContext = React.createContext<DecisionState>({
  decision: { name: "", choices: [] },
  setDecision: () => { },
  winningChoice: "",
  setWinningChoice: () => { }
});

export default DecisionContext;