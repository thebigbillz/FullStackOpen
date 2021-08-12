import React from "react";

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      <p>
        {part1.part} {part1.exercise}
      </p>
      <p>
        {part2.part} {part2.exercise}
      </p>
      <p>
        {part3.part} {part3.exercise}
      </p>
    </div>
  );
};

export default Content;
