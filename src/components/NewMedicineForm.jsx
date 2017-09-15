import React from "react";
import Medicine from "../models/Medicine.js";
import PropTypes from "prop-types";
import { Button }  from "react-bootstrap";

class NewMedicineForm extends React.Component {

  constructor(props){
    super(props);
    this.handleNewMedicineFormSubmission = this.handleNewMedicineFormSubmission.bind(this);
  }

  handleNewMedicineFormSubmission(event) {
  event.preventDefault()
  const { _name, _dosage, _frequency } = this.refs;
  var newMedicine = new Medicine(_name.value, _dosage.value, _frequency.value);
  this.props.onNewMedicineCreation(newMedicine);
  this.props.hideFormAfterSubmission();
  }

  render() {
    var formStyle= {
      marginLeft: "2%",
      width: "150px"
    }
    var buttonStyle= {
      marginLeft: "2%"
    }
    return (
      <div>
        <form onSubmit={this.handleNewMedicineFormSubmission}>
          <input style={formStyle}
            ref="_name"
            type="text"
            id="name"
            placeholder="Enter Medication"/>
          <input style={formStyle}
            ref="_dosage"
            type="text"
            id="dosage"
            placeholder="Enter Dosage"/>
          <input style={formStyle}
            ref="_frequency"
            type="text"
            id="frequency"
            placeholder="Enter Frequency"/>
          <Button style={buttonStyle} type="submit" bsStyle="primary">Add</Button>
        </form>
      </div>
    );
  }
}

NewMedicineForm.propTypes = {
  onNewMedicineCreation: PropTypes.func,
  hideFormAfterSubmission: PropTypes.func
}

export default NewMedicineForm;
