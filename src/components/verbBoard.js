import React from 'react'
import ReactDOM from 'react-dom'
import FontAwesome from 'react-fontawesome'

import "../css/verbBoard.scss"
import { randomProperty, randomAccessor } from "../helpers/helpers"

function VerbBoard(props) {
  const Data = props.Data
  const Settings = props.Settings

  const verb = randomProperty(Data.verbs)
  const form = randomAccessor(Data.Accessors.forms)
  const persona = randomAccessor(Data.Accessors.personas)
  console.log(getVerb(verb, form, persona))
  return (
    <div>
      <h1>VERB BOARD</h1>
      <h1>Verbo: { verb.infinitivo }</h1>
      <h1>Forma: { form }</h1>
      <h1>Persona: { persona }</h1>
      <form className="verbForm">
        <label>
          <input type="text" name="name" placeholder = { verb[form].conjugation[persona] }/>
        </label>
        <input className="inputButton" type="submit" value="Submit" />
      </form>
    </div>
  );
  function getVerb(verb, form, person){
    let conjugation = null
    while(conjugation === null|| undefined){
      conjugation = verb[form].conjugation[person]
    }
    return conjugation
  }

}

export default VerbBoard;
