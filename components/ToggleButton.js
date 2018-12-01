import React from 'react';
import {
  VrButton,
  StyleSheet,
  View,
} from 'react-360';

const ToggleButton = props => {
  const { value, onClick, disabled } = props;
  return (
    <VrButton style={[styles.toggle, value ? styles.toggleOn : styles.toggleOff]} disabled={disabled} onClick={() => onClick(!value)} >
      <View style={[styles.toggleItem, value ? styles.toggleItemOn : styles.toggleItemOff]} />
    </VrButton>
  );
};

const styles = StyleSheet.create({
  toggle: {
    height: 30,
    width: 60,
    borderRadius: 15,
    borderColor: '#4d79ff',
    borderWidth: 3,
    overflow: 'hidden',
  },
  toggleOff: {
    backgroundColor: '#cccccc',
  },
  toggleOn: {
    backgroundColor: '#4d79ff',
  },
  toggleItem: {
    height: 24,
    width: 24,
    borderRadius: 50,
    backgroundColor: '#fff',
    position: 'absolute'
  },
  toggleItemOn: {
    right: 0
  },
  toggleItemOff: {
    left: 0
  }
});

export default ToggleButton;