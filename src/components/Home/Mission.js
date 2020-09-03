import React from 'react';
import styled from 'styled-components'

const MissionWrapper = styled.div`
  min-height: 306px;
  height: auto;
  padding: 20px 40px;
  margin-bottom: 30px;
`

const MissionImage = styled.div`
  width: 292px;
  height: 204px;
  background: #C4C4C4;
  font-size: 30px;
  color: #E5E5E5;
  text-align: center;
  padding-top: 78px;
  font-weight: bold;
`

const MissionTitle = styled.div`
  font-size: 20px;
  line-height: 21px;
  margin-top: 30px;
  font-weight: bold;
  color: #085879;
  text-align: right;
`

const MissionText = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: justify;
  color: rgba(34, 33, 35, 0.61);
  flex: 1;
  margin-left: 20px;


  @media (max-width: 700px) {
    margin-left: 0;
    margin-top: 20px; 
  }
`

const Flex = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`


export const Mission = () => {
  return (
    <MissionWrapper id="mission">
      <MissionTitle>Mission</MissionTitle>
      <Flex>
        <MissionImage>Photo</MissionImage>
        <MissionText>
          Fostering a teaching and learning environment; to be a leading edge in knowledge; engender a sense of selfless public service; train up culturally
          <br />
          <br />

          Vision
          <br />

          A top rated private primary school in Africa.
        </MissionText>
      </Flex>
    </MissionWrapper>
  )
}
