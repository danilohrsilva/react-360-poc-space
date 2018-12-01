import React from 'react';
import { asset } from 'react-360';
import ModelView from './ModelView';

const ASSET_PLANET_BASE_PATH = 'Planets';

export const PLANETS = {
  EARTH: {
    assetPath: `${ASSET_PLANET_BASE_PATH}/Earth/1227 Earth.gltf`
  },
  MARS: {
    assetPath: `${ASSET_PLANET_BASE_PATH}/Mars/Mars_1239.gltf`
  }
};

const Planet = props => {
  const { planet, style } = props;
  return (
    <ModelView source={asset(planet.assetPath)} style={style} rotate={true} />
  );
}

export default Planet;