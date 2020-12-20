import React from 'react';
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react';
import { Marker } from './Marker';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const places = [
  // {
  //   id: 'PATHFINDER_HOTEL',
  //   name: 'Pathfinder Hotel',
  //   geometry: {
  //     location: {
  //       lat: 7.667484527978712,
  //       lng:  5.242193171382684
  //     }
  //   }
  // },
  {
    id: 'TRIUMPHANT_SCHOOL',
    name: 'Triumphant School',
    geometry: {
      location: {
        lat: 7.671657,
        lng:  5.246626
      }
    }
  },
]

// Return map bounds based on list of places
const getMapBounds = (map, maps, places) => {
  const bounds = new maps.LatLngBounds();

  places.forEach((place) => {
    bounds.extend(new maps.LatLng(
      place.geometry.location.lat,
      place.geometry.location.lng,
    ));
  });
  return bounds;
};

// Re-center map when resizing the window
const bindResizeListener = (map, maps, bounds) => {
  maps.event.addDomListenerOnce(map, 'idle', () => {
    maps.event.addDomListener(window, 'resize', () => {
      map.fitBounds(bounds);
    });
  });
};

// Fit map to its bounds after the api is loaded
// eslint-disable-next-line
const apiIsLoaded = (map, maps, places) => {
  // Get bounds by our places
  const bounds = getMapBounds(map, maps, places);
  // Fit map to bounds
  map.fitBounds(bounds);
  // Bind the resize listener
  bindResizeListener(map, maps, bounds);
};

export const GoogleMap = () => (
  <Wrapper>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.REACT_APP_MAP_KEY,
      }}
      defaultZoom={12}
      defaultCenter={[7.671657, 5.246626]}
      yesIWantToUseGoogleMapApiInternals
    >
      {places.map((place) => (
        <Marker
          key={place.id}
          text={place.name}
          lat={place.geometry.location.lat}
          lng={place.geometry.location.lng}
        />
      ))}
    </GoogleMapReact>
  </Wrapper>
);
