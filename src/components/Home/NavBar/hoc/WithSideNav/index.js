import React from 'react';
import { SideNavContext } from './context'

export const withSideNav = (Component) => (props) => {
  const [display, setDisplay] = React.useState(false);
  const toggleSideNav = () => {
    setDisplay(!display);
  };
  return (
    <SideNavContext.Provider value={{
      showSideNav: display,
      toggleSideNav,
    }}>
      <Component {...props} />
    </SideNavContext.Provider>
  );
}

export { SideNavContext };
