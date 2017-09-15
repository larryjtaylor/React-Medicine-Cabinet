import React from "react";
import Header from "./Header";
import PillsList from "./PillsList";
import NewMedicineControl from "./NewMedicineControl";

function App(props){
  return (
    <div>
      <Header/>
      <PillsList/>
      <hr/>
      <NewMedicineControl/>
    </div>
  );
}

export default App;
