import React from "react";

function Heading() {
  let greeting;
  let time = new Date().getHours();

  const customStyle = {
    color: ""
  };

  if (time < 12) {
    greeting = "Good morning";
    customStyle.color = "red";
  } else if (time < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good evening";
    customStyle.color = "blue";
  }

  return (
    <div className="heading" style={customStyle}>
      {greeting}
    </div>
  );
}

export default Heading;
