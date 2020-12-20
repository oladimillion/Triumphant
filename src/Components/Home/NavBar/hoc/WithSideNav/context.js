import React from 'react';

export const SideNavContext = React.createContext({
  showSideNav: false,
  toggleSideNav: (show) => { },
});
