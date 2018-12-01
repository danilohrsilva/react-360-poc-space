import * as React from 'react';

/**
 * If you want to share data between multiple root components, you'll need a
 * global store like Redux. This is similar to building a web app where you
 * want to synchronize data between a sidebar and a main view - just extended
 * into three dimensions.
 * To simplify this sample, we implement a trivial Redux-like store that will
 * ensure all of our elements are synchronized.
 */
const State = {
  showPlanets: true,
  showAstronaut: true
};

const listeners = new Set();

function updateComponents() {
  for (const cb of listeners.values()) {
    cb();
  }
}

export function setShowPlanets(value) {
  State.showPlanets = value;
  updateComponents();
}

export function setShowAstronaut(value) {
  State.showAstronaut = value;
  updateComponents();
}

export function setShowAll(value) {
  setShowPlanets(value);
  setShowAstronaut(value);
  updateComponents();
}

export function connect(Component) {
  return class Wrapper extends React.Component {
    state = {
      showPlanets: State.showPlanets,
      showAstronaut: State.showAstronaut,
    };

    _listener = () => {
      this.setState({
        showPlanets: State.showPlanets,
        showAstronaut: State.showAstronaut
      });
    };

    componentDidMount() {
      listeners.add(this._listener);
    }

    componentWillUnmount() {
      listeners.delete(this._listener);
    }

    render() {
      return (
        <Component
          {...this.props}
          showPlanets={this.state.showPlanets}
          showAstronaut={this.state.showAstronaut}
        />
      );
    }
  };
}