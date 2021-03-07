import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DecisionSnackbar from '../components/DecisionSnackbar';
import DecisionSnackbarType from '../types/DecisionSnackbarType';

afterEach(cleanup);

describe("This suit is to test the SideNavMenu component", () => {
  const props: DecisionSnackbarType = {
    open: true,
    handleClose: (event?: React.SyntheticEvent, reason?: string) => "closed snackbar!"
  };

  test('Snapshot of SideNavMenu', () => {
    const { asFragment } = render(<DecisionSnackbar open={props.open} handleClose={props.handleClose} />);
    expect(asFragment()).toMatchSnapshot()
  });
});
