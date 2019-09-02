import React from 'react'
import randomHexColor from '../helpers.js'

class Pixels extends React.Component{
    constructor(props){
    super(props)

    
   
    this.state ={
        style:{
            backgroundColor: randomHexColor(),
            width: '100px',
            height: '100px', 
        }
    }
}
    handleClick = () => {
            this.setState({
                style:{
                    backgroundColor: randomHexColor(),
                    width: '100px',
                    height: '100px', 
                }
            })
        }


    render(){
        return(
        <div style={this.state.style} onClick={this.handleClick}>
        </div>
    )
    }    
    
}

export default Pixels