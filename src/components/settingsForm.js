import React from 'react'
import ReactDOM from 'react-dom'

import Settings from "../data/settings"

class SettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vosotrosChecked: false
    }
  }
  handleCheckBoxChange(e){
    console.log("checkbox change: ", e.target.id)
  }
  renderCheckBoxes() {
    Object.entries(Settings).forEach(([key, value]) => {
      console.log(key, value)
      return(
        <div className="box">
               <input id="key" type="checkbox" checked="value" onChange = { this.handleCheckBoxChange }/>
               <label htmlFor="checkBoxVosotros" className="chkbox">Vosotros</label>
        </div>
      )
    });
  }
  render() {
    return (
      <div className="settingsFormContainer">
        <form onSubmit={this.handleFormSubmit}>
          <div className="container">
            <div className="row">
                <div className="col">
                  { this.renderCheckBoxes() }
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
