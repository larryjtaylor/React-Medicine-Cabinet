import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

class PillsTaken extends React.Component{

  constructor(props){
    super(props);
      this.takePill = this.takePill.bind(this);
      this.state = {
        timeTaken: []
      }
  }

  takePill(timeTaken) {
    var newTimeTaken = new Date().toLocaleString();
    this.setState({timeTaken: newTimeTaken});
  }

  render() {
    return (
      <div>
        <button onClick={this.takePill}>Take Medication</button>
        <h4>PIll taken last: {this.state.timeTaken}</h4>
      </div>
    )
  }
}

export default PillsTaken;
