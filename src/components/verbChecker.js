import React from 'react'
import ReactDOM from 'react-dom'
import FontAwesome from 'react-fontawesome'

class VerbChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submission: ''
    }
  }
  render() {
    return (
      <form className="verbForm" onSubmit = { this.checkAnswer.bind(this) }>
        <label>
          <input type="text" name="name"
          value = { this.state.submission }
          onChange= { this.handleChange.bind(this) }/>
        </label>
        <input className="inputButton" type="submit" value= "Submit"/>
      </form>
    )
  }
  checkAnswer(e) {
    e.preventDefault()
    console.log("Submission: ", this.state.submission, "solution: ", this.props.verb)
    if(this.props.verb == this.state.submission){
      this.props.onCorrect()
    }
    else{
      this.props.onFalse()
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
}

export default VerbChecker;
