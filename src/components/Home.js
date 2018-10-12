import React, { Component } from 'react';

import image from '../assets/img/black-wasp.png';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={image} />
        <div className="homeContainer">Welcome to The Buzz</div>
      </div>
    );
  }
}

export default Home;
