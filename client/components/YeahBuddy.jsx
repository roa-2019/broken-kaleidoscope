import React from 'react'

const randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class YeahBuddy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: {
                height: '100px',
                width: '100px',
                backgroundColor: randomHexColor()
            }
        }


    }
    handleClick = () => {
        this.setState({
            style: this.state.style
        })
    }
    render() {
        return (
            <div style={this.state.style}>

            </div>
        )
    }

}

export default YeahBuddy