import React from "react";
import PillsList from "./PillsList";
import NewMedicineControl from "./NewMedicineControl";

class MedicineCabinet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPillsList: [],
    };
    this.addNewMedicineToList = this.addNewMedicineToList.bind(this);
  }

  componentDidMount() {
    this.timeSinceCreatedChecker = setInterval(() =>
    this.updateMedicineTimeSinceCreated(),
    5000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timeSinceCreatedChecker);
  }

  updateMedicineTimeSinceCreated() {
    let newMasterPillsList = this.state.masterPillsList.slice();
    newMasterPillsList.forEach((medicine) =>
    medicine.setTimeSinceCreated()
  );
  this.setState({masterPillsList:newMasterPillsList})
  }

  addNewMedicineToList(newMedicine){
    var newMasterPillsList = this.state.masterPillsList.slice();
        newMasterPillsList.push(newMedicine);
        this.setState({masterPillsList: newMasterPillsList});
  }

  render() {
    return (
      <div>
        <PillsList pillsList = {this.state.masterPillsList}/>
        <NewMedicineControl onNewMedicineCreation= {this.addNewMedicineToList}/>
      </div>
    )
  }
}

export default MedicineCabinet;
