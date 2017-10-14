import React from 'react'
import ReactDOM from 'react-dom'

import "../css/settingsForm.scss"

class SettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="settingsFormContainer">
        <form onSubmit={this.handleFormSubmit}>
          <div className="container">
            <div className="row">
                <div className="col">
                  <div className="box">
                         <input id="checkBox1" type="checkbox"/>
                         <label htmlFor="checkBoxVosotros" className="chkbox">Vosotros</label>
                  </div>
                  <div className="box">
                         <input id="checkBox2" type="checkbox"/>
                         <label htmlFor="checkBoxSubjuntivo" className="chkbox">Subjuntivo</label>
                  </div>
                  <div className="box">
                         <input id="checkBox2" type="checkbox"/>
                         <label htmlFor="checkbox1" className="chkbox">Imperativo</label>
                  </div>
                </div>
                <div className="col">
                  <div className="box">
                         <input id="checkBox1" type="checkbox"/>
                         <label htmlFor="checkbox1" className="chkbox">Perfecto</label>
                  </div>
                  <div className="box">
                         <input id="checkBox1" type="checkbox"/>
                         <label htmlFor="checkbox1" className="chkbox">Imperfecto</label>
                  </div>
                  <div className="box">
                         <input id="checkBox1" type="checkbox"/>
                         <label htmlFor="checkbox1" className="chkbox">Advanced</label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      // <div className ="settingsForm">
      //   <form>
      //     <div className="box">
      //       <input id="checkBox1" type="checkbox"/>
      //       <label htmlFor="checkbox1" className="chkbox">Vosotros</label>
      //     </div>
      //
      //     <input id="checkBox2" type="checkbox"/>
      //     <label htmlFor="checkbox2" className="chkbox">Vosotros</label>
      //     <input id="checkBox3" type="checkbox"/>
      //     <label htmlFor="checkbox3" className="chkbox">Vosotros</label>
      //     <input id="checkBox4" type="checkbox"/>
      //     <label htmlFor="checkbox4" className="chkbox">Vosotros</label>
      //   </form>
      // </div>
    )
  }
}

export default SettingsForm;
