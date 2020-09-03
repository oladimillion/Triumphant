import React from 'react';
import styled from 'styled-components'
import mapBg from '../../assets/mapbg.svg'


const MapWrapper = styled.div`
  height: 488px;
  border: 1px solid #ddd;
  border-radius: 5px;
`

const MapIFrame = styled.iframe`
  border: none;
  flex 1;
  min-width: 250px;
  height: 100%;
  margin: auto;
  max-width: 70%;

  @media (max-width: 700px) {
    max-width: 95%;
  }
`

const MapEllipse = styled.div`
  width: 300px;
  height: 300px;
  margin: auto;

  background-image: url(${mapBg});
  background-repeat: no-repeat;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

const Flex = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;


  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export const Map = () => {
  return (
    <MapWrapper id="map">
      <Flex>
        <MapIFrame
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&q=Space+Needle,Seattle+WA`} 
          allowfullscreen 
        />
        <MapEllipse />
      </Flex>
    </MapWrapper>
  )
}
