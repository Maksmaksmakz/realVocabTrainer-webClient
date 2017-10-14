import React from 'react'
import ReactDOM from 'react-dom'
import FontAwesome from 'react-fontawesome'
import TransitionGroup from 'react-addons-css-transition-group'
import mojs from "mo-js"

import "../css/verbChecker.scss"
import poopIcon from "../img/poop_icon.png"
import goodIcon from "../img/good.png"
import badIcon from "../img/bad.png"

class VerbChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correctVerb: props.verb,
      submission: '',
      showGoodIcon: false,
      showBadIcon: false,
    }
    console.log(this.state.correctVerb)
  }
  render() {
    return (
      <div className="verbChecker">
      <img className="poopIcon" src= { poopIcon }></img>
        <TransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
        { this.renderValidationIcon() }
        </TransitionGroup>
        <form className="verbForm" onSubmit = { this.checkAnswer.bind(this) } autoComplete="off">
          <label className ="verbCheckerLabel">
            <input type="text"
            value = { this.state.submission }
            onChange= { this.handleChange.bind(this) }/>
          </label>
          <input className="inputButton" type="submit" value= "Submit"/>
        </form>
      </div>
    )
  }
  checkAnswer(e) {
    e.preventDefault()
    console.log("Submission: ", this.state.submission, "solution: ", this.props.verb)
    if(this.props.verb == this.state.submission){
      //this.props.onCorrect()
      this.setState( { showGoodIcon: true })
      this.setState( { showBadIcon: false })
    }
    else{
      //this.props.onFalse()
      this.setState( { showBadIcon: true })
      this.setState( { showGoodIcon: false })
    }
    this.setState({ submission: '' })
  }
  handleChange(e) {
    e.preventDefault()
    this.setState({
      submission: e.target.value
    })
    console.log("handleChange")
  }
  renderValidationIcon(){
    console.log(this.state.showGoodIcon)
    if(this.state.showGoodIcon){
      return (
        <img className="validationIconGood" src= { goodIcon }></img>
      )
    }else if(this.state.showBadIcon){
      return (
        <img className="validationIconBad" src= { badIcon }></img>
      )
    }
  }
}

export default VerbChecker;
