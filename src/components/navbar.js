import React from "react";

const NavBar = (props) => {
  const { selected } = props;
  const sections = [
    {
      key: 1,
      message: "Sign Up",
    },
    {
      key: 2,
      message: "Message",
    },
    {
      key: 3,
      message: "Checkbox",
    },
  ];
  return (
    <div>
      <table>
        <tr>
          {sections.map((section) =>
            selected === section.key ? (
              <th key={section.key} bgcolor="lightblue">
                {section.key} {section.message}
              </th>
            ) : (
              <th key={section.key}>
                {section.key} {section.message}
              </th>
            )
          )}
        </tr>
      </table>
    </div>
  );
};

export default NavBar;
