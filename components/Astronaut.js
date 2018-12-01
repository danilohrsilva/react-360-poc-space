import React from 'react';
import { asset } from 'react-360';
import ModelView from './ModelView';

const ASSET_ASTRONAUT_PATH = 'Astronaut/Astronaut.gltf';

const Astronaut = props => {
  const { style } = props;
  return (
    <ModelView source={asset(ASSET_ASTRONAUT_PATH)} style={style} />
  );
}

export default Astronaut;