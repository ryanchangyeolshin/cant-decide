import React from 'react';
import { render, getByText, getByTestId, fireEvent, getByLabelText } from '@testing-library/react';
import InputContainer from '../components/InputContainer';
import InputContainerProps from '../types/InputContainerProps';

describe("This suit is to test the InputContainer component", () => {
  const props: InputContainerProps = {
    choice: "Taco Bell",
    handleKeyDown: jest.fn(() => "keydown"),
    handleChoiceChange: jest.fn(() => "handle choice change"),
    randomizeChoice: jest.fn(() => "randomize choice"),
  };

  test('Snapshot of ChoiceCardContainer', () => {
    const { asFragment } = render(
      <InputContainer
        choice={props.choice}
        handleKeyDown={props.handleKeyDown}
        handleChoiceChange={props.handleChoiceChange}
        randomizeChoice={props.randomizeChoice}
      />
    );
    expect(asFragment()).toMatchSnapshot()
  });

  test('that the choice text is displayed on the input field', async () => {
    const { container } = await render(
      <InputContainer
        choice={props.choice}
        handleKeyDown={props.handleKeyDown}
        handleChoiceChange={props.handleChoiceChange}
        randomizeChoice={props.randomizeChoice}
      />
    );

    const input: HTMLInputElement = container.querySelector("#standard-basic");
    expect(input.value).toBe(props.choice);
  });

  test('that the handleKeyDown and handleChoiceChange functions are called once the user presses a key on the input field', async () => {
    const { container } = await render(
      <InputContainer
        choice={props.choice}
        handleKeyDown={props.handleKeyDown}
        handleChoiceChange={props.handleChoiceChange}
        randomizeChoice={props.randomizeChoice}
      />
    );
    const input: HTMLInputElement = container.querySelector("#standard-basic");
    fireEvent.change(input, { target: { value: 'A' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(props.handleChoiceChange).toBeCalled();
    expect(props.handleKeyDown).toBeCalled();
  });

  test('that the RANDOMIZE button is rendered', async () => {
    const { container } = await render(
      <InputContainer
        choice={props.choice}
        handleKeyDown={props.handleKeyDown}
        handleChoiceChange={props.handleChoiceChange}
        randomizeChoice={props.randomizeChoice}
      />
    );
    const randomizeButton: HTMLElement = container.querySelector('button');
    expect(randomizeButton.textContent).toBe("Randomize");
  });
});
