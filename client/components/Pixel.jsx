import React from 'react';

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, 0)}`;

class Pixel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: randomHexColor()
      }
    };
  }

  clickHandler = () => {
    this.setState({
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: randomHexColor()
      }
    });
  };

  blackSquares = () => {
    this.setState({
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: 'black'
      }
    });
  };

  whiteSquares = () => {
    this.setState({
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: 'white'
      }
    });
  
  };

  yellowSquares = () => {
    this.setState({
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: 'yellow'
      }
    });
  
  };


  render() {
    return (
      <React.Fragment>
        <div
          id='app'
          style={this.state.style}
          onClick={this.clickHandler}
          onMouseEnter={this.clickHandler}
          onContextMenu={this.blackSquares}
          onDoubleClick={this.whiteSquares}
          onDragEnter={this.yellowSquares}
        ></div>
      </React.Fragment>
    );
  }
}

export default Pixel;
