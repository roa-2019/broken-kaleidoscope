import React from 'react'


class Pixels extends React.Component{
    constructor(props){
    super(props)

    this.state ={
        style:{
            backgroundColor: '#7FFF00',
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