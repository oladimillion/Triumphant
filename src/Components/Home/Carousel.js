import React from 'react';
import styled from 'styled-components'
import studentImage from '../../assets/student.jpeg'


const CarouselWrapper = styled.div`
  background-image: url(${studentImage});
  background-repeat: no-repeat;
  height: 500px; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
`

const CarouselText = styled.p`
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  text-align: justify;
  color: #FFFFFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  bottom: 70px;
  width: 60%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;


  @media (max-width: 700px) {
    width: 95%;
  }
`


export const Carousel = () => {
  return (
    <CarouselWrapper>
      <CarouselText>
        School Vouchers, Education Savings Accounts, and Tax Incentives: 
        Implications and Considerations for Students with Disabilities - N…
      </CarouselText>
    </CarouselWrapper>
  )
}
