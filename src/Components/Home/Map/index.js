import React from 'react';
import styled from 'styled-components'
import  { GoogleMap } from './GoogleMap'
import { FlexBox } from 'Components/SimpleForm'
import { homeSectionStyle } from '../styled'


const MapWrapper = styled.div`
  border-radius: 5px;
  padding: 20px 40px;
`

const MapTitle = styled.h3`
  ${homeSectionStyle};
`

const Flex = styled(FlexBox)`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  height: 488px;


  @media (max-width: 700px) {
    flex-direction: column;
    height: 250px;
  }
`

export const Map = () => {
  return (
    <MapWrapper>
      <MapTitle id="map">
        <a href="#map">Map</a>
      </MapTitle>
      <Flex>
        <GoogleMap />
      </Flex>
    </MapWrapper>
  )
}
