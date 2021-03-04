import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NavMenuBar from '../components/NavMenuBar';

afterEach(cleanup);

describe("This suit is to test the NavMenuBar component", () => {
  test('Snapshot of NavMenuBar', () => {
    const { asFragment } = render(<NavMenuBar />);
    expect(asFragment()).toMatchSnapshot()
  });
});
