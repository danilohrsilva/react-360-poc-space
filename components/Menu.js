import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-360';
import ToggleButton from './ToggleButton';
import { connect, setShowPlanets, setShowAstronaut, setShowAll } from '../Store';

class Menu extends Component {

  constructor() {
    super();

    this.togglePlanets   = this.togglePlanets.bind(this);
    this.toggleAstronaut = this.toggleAstronaut.bind(this);
    this.toggleAll       = this.toggleAll.bind(this);
  }

  togglePlanets(value) {
    setShowPlanets(value);
  }

  toggleAstronaut(value) {
    setShowAstronaut(value);
  }

  toggleAll(value) {
    setShowAll(value);
  }

  render() {
    const { showPlanets, showAstronaut } = this.props;
    return (
      <View style={styles.menu}>
        <View>
          <Text>
            {`Visualizar todos - ${showPlanets && showAstronaut ? 'On' : 'Off'}`}
          </Text>
          <ToggleButton value={showPlanets && showAstronaut} onClick={this.toggleAll} disabled={false} />
        </View>
        <View>
          <Text>
            {`Visualizar planetas - ${showPlanets ? 'On' : 'Off'}`}
          </Text>
          <ToggleButton value={showPlanets} onClick={this.togglePlanets} disabled={false} />
        </View>
        <View>
          <Text>
            {`Visualizar astronauta - ${showAstronaut ? 'On' : 'Off'}`}
          </Text>
          <ToggleButton value={showAstronaut} onClick={this.toggleAstronaut} disabled={false} />
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    width: 300,
    height: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderColor: '#fff',
    borderWidth: 0.1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  }
});

export default connect(Menu);