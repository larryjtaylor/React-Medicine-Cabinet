import React from "react";
import NewMedicineForm from "./NewMedicineForm";

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
    let formAreaContent = null;
      if (this.state.formVisibleOnPage){
        formAreaContent = <NewMedicineForm/>
      } else {
        formAreaContent = <button onClick={this.handleDisplayingNewMedicineForm.bind(this)}>Enter New Medication </button>;
      }
    return (
      <div>
        {formAreaContent}
      </div>
    );
  }
}

export default NewMedicineControl;
