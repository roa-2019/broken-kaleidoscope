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
        height: '100px',
        width: '100px',
        backgroundColor: randomHexColor()
      }
    };
  }

  clickHandler = () => {
    this.setState({
      style: {
        height: '100px',
        width: '100px',
        backgroundColor: randomHexColor()
      }
    });
  };

  blackSquares = () => {
    this.setState({
      style: {
        height: '100px',
        width: '100px',
        backgroundColor: 'black'
      }
    });
    evt.preventDefault();
  };

  whiteSquares = () => {
    this.setState({
      style: {
        height: '100px',
        width: '100px',
        backgroundColor: 'white'
      }
    });
    evt.preventDefault();
  };

  yellowSquares = () => {
    this.setState({
      style: {
        height: '100px',
        width: '100px',
        backgroundColor: 'yellow'
      }
    });
    evt.preventDefault();
  };

  render() {
    return (
      <div>
        <div
          id='app'
          style={this.state.style}
          onClick={this.clickHandler}
          onMouseEnter={this.clickHandler}
          onContextMenu={this.blackSquares}
          onDoubleClick={this.whiteSquares}
          onDragEnter={this.yellowSquares}
        ></div>
      </div>
    );
  }
}

export default Pixel;
