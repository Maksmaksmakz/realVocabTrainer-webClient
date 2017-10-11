import React from 'react'
import ReactDOM from 'react-dom'
import VerbBoard from "./verbBoard"

import "../css/main.scss"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Data: props.Data,
      Settings : props.Settings
    };
  }
  render() {
    return (
      <VerbBoard Data={ this.state.Data } Settings={ this.state.Settings }/>
    )
  }
}
export default App;
