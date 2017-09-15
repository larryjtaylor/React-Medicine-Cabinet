import React from "react";

class NewMedicineForm extends React.Component {

  constructor(props){
    super(props);
    this.handleNewMedicineFormSubmission = this.handleNewMedicineFormSubmission.bind(this);
  }

  handleNewMedicineFormSubmission(event) {
  event.preventDefault()
  const { _name, _dosage, _frequency } = this.refs;

  }

  render() {
    return (
      <div>
        <form onSubmit={handleNewMedicineFormSubmission}>
          <input
            ref="_name"
            type="text"
            id="name"
            placeholder="Enter Medication"/>
          <input
            ref="_dosage"
            type="text"
            id="dosage"
            placeholder="Enter Dosage"/>
          <input
            ref="_frequency"
            type="text"
            id="frequency"
            placeholder="Enter How often you should take it"/>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default NewMedicineForm;
