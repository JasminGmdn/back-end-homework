import React from "react";
import ReactDOM from "react-dom";

var date = Date();
var currentDate = new Date();
var time = currentDate.getHours();

const CustomeStyle = {
  color: ""
};

let greetting;

if (time < 12) {
  greetting = "Good Morning!";
  CustomeStyle.color = "pink";
} else if (time < 18) {
  greetting = "Good Afternoon!";
  CustomeStyle.color = "light yellow";
} else {
  greetting = "Good night!";
  CustomeStyle.color = "darkviolet";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={CustomeStyle}>
      {greetting}
    </h1>
    <div>
      <h2 className="date">{date}</h2>
    </div>
  </div>,

  document.getElementById("root")
);
