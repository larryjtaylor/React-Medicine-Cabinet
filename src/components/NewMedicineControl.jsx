import React from "react";
import NewMedicineForm from "./NewMedicineForm";
import PropTypes from "prop-types";
import { Button }  from "react-bootstrap";
import { Modal } from "react-bootstrap";

class NewMedicineControl extends React.Component {

  constructor(props) {
    super(props);
    this.showFormModal = this.showFormModal.bind(this);
    this.hideFormModal = this.hideFormModal.bind(this);
    this.state = {formModalIsShowing: false};
  }
  showFormModal() {
    this.setState({formModalIsShowing: true});
  }

  hideFormModal() {
    this.setState({formModalIsShowing: false});
  }

  render(){
    return (
      <div>
        <Button
          bsStyle="success"
          onClick={this.showFormModal}>
          Add New Medication
        </Button>
        <Modal
          show={this.state.formModalIsShowing}
          onHide={this.hideFormModal}
          bsSize="large">
          <Modal.Header>
            <Modal.Title>Enter Medication</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewMedicineForm
              onNewMedicineCreation={this.props.onNewMedicineCreation}                           hideFormAfterSubmission = {this.hideFormModal}/>
            <img src="http://www.3babak.com/images/category/medicine1-1.jpg"></img>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

NewMedicineControl.propTypes = {
  onNewMedicineCreation: PropTypes.func
}

export default NewMedicineControl;
