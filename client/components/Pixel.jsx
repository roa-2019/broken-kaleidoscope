import React from 'react';





class Pixel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    style: {
    height: '100px',
    width: '100px',
    backgroundColor: 'blue'
        }
    }
  }

  render() {
    return (
      <div id='app' style={this.state.style}></div>
    );
  }
}

export default Pixel;
