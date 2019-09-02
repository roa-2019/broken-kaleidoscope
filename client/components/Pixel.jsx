import React from 'react'

class Pixel extends React.Component {
    constructor (props) {
        super(props)

        

        this.state = {
            style: {
                height: 10,
                width: 10,
                backgroundColor: randomHexColor(),
            }   
        }
    }

    clickHandler = evt => {
        this.setState({
            style:{
                height: 10,
                width: 10,
                backgroundColor: randomHexColor()
            }
        })
    }

    overHandler = evt => {
        this.setState({
            style:{
                height: 10,
                width: 10,
                backgroundColor: 'purple'
            }
        })
    }

    contextMenuHandler = evt => {
        evt.preventDefault()
        this.setState({
            style:{
                height: 10,
                width: 10,
                backgroundColor: 'black'
            }
        })
    }

    doubleClickHandler = evt => {
        this.setState({
            style:{
                height: 10,
                width: 10,
                backgroundColor: 'white'
            }
        })
    }

    dragHandler = evt => {
        this.setState({
            style:{
                height: 10,
                width: 10,
                backgroundColor: 'yellow'
            }
        })
    }

    render() {
        return <div onDoubleClick={this.doubleClickHandler} 
                    onDragEnter={this.dragHandler} 
                    onClick={this.clickHandler} 
                    onMouseEnter={this.overHandler} 
                    onContextMenu={this.contextMenuHandler} 
                    style={this.state.style}
        ></div>
    }
}

const randomHexColor = () =>
        `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

export default Pixel