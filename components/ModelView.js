import React, { Component } from 'react';
import { Animated, View } from 'react-360';
import Entity from 'Entity';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

/**
 * Renders the actual model in 3D space, rotating it a full 360 degrees to show
 * it from all angles.
 */
class ModelView extends Component {
  rotation = new Animated.Value(0);

  constructor(props) {
    super(props);

    this.rotate = this.rotate.bind(this);
  }

  componentDidMount() {
    const { rotate } = this.props;
    if (rotate === true) {
      this.rotate()
    }
    
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.current !== this.props.current && nextProps.rotate === true) {
      this.rotate()
    }
  }

  rotate() {
    this.rotation.setValue(0);
    Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
  }

  render() {
    const { source, style, rotate } = this.props;
    return (
      <View style={style}>
        <AnimatedEntity
          style={{transform: [{rotateY: rotate ? this.rotation : 0}]}}
          source={{gltf2: source}}
        />
      </View>
    );
  }
}

export default ModelView;