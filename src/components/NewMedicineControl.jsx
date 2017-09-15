import React from "react";
import NewMedicineForm from "./NewMedicineForm";
import PropTypes from "prop-types";

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
        formAreaContent = <NewMedicineForm
          onNewMedicineCreation={this.props.onNewMedicineCreation}/>
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

NewMedicineControl.propTypes = {
  onNewMedicineCreation: PropTypes.func
}

export default NewMedicineControl;
