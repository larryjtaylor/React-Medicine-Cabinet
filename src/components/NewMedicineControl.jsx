import React from "react";

class NewMedicineControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formVisibleOnPage: false};
    this.handleDisplayingNewMedicineForm = this.handleDisplayingNewMedicineForm.bind(this); 
  }
  handleDisplayingNewMedicineForm(event){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    return (
      <button onClick={this.handleDisplayingNewMedicineForm}>Enter New Medication</button>
    );
  }

}

export default NewMedicineControl;
