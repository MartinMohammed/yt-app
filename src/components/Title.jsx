import React from "react";

const Title = ({ innerText }) => {
  return (
    <div>
      <h1
        style={{
          color: "black",
          textAlign: "center",
          paddingTop: "15px",
          textShadow: "1px 5px 10px white",
          fontSize: "3rem",
          transform: "rotate(-5deg)",
        }}
      >
        {innerText}
      </h1>
    </div>
  );
};
export default Title;
