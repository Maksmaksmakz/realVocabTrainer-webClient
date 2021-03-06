import React from 'react'
import ReactDOM from 'react-dom'

import App from "./components/app"

import Data from "./data/data.js"
import Database from "./database/database.json"
import Settings from "./data/settings.js"

ReactDOM.render(
  <App Data = { Data } Database = { Database } Settings = { Settings }/>,
  document.getElementById('root')
)
