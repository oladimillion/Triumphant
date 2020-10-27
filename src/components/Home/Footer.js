import React from 'react';
import styled from 'styled-components'
import footerBg from '../../assets/footerbg.svg'
import footerLogo from '../../assets/footerlogo.svg'


const FooterWrapper = styled.footer`
  background-image: url(${footerBg});
  background-repeat: no-repeat;
  min-height: 494px;
  height: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media (max-width: 900px) {
    min-height: auto;
    background-color: #090948;
    background-image: none;
  }
`

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  padding: 10%;
  padding-bottom: 2%;

  @media (max-width: 900px) {
    padding: 2%;
  }
  
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const Column = styled(Flex)`
  flex-direction: column;
  height: 350px;
  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
  padding: 0;
  padding-top: 5%;
  flex: 1;

  @media (max-width: 900px) {
    min-width: 250px;
    justify-content: flex-start;
    height: auto;
  }

  @media (max-width: 700px) {
    margin-top: 20px;
  }
`

const LogoLink = styled.a`
  text-decoration: none;
  display: block;
`

const Logo = styled.div`
  background-image: url(${footerLogo});
  background-repeat: no-repeat;
  height: 60px;
  width: 200px;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  left: -20px;
  top: -10px;
`

const FooterText = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  color: #fff;

  @media (max-width: 700px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`

const CopyrightText = styled(FooterText)``

const UsefulLinks = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
`

const Divider = styled.hr`
  border: 1px solid #FFFFFF;
  width: 70%;
  margin-top: 10px;
`

const Links = styled.a`
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  color: #fff;
  text-decoration: none;
  margin-top: 20px;

  @media (max-width: 700px) {
    font-size: 14px;
  }
`

export const Footer = () => {
  return (
    <FooterWrapper>
      <Flex>
        <Column>
          <LogoLink href="#"><Logo /></LogoLink>
          <CopyrightText>Copyright @ Triumphant 2020</CopyrightText>
        </Column>
        <Column justifyContent="flex-start">
          <UsefulLinks>Useful Links</UsefulLinks>
          <Divider />
          <Links href="#">Application Form</Links>
          <Links href="#">List of books</Links>
          <Links href="#">School bills</Links>
        </Column>
        <Column>
          <FooterText>
            Triumphant Nusery  and Primary 
            <br />
            School, Ado-Ekiti, Ekiti State, Nigeria
          </FooterText>
          <div>
            <Links href="tel:+2348065135427">+234-806-513-5427</Links>
            <br />
            <Links href="tel:+2348062358310">+234-806-235-8310</Links>
          </div>
          <Links href="mailto:triumphant@email.com">triumphant@email.com</Links>
        </Column>
      </Flex>
    </FooterWrapper>
  )
}
