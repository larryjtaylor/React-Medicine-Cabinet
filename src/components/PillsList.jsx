import React from "react";
import Medicine from "./Medicine";
import  PropTypes from "prop-types";

function PillsList(props){

  var listStyle = {
    marginLeft: "2%",
    display: "grid",
    gridTemplateColumns: "26% 26% 26%",
    gridTemplateRows: "10%",
    gridGap: "5px 8%"
  }

  return (
    <div style={listStyle}>
      {props.pillsList.map((medicine, index) =>
        <Medicine name={medicine.name}
                dosage={medicine.dosage}
                frequency={medicine.frequency}
                timeSinceCreated={medicine.timeSinceCreated}
                key={index}/>
      )}
    </div>
  );
}

PillsList.propTypes = {
  pillsList: PropTypes.array
}

export default PillsList;
