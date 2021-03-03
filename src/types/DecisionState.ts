import DecisionType from './DecisionType';

type DecisionState = {
  decision: DecisionType,
  setDecision: (decision: DecisionType) => void,
  winningChoice: string,
  setWinningChoice: (choice: string) => void
}

export default DecisionState;