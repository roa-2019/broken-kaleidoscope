import React from 'react'
import randomHexColor from '../helpers.js'

class Pixels extends React.Component{
    constructor(props){
    super(props)
   
    this.state ={
        style:{
            backgroundColor: randomHexColor(),
            width: '50px',
            height: '50px', 
        }
    }
}
    handleClick = () => {
            this.setState({
                style:{
                    backgroundColor: randomHexColor(),
                    width: '50px',
                    height: '50px', 
                }
            })
        }
    
    handleMouseEnter = () => {
        this.setState({
            style:{
                backgroundColor: 'pink',
                    width: '50px',
                    height: '50px', 
                
            }
        })
    } 

    handleContextMenu = (e) => {
        e.preventDefault()
        this.setState({
            style:{
                backgroundColor: 'black',
                    width: '50px',
                    height: '50px',                 
            }
        })
    } 

    handleDoubleClick = (e) => {
       
        this.setState({
            style:{
                backgroundColor: 'white',
                    width: '50px',
                    height: '50px',                 
            }
        })
    } 

    handleDragEnter = () => {
        this.setState({
            style:{
                backgroundColor: 'green',
                    width: '50px',
                    height: '50px',                 
            }
        })
    } 

    render(){
        return(
        <div style={this.state.style} 
        onClick={this.handleClick} 
        onMouseEnter={this.handleMouseEnter}
        onContextMenu={this.handleContextMenu} 
        onDoubleClick={this.handleDoubleClick}
        onDragEnter={this.handleDragEnter}>
        </div>
        )
    }    
}

export default Pixels