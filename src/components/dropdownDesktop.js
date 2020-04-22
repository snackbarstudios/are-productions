/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { useContext } from "react";

import { ToggleContext } from "./toggleContext";

const DropDownDesktop = ({ children }) => {
  const { open } = useContext(ToggleContext);

  const slide = action => {
    let animation = {};
    if (open) {
      switch (action) {
        case "dropdown":
          animation.visibility = "visible";
          animation.height = "30vh";
          animation.backgroundColor = "text";
          break;
        default:
      }
    }
    return {
      backgroundColor: "background",
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

export default DropDownDesktop;

DropDownDesktop.propTypes = {
  children: PropTypes.node.isRequired
};
