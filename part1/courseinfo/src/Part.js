import React from "react";

const Part = ({ data }) => {
  return (
    <div>
      <p>
        {data.part} {data.exercise} hey
      </p>
    </div>
  );
};

export default Part;
