import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Environment,
  asset,
} from 'react-360';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';
import { connect } from '../Store';
import Planet, { PLANETS } from './Planet';
import Astronaut from './Astronaut';
import Satellite from './Satellite';

class Space extends Component {

  componentDidMount() {
    Environment.setBackgroundImage(
      asset('stars.jpg'),
      {format: '2D'},
    );
  }

  render() {
    const { showPlanets, showAstronaut } = this.props;
    return (
      <View>
        <AmbientLight intensity={1.0} color={'#ffffff'} />
        <PointLight
          intensity={0.4}
          style={{transform: [{translate: [0, 4, -1]}]}}
        />
        { showPlanets ? 
            <View>
              <Planet planet={PLANETS.EARTH} style={styles.earth} />
              <Planet planet={PLANETS.MARS} style={styles.mars} />
            </View>
          : null
        }
        { showAstronaut ?
            <Astronaut style={styles.astronaut} />
          : null
        }
        
      </View>
    );
  }

}

const styles = StyleSheet.create({
  earth: {
    transform: [ { translate: [ 200, 0, -200 ] } ]
  },
  mars: {
    transform: [ { translate: [ -90, 0, -500 ] } ]
  },
  satellite: {
    transform: [ { rotateY: 90 }, { rotateX: 10 }, { translate: [ 10, -10, -10 ] } ],
  },
  astronaut: {
    transform: [ { translate: [ 0, 0, 0 ] } ],
  }
});

export default connect(Space);
