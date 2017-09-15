import React from "react";

function NewMedicineForm(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          id="name"
          placeholder="Enter Medication"/>
        <input
          type="text"
          id="dosage"
          placeholder="Enter Dosage"/>
        <input
          type="text"
          id="frequency"
          placeholder="Enter How often you should take it"/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default NewMedicineForm;
