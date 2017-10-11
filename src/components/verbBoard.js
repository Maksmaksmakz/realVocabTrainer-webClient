import React from 'react'
import ReactDOM from 'react-dom'
import FontAwesome from 'react-fontawesome'

import VerbChecker from "./verbChecker"

import "../css/verbBoard.scss"
import { randomProperty, randomAccessor } from "../helpers/helpers"

class VerbBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Data: props.Data,
      Settings : props.Settings,
      correctVerb: false
    }
    this.verb = randomProperty(this.state.Data.verbs)
    this.form = randomAccessor(this.state.Data.Accessors.forms)
    this.persona = randomAccessor(this.state.Data.Accessors.personas)
  }
  render(){
    return (
      <div>
        <h1>{ this.props.counter }</h1>
        <h1>VERB BOARD</h1>
        <h1>Verbo: { this.verb.infinitivo }</h1>
        <h1>Forma: { this.form }</h1>
        <h1>Persona: { this.persona }</h1>
        <VerbChecker verb={this.getVerb(this.verb,this.form,this.persona)}
        onCorrect = { this.onCorrect.bind(this) }
        onFalse= { this.onFalse.bind(this) }/>
      </div>
    )
  }
  getVerb(verb, form, person){
    let conjugation = null
    while(conjugation === null|| undefined){
      conjugation = verb[form].conjugation[person]
    }
    return conjugation
  }
  onCorrect(){
    console.log("CORRECT FROM VERBBOARD")
    this.setState({ correctVerb:"awd" })
    this.props.onSubmission()
  }

  onFalse(){
    console.log("FALSE FROM VERBBOARD")
  }

}

export default VerbBoard;
