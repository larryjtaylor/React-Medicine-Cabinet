import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import { Button } from "react-bootstrap";

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
        <Button bsStyle="primary" onClick={this.takePill}>Take Medication</Button>
        <h4>Pill last taken: {this.state.timeTaken}</h4>
      </div>
    )
  }
}

export default PillsTaken;
