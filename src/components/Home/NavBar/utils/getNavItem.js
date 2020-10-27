import React from 'react';
import { useWindowScroll } from '../hooks/useWindowScroll'

export const getNavItem = (Component, showSideNav) => (props) => {
  const [section] = useWindowScroll(showSideNav)
  const { href } = props;
  const active = href === section
  return <Component {...props} active={active} />
}

