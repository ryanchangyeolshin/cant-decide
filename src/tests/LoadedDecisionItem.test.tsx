import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import LoadedDecisionItem from '../components/LoadedDecisionItem';
import LoadedDecisionItemType from '../types/LoadedDecisionItemType';
import DecisionDataType from '../types/DecisionDataType';

afterEach(cleanup);

describe("This suit is to test the LoadedDecisionItem component", () => {
  const props: LoadedDecisionItemType = {
    decision: { _id: "192e8du1id", name: "What to eat?!", user: "johndoe@gmail.com", choices: ["Taco Bell", "KFC"] },
    setSelectedDecisionHandler: jest.fn((e: React.MouseEvent<HTMLElement>, decision: DecisionDataType) => "Decision Selected!")
  };

  test('Snapshot of LoadDecisionModal', () => {
    const { asFragment } = render(
      <LoadedDecisionItem
        decision={props.decision}
        setSelectedDecisionHandler={props.setSelectedDecisionHandler}
      />
    );
    expect(asFragment()).toMatchSnapshot()
  });

  test('that the login button is rendered', async () => {
    const { container } = await render(
      <LoadedDecisionItem
        decision={props.decision}
        setSelectedDecisionHandler={props.setSelectedDecisionHandler}
      />
    );
    const decisionText = container.querySelector('#decision-text') as HTMLElement;
    expect(decisionText.textContent).toBe(props.decision.name);
  });

  test('that the setSelectedDecisionHandler is called', async () => {
    const { container } = await render(
      <LoadedDecisionItem
        decision={props.decision}
        setSelectedDecisionHandler={props.setSelectedDecisionHandler}
      />
    );
    const loadedDecisionItemContainer = container.querySelector('.loaded-decision-item-container') as HTMLElement;
    fireEvent.click(loadedDecisionItemContainer)
    expect(props.setSelectedDecisionHandler).toBeCalled();
  });
});
