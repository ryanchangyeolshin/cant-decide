import React from 'react';
import { render, cleanup } from '@testing-library/react';
import LoadDecisionModal from '../components/LoadDecisionModal';
import LoadDecisionModalType from '../types/LoadDecisionModalType';

afterEach(cleanup);

describe("This suit is to test the LoadDecisionModal component", () => {
  const props: LoadDecisionModalType = {
    open: true,
    handleClose: (event: React.MouseEvent<HTMLElement>, modalType: string) => "closed the modal",
    decisions: [{ _id: "192e8du1id", name: "What to eat?!", user: "johndoe@gmail.com", choices: ["Taco Bell", "KFC"] }],
    loading: false
  };

  test('Snapshot of LoadDecisionModal', () => {
    render(
      <LoadDecisionModal
        open={true}
        handleClose={props.handleClose}
        decisions={props.decisions}
        loading={props.loading}
      />
    );
    const modal = document.querySelector("#load-decision-modal");
    expect(modal).toMatchSnapshot()
  });

  test('that the Load Decision button is rendered', async () => {
    render(
      <LoadDecisionModal
        open={true}
        handleClose={props.handleClose}
        decisions={props.decisions}
        loading={props.loading}
      />
    );
    const randomizeButton = document.querySelector('button') as HTMLElement;
    expect(randomizeButton.textContent).toBe("Load Decision");
  });
});
