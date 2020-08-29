import React from 'react'
import styled from 'styled-components'
import { 
  NavBar,
  Carousel,
  AboutUs,
  Mission,
  Map,
  Footer
} from '../../components/Home'

const HomeWrapper = styled.div``

export const Home = () => {
  return (
    <HomeWrapper>
      <NavBar />
      <Carousel />
      <AboutUs />
      <Mission />
      <Map />
      <Footer />
    </HomeWrapper>
  )
}
