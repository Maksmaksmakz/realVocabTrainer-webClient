import React from 'react'
import ReactDOM from 'react-dom'
import FontAwesome from 'react-fontawesome'

import VerbChecker from "./verbChecker"

import "../css/verbBoard.scss"
import { randomProperty, randomAccessor } from "../helpers/helpers"

function VerbBoard (props){
  const Data = props.Data
  const Settings = props.Settings
  const correctVerb = false

  const verb = randomProperty(Data.verbs)
  const form = randomAccessor(Data.Accessors.forms)
  const persona = randomAccessor(Data.Accessors.personas)

  return (
    <div>
      <img></img>
      <h1>VERB BOARD</h1>
      <h1>Verbo: { verb.infinitivo }</h1>
      <h1>Forma: { form }</h1>
      <h1>Persona: { persona }</h1>
      <VerbChecker verb={getVerb(verb,form,persona)}
      onCorrect = { props.onCorrect }
      onFalse= { props.onFalse }/>
    </div>
  )
  function getVerb(verb, form, person){
    let conjugation = null
    while(conjugation === null|| undefined){
      conjugation = verb[form].conjugation[person]
    }
    return conjugation
  }
}
export default VerbBoard;
