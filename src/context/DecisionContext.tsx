import React from 'react';
import DecisionState from '../types/DecisionState';

const DecisionContext = React.createContext<DecisionState>({
  decision: { name: "", choices: [] },
  setDecision: () => { },
  winningChoice: "",
  setWinningChoice: () => { }
});

export default DecisionContext;