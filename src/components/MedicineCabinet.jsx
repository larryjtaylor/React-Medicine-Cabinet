import React from "react";
import PillsList from "./PillsList";
import NewMedicineControl from "./NewMedicineControl";

function MedicineCabinet(props) {
  return (
    <div>
      <PillsList/>
      <NewMedicineControl/>
    </div>
  )
}

export default MedicineCabinet;
