import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ContentContainer from '../components/ContentContainer';

afterEach(cleanup);

describe("This suit is to test the ContentContainer component", () => {
  test('Snapshot of ContentContainer', () => {
    const { asFragment } = render(<ContentContainer />);
    expect(asFragment()).toMatchSnapshot()
  });
});