import React from 'react'
import ReactDOM from 'react-dom'
import FontAwesome from 'react-fontawesome'

import VerbChecker from "./verbChecker"
import SettingsForm from "./settingsForm"

import "../css/verbBoard.scss"
import { randomProperty, randomAccessor } from "../helpers/helpers"
import { getRandomEntry, getRandomAccessor, mapAccessorToPerson } from "../helpers/databaseHelpers"

function VerbBoard (props){
  const Data = props.Data
  const Settings = props.Settings
  const correctVerb = false

  const entry = getRandomEntry()
  const form = entry.tense
  const personAccessor = getRandomAccessor()

  return (
    <div>
      <div className="verbInfo">
        <h5>VERB BOARD</h5>
        <h5>Verbo: { entry.infinitive }</h5>
        <h5>Forma: { form }</h5>
        <h5>Persona: { mapAccessorToPerson(personAccessor) }</h5>
        <h5>{ entry.verb_english }</h5>
        <h5 style={{ color: "Red" }}>{ (entry.mood !== "Indicativo") ? entry.mood : "" }</h5>
      </div>
      <VerbChecker verb={ entry[personAccessor] }
      onCorrect = { props.onCorrect }
      onFalse= { props.onFalse }/>
      <div className ="settingsForm">
        <SettingsForm/>
      </div>

    </div>
  )
}
export default VerbBoard;
