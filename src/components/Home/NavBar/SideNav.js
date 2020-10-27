import React from 'react';
import styled from 'styled-components'
import { getNavItem } from './utils/getNavItem';
import { SideNavContext } from './hoc/WithSideNav'


const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.1);
  z-index: 101;
  display: none;
  padding: 0;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    transition: transform 0.5s;
    transform: translateX(${({ show }) => show ? '0' : '-1000px'})
  }
`

const Flex = styled.div`
  display: flex;
  background: #fafafa;
  padding: 16px;
  box-shadow: 0 0 4px 0 rgba(74,74,74,0.2);
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  max-width: 300px;
`

const LogoLink = styled.a`
  text-decoration: none;
`

const Logo = styled.div`
  font-size: 20px;
  font-weight: 700;
  font-family: Roboto;
  color: var(--primary-color);
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.2);
  line-height: 2.2rem;
`

const NavItemWrapper = styled.div`
  flex: 1;
  max-width: 300px;
  background: #fff;
`

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 16px;
`

const Links = styled.a`
  display: inline-block;
  line-height: 70px;
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
  margin: auto 20px;
  font-size: 30px;
  display: block;
  color: #444;
  transform: rotate(-180deg);
  cursor: pointer;
`

const NavItem = getNavItem(Links);

export const SideNav = () => {

  const { showSideNav, toggleSideNav } = React.useContext(SideNavContext)

  return (
    <Aside show={showSideNav}>
      <Flex>
        <LogoLink href="#">
          <Logo>Triumphant</Logo>
        </LogoLink>
        <MobileMenu onClick={toggleSideNav}>&#x27A4;</MobileMenu>
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
    </Aside>
  )
}
