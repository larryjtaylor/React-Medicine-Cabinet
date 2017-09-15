import React from "react";
import PropTypes from "prop-types";

function Medicine(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h4>Dosage: {props.dosage}</h4>
      <h4>Frequency: {props.frequency}</h4>
    </div>
  );
}

Medicine.propTypes = {
  name: PropTypes.string.isRequired,
  dosage: PropTypes.string.isRequired,
  frequency: PropTypes.string.isRequired
};

export default Medicine
