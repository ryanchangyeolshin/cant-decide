import React from 'react';
import DecisionDataType from './DecisionDataType';

type LoadedDecisionItemType = {
  decision: DecisionDataType,
  setSelectedDecisionHandler: (e: React.MouseEvent<HTMLElement>, decision: DecisionDataType) => void
};

export default LoadedDecisionItemType;