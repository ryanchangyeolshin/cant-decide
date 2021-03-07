type SaveDecisionModalType = {
  open: boolean,
  handleClose: (event: React.MouseEvent<HTMLElement>) => void,
  handleOpenSnackbar: (event?: React.SyntheticEvent, reason?: string) => void,
};

export default SaveDecisionModalType;