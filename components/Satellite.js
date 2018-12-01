import React from 'react';
import { asset } from 'react-360';
import ModelView from './ModelView';

const ASSET_SATELLITE_PATH = 'Satellite/1236 Satellite.gltf';

const Satellite = props => {
  const { style } = props;
  return (
    <ModelView source={asset(ASSET_SATELLITE_PATH)} style={style} />
  );
}

export default Satellite;