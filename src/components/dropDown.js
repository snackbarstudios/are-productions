/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { useContext } from "react";

import { ToggleContext } from "./toggleContext";

const DropDown = ({ children }) => {
  const { open } = useContext(ToggleContext);

  const slide = action => {
    let animation = {};
    if (open) {
      switch (action) {
        case "dropdown":
          animation.visibility = "visible";
          animation.height = "100vh";
          animation.backgroundColor = "background";

          break;
        default:
      }
    }
    return {
      backgroundColor: "background",
      display: "flex",
      flexDirection: "column",
      height: "0",
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: 10,
      width: "100%",
      visibility: "hidden",
      justifyContent: "center",
      transition: "all 0.6s ease-out ",
      ...animation
    };
  };

  return <div sx={slide("dropdown")}>{children}</div>;
};

export default DropDown;

DropDown.propTypes = {
  children: PropTypes.node.isRequired
};
