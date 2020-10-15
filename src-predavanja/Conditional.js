import React from "react";

function Conditional(props) {
  console.log(props.isLoading);
  if (props.isLoading) {
    return <h1>Loading Component...</h1>;
  }
  return <h1>Component is loaded.</h1>;
}

export default Conditional;
