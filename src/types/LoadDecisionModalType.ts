import DecisionDataType from './DecisionDataType';

type LoadDecisionModalType = {
  open: boolean,
  handleClose: (event: React.MouseEvent<HTMLElement>, modalType: string) => void,
  decisions: DecisionDataType[],
  loading: boolean
};

export default LoadDecisionModalType;