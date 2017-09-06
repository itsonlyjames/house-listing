import React, { Component } from 'react';
import { connect } from 'react-redux';
import { injectGlobal } from 'styled-components';

import Card from '../../components/Card';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.houseListing.results.map((house, key) => (
          <Card
            key={key}
            image={house.mainImage}
            id={house.id}
            price={house.price}
            agency={house.agency}
          />
        ))}
      </div>
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

export default connect(state => ({
  houseListing: state.houseListing
}))(App);
