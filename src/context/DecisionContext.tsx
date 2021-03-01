import React from 'react';
import { Decision } from '../interfaces/decision';

interface DecisionInterface {
  decision: Decision,
  setDecision: React.Dispatch<React.SetStateAction<Decision>>,
  winningChoice: string,
  setWinningChoice: React.Dispatch<React.SetStateAction<string>>
}

const DecisionContext = React.createContext<DecisionInterface>({
  decision: { name: "", choices: [] },
  setDecision: () => { },
  winningChoice: "",
  setWinningChoice: () => { }
});

export default DecisionContext;