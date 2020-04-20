/** @jsx jsx */
import { jsx } from "theme-ui";
import { useContext } from "react";

import { ToggleContext } from "./toggleContext";

const Hamburger = () => {
  const { open, toggleNavigation } = useContext(ToggleContext);

  const burgerLine = action => {
    let animation = {};
    if (open) {
      switch (action) {
        case "rotateCW":
          animation.transform = "rotate(-45deg) translate(-6px, 6px)";

          // animation.transform = "rotate(-45deg) scaleX(2) scaleY(1.5)";
          animation.backgroundColor = "background";
          break;
        case "rotateCCW":
          animation.transform = "rotate(45deg) translate(-5px, -6px)";
          // animation.transform = "rotate(45deg) scaleY(1.5)";
          animation.backgroundColor = "background";
          break;
        case "fade":
          animation.backgroundColor = "transparent";
          break;
        default:
      }
    }
    return {
      marginRight: "auto",
      display: "block",
      height: "3px",
      backgroundColor: "#9f151d",
      marginY: "5px",
      borderRadius: "2px",
      marginLeft: 2,
      ":first-of-type": {
        width: "20px"
      },
      ":nth-of-type(2)": {
        width: "14px"
      },
      ":nth-of-type(3)": {
        width: "20px"
      },
      transition: "ease-in-out 0.3s",
      ...animation
    };
  };

  const hamburger = action => {
    let animation = {};
    if (open) {
      switch (action) {
        case "colorChange":
          animation.backgroundColor = "primary";
          break;
        default:
      }
    }
    return {
      border: "none",
      height: "50px",
      width: " 50px",
      borderRadius: "50%",
      zIndex: 99,
      position: "absolute",
      top: "10px",
      left: "10px",
      cursor: "pointer",
      backgroundColor: "background",
      transition: "ease-in-out 0.3s",
      ...animation
    };
  };
  return (
    <button onClick={toggleNavigation} sx={hamburger("colorChange")}>
      <span sx={burgerLine("rotateCW")} />
      <span sx={burgerLine("fade")} />
      <span sx={burgerLine("rotateCCW")} />
    </button>
  );
};

export default Hamburger;
