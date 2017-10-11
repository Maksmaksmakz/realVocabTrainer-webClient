import React from 'react'
import ReactDOM from 'react-dom'
import FontAwesome from 'react-fontawesome'

import "../css/vocabularyBoard.scss"

class VocabularyBoard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>VOCABULARY BOARD</h1>
        <h1>Word: Ser</h1>
        <form className="verbForm">
          <label>
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default VerbBoard;
