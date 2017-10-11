import React from 'react'
import ReactDOM from 'react-dom'
import VerbBoard from "./verbBoard"

import "../css/main.scss"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Data: props.Data,
      Settings : props.Settings,
      CorrectVerbChosen: false,
      counter: 0
    };
  }
  render() {
    return (
      <VerbBoard Data={ this.state.Data }
      Settings={ this.state.Settings }
      onSubmission= {this.onSubmission.bind(this)}
      counter = {this.state.counter}/>
    )
  }
  onSubmission(){
    this.setState({ CorrectVerbChosen:true })
    this.state.counter++
  }
}
export default App;
