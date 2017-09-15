import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

function Medicine(props) {

  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>First added: {props.timeSinceCreated} ago</h3>
      <h4>Dosage: {props.dosage}</h4>
      <h4>Frequency: {props.frequency}</h4>
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
