import React from 'react';
import { render, cleanup } from '@testing-library/react';
import LoadDecisionModal from '../components/LoadDecisionModal';
import LoadDecisionModalType from '../types/LoadDecisionModalType';

afterEach(cleanup);

jest.useFakeTimers();

describe("This suit is to test the LoadDecisionModal component", () => {
  const props: LoadDecisionModalType = {
    open: true,
    handleClose: (event: React.MouseEvent<HTMLElement>, modalType: string) => "closed the modal",
    decisions: [{ _id: "192e8du1id", name: "What to eat?!", user: "johndoe@gmail.com", choices: ["Taco Bell", "KFC"] }],
    loading: false
  };

  test('Snapshot of LoadDecisionModal', () => {
    const { asFragment } = render(
      <LoadDecisionModal
        open={true}
        handleClose={props.handleClose}
        decisions={props.decisions}
        loading={props.loading}
      />
    );
    jest.advanceTimersByTime(30000);
    expect(asFragment()).toMatchSnapshot()
  });
});
