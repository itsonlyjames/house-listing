import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { injectGlobal } from 'styled-components';

import * as HouseActions from '../../actions/HouseActions';

import Card from '../../components/Card';

class App extends Component {
  saveHouse(house) {
    const { dispatch } = this.props;

    dispatch(HouseActions.saveHouse(house));

  }

  removeHouse(house) {
    const { dispatch } = this.props;

    dispatch(HouseActions.removeHouse(house));
  }

  render() {
    return (
      <Split>
        <SplitEl>
          <h2>Results</h2>
          {this.props.houseListing.results.map((house, key) => (
            <Card
              key={key}
              image={house.mainImage}
              id={house.id}
              price={house.price}
              agency={house.agency}
              onClick={this.saveHouse.bind(this, house)}
            />
          ))}
        </SplitEl>
        <SplitEl>
          <h2>{this.props.houseListing.saved >= 0 ? 'No Saved Properties' : 'Saved Properties'}</h2>
          {this.props.houseListing.saved.map((house, key) => (
            <Card
              saved
              key={key}
              image={house.mainImage}
              id={house.id}
              price={house.price}
              agency={house.agency}
              onClick={this.removeHouse.bind(this, house)}
            />
          ))}
        </SplitEl>
      </Split>
    );
  }
}

injectGlobal`
  body {
    margin: 0;
    box-sizing: border-box;
    font-family: Arial;
  }
`;

const Split = styled.div`
  width: 100%;
  display: inline-block;
  display: flex;
  flex-direction: row;
`;

const SplitEl = styled.div`
  display: flex;
  width: 50%;
  padding: 0 20px;
  flex-direction: column;
`;

export default connect(state => ({
  houseListing: state.houseListing
}))(App);
