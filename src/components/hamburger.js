/** @jsx jsx */
import { jsx } from "theme-ui";
import { useContext } from "react";
import { ToggleContext } from "./toggleContext";
import useBodyClass from "../hooks/useBodyClass";

const Hamburger = () => {
  const { open, toggleNavigation } = useContext(ToggleContext);
  useBodyClass(`no-scroll`, open);

  const burgerLine = action => {
    let animation = {};
    if (open) {
      switch (action) {
        case "rotateCW":
          animation.transform = "rotate(-135deg) translate(-4px, -2px)";
          animation.backgroundColor = "primary";
          break;
        case "rotateCCW":
          animation.transform = "rotate(135deg) translate(-3px, 2px)";
          animation.backgroundColor = "primary";
          break;
        default:
      }
    }
    return {
      display: "block",
      padding: "0",
      height: "3px",
      backgroundColor: "primary",
      marginY: "5px",
      borderRadius: "2px",
      ":first-of-type": {
        width: "20px"
      },
      ":nth-of-type(3)": {
        width: "20px"
      },
      transition: "ease-in-out 0.3s",
      ...animation
    };
  };

  return (
    <button
      onClick={toggleNavigation}
      sx={{
        border: "none",
        height: "50px",
        outline: "none",
        width: "50px",
        padding: "0",
        zIndex: "99",
        position: "fixed",
        top: "5px",
        right: "5px",
        cursor: "pointer",
        background: "transparent"
      }}
    >
      <div
        sx={{
          position: "relative",
          height: "50px",
          width: "50px"
        }}
      >
        <div
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <span sx={burgerLine("rotateCW")} />
          <span sx={burgerLine("rotateCCW")} />
        </div>
      </div>
    </button>
  );
};

export default Hamburger;
