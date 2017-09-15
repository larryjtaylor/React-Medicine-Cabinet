import React from "react";
import Medicine from "./Medicine";

var medicineList = [
  {
    name: "Aspirin",
    dosage: "2 pills",
    frequency: "daily"
  },
  {
    name: "Vitamin C",
    dosage: "1 pill",
    frequency: "daily"
  },{
    name: "Something else",
    dosage: "2 pills",
    frequency: "every 12 hours"
  },
]
function PillsList(props){

  return (
    <div>
      <hr/>
        {medicineList.map((medicine, index) =>
          <Medicine name={medicine.name}
                  dosage={medicine.dosage}
                  frequency={medicine.frequency}
                  key={index}/>
        )}
    </div>
  );
}

export default PillsList;
