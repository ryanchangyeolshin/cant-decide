type SideNavMenuType = {
  sideMenu: boolean,
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void,
  handleOpenModal: (event: React.MouseEvent<HTMLElement>) => void,
}

export default SideNavMenuType;