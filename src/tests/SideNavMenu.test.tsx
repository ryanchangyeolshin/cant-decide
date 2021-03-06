import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SideNavMenu from '../components/SideNavMenu';
import SideNavMenuType from '../types/SideNavMenuType';

afterEach(cleanup);

describe("This suit is to test the SideNavMenu component", () => {
  const props: SideNavMenuType = {
    sideMenu: false,
    toggleDrawer: jest.fn((open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => "toggled"),
  };

  test('Snapshot of SideNavMenu', () => {
    const { asFragment } = render(<SideNavMenu sideMenu={props.sideMenu} toggleDrawer={props.toggleDrawer} />);
    expect(asFragment()).toMatchSnapshot()
  });
});
