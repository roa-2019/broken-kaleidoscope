import React from 'react'


class Pixels extends React.Component{
    constructor(props){
    super(props)

    const randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
   
    this.state ={
        style:{
            backgroundColor: randomHexColor(),
            width: '100px',
            height: '100px', 
        }
    }
                   
}
    render(){
        return(
        <div style={this.state.style}>
        </div>
    )
    }    
    
}

export default Pixels