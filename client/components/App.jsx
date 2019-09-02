import React from 'react'
import lightWeight from './YeahBuddy'

// const App = () => {
//   return (
//     <div>React development has begun!</div>
//   )
// }

// export default App

class App extends React.Component {
  constructor(props){
  super(props)
}
render(){
  return (
    <React.Fragment>
       <div>React development has begun!</div>
    </React.Fragment>
  )
}

}

export default App