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
    evt.preventDefault();
  };

  whiteSquares = () => {
    this.setState({
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: 'white'
      }
    });
    evt.preventDefault();
  };

  yellowSquares = () => {
    this.setState({
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: 'yellow'
      }
    });
    evt.preventDefault();
  };

  changeColor = () => {
    this.setState({
        style: {
        height: '50px',
        width: '50px',
        backgroundColor: randomHexColor(),
        transition: 'color 0.2s'
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
          setInterval={this.changeColor}
        ></div>
      </React.Fragment>
    );
  }
}

export default Pixel;
