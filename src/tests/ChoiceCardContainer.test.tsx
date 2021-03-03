import React, { useContext } from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import ChoiceCardContainer from '../components/ChoiceCardContainer';
import ChoiceCardContainerProps from '../types/ChoiceCardContainerProps';

describe("This suit is to test the ChoiceCardContainer component", () => {
  const props: ChoiceCardContainerProps = {
    choice: "Taco Bell",
    index: 1,
    removeChoice: jest.fn(() => "hello"),
  };

  test('Snapshot of ChoiceCardContainer', () => {
    const { asFragment } = render(<ChoiceCardContainer choice={props.choice} index={props.index} removeChoice={props.removeChoice} />);
    expect(asFragment()).toMatchSnapshot()
  });

  test('that the choice text is rendered', async () => {
    const { getByText } = await render(<ChoiceCardContainer choice={props.choice} index={props.index} removeChoice={props.removeChoice} />);
    expect(getByText(props.choice)).toBeInTheDocument();
  });

  test('that the index badge is rendered', async () => {
    const { getByText } = await render(<ChoiceCardContainer choice={props.choice} index={props.index} removeChoice={props.removeChoice} />);
    expect(getByText(props.index + 1)).toBeInTheDocument();
  });

  test('that the delete trash icon is rendered', async () => {
    const { getByLabelText } = await render(<ChoiceCardContainer choice={props.choice} index={props.index} removeChoice={props.removeChoice} />);
    expect(getByLabelText("delete")).toBeInTheDocument();
  });

  test('that removeChoice function to be called after clicking the delete icon', async () => {
    const { container } = await render(<ChoiceCardContainer choice={props.choice} index={props.index} removeChoice={props.removeChoice} />);
    const deleteIcon = getByTestId(container, "delete-icon");
    fireEvent.click(deleteIcon);
    expect(props.removeChoice).toBeCalled();
  });
});
