import React from "react";

function Header(props){

    var headerStyle = {
      textAlign: "center",
      backgroundImage: "url('https://www.etmc.org/wp-content/uploads/2015/09/banner-clinic-family-medicine-generic.jpg')",
      height: "200px",
      fontSize: "700%",
      paddingTop: "50px", 
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }

  return (
    <h1 style={headerStyle}>MediTrack</h1>
  );
}

export default Header;
