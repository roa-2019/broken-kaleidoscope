import React from 'react';


const divStyle = {
    height: '100px',
    width: '100px',
    backgroundColor: 'blue'
          
        
}



class Pixel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='app' style={divStyle}></div>
    );
  }
}

export default Pixel;
