import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import SideNavMenu from '../components/SideNavMenu';
import SideNavMenuType from '../types/SideNavMenuType';

afterEach(cleanup);

describe("This suit is to test the SideNavMenu component", () => {
  const props: SideNavMenuType = {
    sideMenu: false,
    toggleDrawer: jest.fn((open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => "toggled"),
    handleOpenModal: jest.fn((event: React.MouseEvent<HTMLElement>) => "open modal!"),
  };

  test('Snapshot of SideNavMenu', () => {
    const { asFragment } = render(<SideNavMenu sideMenu={props.sideMenu} toggleDrawer={props.toggleDrawer} handleOpenModal={props.handleOpenModal} />);
    expect(asFragment()).toMatchSnapshot()
  });
});
