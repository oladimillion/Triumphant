import React from 'react';
import styled from 'styled-components'
import ellipseImage from '../../assets/ellipse.svg'

const AboutUsWrapper = styled.div`
  min-height: 482px;
  height: auto;
  background-image: url(${ellipseImage});
  background-repeat: no-repeat;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  padding: 20px 40px;
`

const AboutUsImage = styled.div`
  width: 292px;
  height: 204px;
  background: #C4C4C4;
  font-size: 30px;
  color: #E5E5E5;
  text-align: center;
  padding-top: 78px;
  font-weight: bold;
`

const AboutUsTitle = styled.div`
  font-size: 20px;
  line-height: 21px;
  margin-top: 30px;
  font-weight: bold;
  color: var(--primary-color);
`

const AboutUsText = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: justify;
  color: rgba(34, 33, 35, 0.61);
  flex: 1;
  margin-right: 20px;

  min-width: 250px;
  margin-bottom: 20px;
`

const Flex = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export const AboutUs = () => {
  return (
    <AboutUsWrapper id="about-us">
      <AboutUsTitle>About Us</AboutUsTitle>
      <Flex>
        <AboutUsText>
          Triumphant nursery and primary school was established in 2013 as a group of individuals coming for holiday coaching for the long vacation, in that vein, the academic session for 2013/2014 commenced at the parmanent site. This year 2019 thus marks the 6th year of existence of the school.
          <br />
          <br />
          As a conglomeration of tomorrow’s leader to be trained in the citadel of  knowledge located at Ekiti state capital,  Ado Ekiti.
          <br />
          <br />
          The school has from the first  academic session been rolling out pupil who have been performing excellently well in the common entrance  even at state level. 
          <br />
          <br />

          The school has watched herself grow from less than 10 pupils in the 2013 to several scores in recent times.
        </AboutUsText>
        <AboutUsImage>Photo</AboutUsImage>
      </Flex>
    </AboutUsWrapper>
  )
}
