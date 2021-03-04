import React from 'react';
import { render } from '@testing-library/react';
import ContentContainer from '../components/ContentContainer';

describe("This suit is to test the ContentContainer component", () => {
  test('Snapshot of ContentContainer', () => {
    const { asFragment } = render(<ContentContainer />);
    expect(asFragment()).toMatchSnapshot()
  });
});