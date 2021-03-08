import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import LoadDecisionModal from '../components/LoadDecisionModal';
import LoadDecisionModalType from '../types/LoadDecisionModalType';

afterEach(cleanup);

describe("This suit is to test the LoadDecisionModal component", () => {
  const props: LoadDecisionModalType = {
    open: true,
    handleClose: jest.fn((event: React.MouseEvent<HTMLElement>, modalType: string) => "closed the modal"),
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

  test('that the decision text is rendered', async () => {
    render(
      <LoadDecisionModal
        open={true}
        handleClose={props.handleClose}
        decisions={props.decisions}
        loading={props.loading}
      />
    );
    const decisionText = document.querySelector('#decision-text') as HTMLElement;
    expect(decisionText.textContent).toBe(props.decisions[0].name);
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
    const loadDecisionButton = document.querySelector('button') as HTMLElement;
    expect(loadDecisionButton.textContent).toBe("Load Decision");
  });

  test('that the handleClose is called once the modal is exited', async () => {
    render(
      <LoadDecisionModal
        open={true}
        handleClose={props.handleClose}
        decisions={props.decisions}
        loading={props.loading}
      />
    );
    const loadedDecisionItemContainer = document.querySelector('.loaded-decision-item-container') as HTMLElement;
    fireEvent.click(loadedDecisionItemContainer);

    const loadDecisionButton = document.querySelector('button') as HTMLElement;
    fireEvent.click(loadDecisionButton);

    expect(props.handleClose).toBeCalled();
  });
});
