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

const HomeWrapper = styled.main`
  width: 100%;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media(max-width: 700px) {
    padding: 0;
  }
`

export const Home = () => {
  return (
    <HomeWrapper>
      <Container>
        <NavBar />
        <Carousel />
        <AboutUs />
        <Mission />
        <Map />
        <Footer />
      </Container>
    </HomeWrapper>
  )
}
