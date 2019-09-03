import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

const Pixel = props => {
    return(
        <React.Fragment> 
            <div style={{
            height: '40px',
            width: '40px',
            backgroundColor: randomHexColor()
            }} >
            </div>
        </React.Fragment>
    )
}


export default Pixel