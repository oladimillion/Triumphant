import React from 'react';
import styled from 'styled-components';
import { SideNav } from './SideNav';
import { getNavItem } from './utils/getNavItem';
import { withSideNav, SideNavContext } from './hoc/WithSideNav'

const Header = styled.header`
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  height: 100px;

  @media (max-width: 1220px) {
    padding: 0 10px;
  }

  @media (max-width: 700px) {
    height: 60px;
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: 700px) {
    width: 100%;
  }
`

const LogoLink = styled.a`
  margin: auto 12px;
  margin-left: 0;
  display: block;
  text-decoration: none;
  position: relative;
  top: -5px;

  @media (max-width: 700px) {
    top: 0px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 0;
  }
`

const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
  font-family: Roboto;
  color: var(--primary-color);
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.2);

  @media (max-width: 700px) {
    font-size: 20px;
  }
`

const NavItemWrapper = styled.div`
  flex: 1;
  max-width: 50%;

  @media (max-width: 900px) {
    max-width: 65%;
  }

  @media (max-width: 700px) {
    display: none;
  }
`

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
`

const Links = styled.a`
  display: inline-block;
  line-height: 84px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: ${({ active }) => active ? '#0F0E0F' : '#9E9BA3' };

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: ${({ active }) => active ? '#0F0E0F' : '#9E9BA3' };
  }
`

const MobileMenu = styled.div`
  font-size: 30px;
  display: none;
  position: absolute;
  left: 0px;
  margin-top: auto;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  @media (max-width: 700px) {
    display: block;
  }
`

const NavItem = getNavItem(Links)

export const NavBar = withSideNav(() => {

  const { toggleSideNav } = React.useContext(SideNavContext)

  return (
    <Header>
      <Flex>
        <MobileMenu onClick={toggleSideNav}>&#8801;</MobileMenu>
        <LogoLink href="#">
          <Logo>Triumphant</Logo>
        </LogoLink>
      </Flex>
      <NavItemWrapper>
        <NavItems>
          <NavItem href="#">Home</NavItem>
          <NavItem href="#about-us">About Us</NavItem>
          <NavItem href="#mission">Mission</NavItem>
          <NavItem href="#map">Map</NavItem>
          <NavItem href="#portal">Portal</NavItem>
        </NavItems>
      </NavItemWrapper>
      <SideNav />
    </Header>
  )
})
