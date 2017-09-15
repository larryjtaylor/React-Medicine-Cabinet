import React from "react";
import Medicine from "./Medicine";
import  PropTypes from "prop-types";

function PillsList(props){

  return (
    <div>
      <hr/>
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
