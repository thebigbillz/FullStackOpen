import React from "react";
import Part from "./Part";

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      <Part data={part1} />
      <Part data={part2} />
      <Part data={part3} />
    </div>
  );
};

export default Content;
