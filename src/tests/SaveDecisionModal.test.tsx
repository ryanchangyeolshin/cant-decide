import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SaveDecisionModal from '../components/SaveDecisionModal';
import SaveDecisionModalType from '../types/SaveDecisionModalType';

afterEach(cleanup);

describe("This suit is to test the SideNavMenu component", () => {
  const props: SaveDecisionModalType = {
    open: true,
    handleClose: (event: React.MouseEvent<HTMLElement>) => "closed modal!",
    handleOpenSnackbar: (event?: React.SyntheticEvent, reason?: string) => "opened snackbar!"
  };

  test('Snapshot of SideNavMenu', () => {
    const { asFragment } = render(
      <SaveDecisionModal
        open={props.open}
        handleClose={props.handleClose}
        handleOpenSnackbar={props.handleOpenSnackbar}
      />
    );
    expect(asFragment()).toMatchSnapshot()
  });
});
