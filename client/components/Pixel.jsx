import React from 'react'

class Pixel extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <React.Fragment>
          <div></div>
          <div style={{
            height: 20,
            width: 20,
            backgroundColor: 'cornflowerblue'
          }} />
        </React.Fragment>
      )
    }
}

export default Pixel