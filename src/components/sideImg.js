import React from "react"

const SideImg = (props) => {
  const { selected } = props;
  const image = `./side${selected}.jpg`;
  console.log({ image });
  return (<><img src="./side1.jpg" alt="Icon" /></>);
};

export default SideImg;
