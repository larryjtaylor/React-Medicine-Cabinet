import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import PillsTaken from "./PillsTaken";

function Medicine(props) {


  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h4>First added: {props.timeSinceCreated} ago</h4>
      <h4>Dosage: {props.dosage}</h4>
      <h4>Frequency: {props.frequency}</h4>
      <PillsTaken/>
      <hr/>
    </div>
  );
}

Medicine.propTypes = {
  name: PropTypes.string.isRequired,
  dosage: PropTypes.string.isRequired,
  frequency: PropTypes.string.isRequired,
};

export default Medicine
