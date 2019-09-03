import React from 'react'

const randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`



const width = 20
const height = 25

class YeahBuddy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: {
                height,
                width,
                backgroundColor: randomHexColor()
            }
        }
    }
    changeColor = () => {
        const style = {
            height,
            width,
            backgroundColor: randomHexColor()
        }

        this.setState({
           style
        })
    }

    render() {
        const { style } = this.state
        return (
            <div
            
                onClick={() => this.changeColor()}
                onMouseEnter={() => this.changeColour ()}
                mouseOver={() => this.changeColor()}
                style={style} />
            
        )
    }

}
export default YeahBuddy