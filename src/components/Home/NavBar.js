import React from 'react';
import styled from 'styled-components'


const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 100px;

  @media (max-width: 1220px) {
    padding: 0 10px;
  }
`

const LogoLink = styled.a`
  margin: auto 12px;
  margin-left: 0;
  display: block;
  text-decoration: none;
  position: relative;
  top: -5px;
`

const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
  font-family: Roboto;
  color: var(--primary-color);
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.2);
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
  color: ${({ color }) => color || '#0F0E0F' };
`

const MobileMenu = styled.div`
  margin: auto 20px;
  font-size: 40px;
  display: none;

  @media (max-width: 700px) {
    display: block;
  }
`

export const NavBar = () => {
  return (
    <Header>
      <LogoLink href="/">
        <Logo>Triumphant</Logo>
      </LogoLink>
      <NavItemWrapper>
        <NavItems>
          <Links href="/">Home</Links>
          <Links color="#9E9BA3" href="#about-us">About Us</Links>
          <Links color="#9E9BA3" href="#mission">Mission</Links>
          <Links color="#9E9BA3" href="#map">Map</Links>
          <Links color="#9E9BA3" href="#">Portal</Links>
        </NavItems>
      </NavItemWrapper>
      <MobileMenu>&#8801;</MobileMenu>
    </Header>
  )
}
