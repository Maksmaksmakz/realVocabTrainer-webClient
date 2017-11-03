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
      iconToShow: ''
    }
    console.log(this.state.correctVerb)
  }
  render() {
    return (
      <div className="verbChecker">
        <form className="verbForm" onSubmit = { this.checkAnswer.bind(this) } autoComplete="off">
          <TransitionGroup
          transitionName="labelAnimation"
          appear={ "true" }
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
            <label className ="verbCheckerLabel">
              <input type="text" size="15"
              value = { this.state.submission }
              onChange= { this.handleChange.bind(this) }/>
            </label>
          </TransitionGroup>
          <input className="inputButton" type="submit" value= "Submit"/>
        </form>
        <img className="poopIcon" src= { poopIcon }></img>
        <TransitionGroup
          transitionName="poopIcon"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
        { this.renderValidationIcon() }
        </TransitionGroup>
      </div>
    )
  }
  checkAnswer(e) {
    e.preventDefault()
    console.log("Submission: ", this.state.submission, "solution: ", this.props.verb)
    let callBack = null
    if(this.props.verb == this.state.submission){
      this.setState( { iconToShow: 'good' })
      callBack = this.props.onCorrect
    }
    else{
      this.setState( { iconToShow: 'bad' })
      callBack = this.props.onFalse
      console.log(this.props.onFalse)
    }
    setTimeout(this.clearIcons.bind(this, callBack), 800)
    this.setState({ submission: '' })
  }
  handleChange(e) {
    e.preventDefault()
    this.setState({
      submission: e.target.value,
      iconToShow: ''
    })
  }
  renderValidationIcon(){
    if(this.state.iconToShow === "good"){
      return (
        <img className="validationIconGood" src= { goodIcon }></img>
      )
    }else if(this.state.iconToShow === "bad"){
      return (
        <img className="validationIconBad" src= { badIcon }></img>
      )
    }
    else {
      return null
    }
  }
  clearIcons(callBack){
    console.log(callBack)
    callBack()
    this.setState({ iconToShow: '' })
  }
}

export default VerbChecker;
