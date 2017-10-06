import React from 'react'
import ReactDOM from 'react-dom'
import VerbBoard from "./verbBoard"

import "../css/main.scss"

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <VerbBoard/>
    )
  }
}
export default App;
