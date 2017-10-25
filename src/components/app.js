import React from 'react'
import ReactDOM from 'react-dom'
import VerbBoard from "./verbBoard"

import "../css/main.scss"
import "../css/bootstrap.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Data: props.Data,
      Database: props.Database,
      Settings : props.Settings,
      CorrectVerbChosen: false,
      counter: 0
    }
  }
  render() {
    return (
      <VerbBoard Data={ this.state.Data }
      Settings={ this.state.Settings }
      onCorrect= {this.onCorrect.bind(this)}
      onFalse= {this.onFalse.bind(this)}
      counter = {this.state.counter}/>
    )
  }
  onCorrect(){
    this.setState({ CorrectVerbChosen:true })
    console.log("correct from app")
    this.state.counter++
  }
  onFalse(){
    console.log("false from app")
    this.state.counter++
  }
}
export default App;
