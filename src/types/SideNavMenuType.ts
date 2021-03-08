type SideNavMenuType = {
  sideMenu: boolean,
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void,
  handleOpenModal: (event: React.MouseEvent<HTMLElement>, modalType: string) => void,
}

export default SideNavMenuType;