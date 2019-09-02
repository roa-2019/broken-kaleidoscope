import React from 'react'

class Pixel extends React.Component {
    constructor (props) {
        super(props)

        const randomHexColor = () =>
            `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

        this.state = {
            style: {
                height: 10,
                width: 10,
                backgroundColor: randomHexColor(),
            }   
        }
    }

    render() {
        return <div style={this.state.style}></div>
    }
}

export default Pixel