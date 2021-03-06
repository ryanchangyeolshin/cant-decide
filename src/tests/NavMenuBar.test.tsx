import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import NavMenuBar from '../components/NavMenuBar';
import NavMenuBarType from '../types/NavMenuBarType';

afterEach(cleanup);

describe("This suit is to test the NavMenuBar component", () => {
  const props: NavMenuBarType = {
    toggleDrawer: jest.fn((open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => "toggled"),
  };

  test('Snapshot of NavMenuBar', () => {
    const { asFragment } = render(<NavMenuBar toggleDrawer={props.toggleDrawer} />);
    expect(asFragment()).toMatchSnapshot()
  });

  test('that the login button is rendered', async () => {
    const { container } = await render(<NavMenuBar toggleDrawer={props.toggleDrawer} />);
    const returnHomeButton = container.querySelector('.login-button') as HTMLElement;
    expect(returnHomeButton.textContent).toBe("Login");
  });

  test('that the toggleDrawer is called once the Login button is clicked', async () => {
    const { container } = await render(<NavMenuBar toggleDrawer={props.toggleDrawer} />);
    const loginButton = container.querySelector('.login-button') as HTMLElement;
    fireEvent.keyDown(loginButton);
    expect(props.toggleDrawer).toBeCalled();
  });
});
