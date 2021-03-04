import React from 'react';
import { render, cleanup } from '@testing-library/react';
import WinningChoiceContainer from '../components/WinningChoiceContainer';

afterEach(cleanup);

describe("This suit is to test the WinningChoiceContainer component", () => {
  test('Snapshot of WinningChoiceContainer', () => {
    const { asFragment } = render(<WinningChoiceContainer />);
    expect(asFragment()).toMatchSnapshot()
  });

  test('that the RANDOMIZE button is rendered', async () => {
    const { container } = await render(<WinningChoiceContainer />);
    const returnHomeButton = container.querySelector('button') as HTMLElement;
    expect(returnHomeButton.textContent).toBe("Return Home");
  });
});
