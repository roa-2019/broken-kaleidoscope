import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
    constructor(props){
      super(props)   
      this.state = {
        style: {
            height: '100px',
            width: '100px',
            backgroundColor: randomHexColor()
            }

      }
      this.handleClick=this.handleClick.bind(this)

    }

    handleClick = () => {
        this.setState({
            style: {
                    height: '100px',
                    width: '100px',
                    backgroundColor: '#fdfecd'
            }
        })
    }
      
    render() {
        return(
            <div
                style={this.state.style}
                onClick={this.handleClick}
            ></div>  
    
        )
    }
}


  
export default Pixel