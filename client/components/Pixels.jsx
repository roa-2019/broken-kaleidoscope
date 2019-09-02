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
    
    // handleMouseEnter = () => {
    //     this.setState({
    //         style:{
    //             backgroundColor: 'pink',
    //                 width: '100px',
    //                 height: '100px', 
                
    //         }
    //     })
    // } 

    handleContextMenu = (e) => {
        e.preventDefault()
        this.setState({
            style:{
                backgroundColor: 'black',
                    width: '100px',
                    height: '100px',                 
            }
        })
    } 

    handleDoubleClick = (e) => {
        e.preventDefault()
        this.setState({
            style:{
                backgroundColor: 'white',
                    width: '100px',
                    height: '100px',                 
            }
        })
    } 

    handleDragEnter = () => {
        this.setState({
            style:{
                backgroundColor: 'green',
                    width: '100px',
                    height: '100px',                 
            }
        })
    } 

    render(){
        return(
        <div style={this.state.style} 
        onClick={this.handleClick} 
        // onMouseEnter={this.handleMouseEnter}
        onContextMenu={this.handleContextMenu} 
        onDoubleClick={this.handleDoubleClick}
        onDragEnter={this.handleDragEnter}>
        </div>
    )
    }    
    
}

export default Pixels