import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe("This suit is to test the App component", () => {
  test('Snapshot of App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot()
  });
});
