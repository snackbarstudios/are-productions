/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const Hamburger = ({ open, setOpen }) => {
  const burgerLine = action => {
    let animation = {};
    if (open) {
      switch (action) {
        case "rotateCW":
          animation.transform = "rotate(-45deg) scaleX(2) scaleY(1.5)";
          break;
        case "rotateCCW":
          animation.transform = "rotate(45deg) scaleY(1.5)";
          break;
        case "fade":
          animation.backgroundColor = "transparent";
          break;
        default:
      }
    }
    return {
      marginLeft: "auto",
      display: "block",
      height: "3px",
      backgroundColor: "primary",
      marginY: "3px",
      borderRadius: "2px",
      ":first-of-type": {
        width: "10px",
        transformOrigin: "85% 50%"
      },
      ":nth-of-type(2)": {
        width: "14px"
      },
      ":nth-of-type(3)": {
        width: "20px",
        transformOrigin: "100% 50%"
      },
      transition: "ease-in-out 0.3s",
      ...animation
    };
  };
  return (
    <button
      onClick={setOpen}
      sx={{
        marginLeft: "auto",
        border: "none",
        padding: 0,
        zIndex: 4,
        cursor: "pointer",
        backgroundColor: "transparent"
      }}
    >
      <span sx={burgerLine("rotateCW")} />
      <span sx={burgerLine("fade")} />
      <span sx={burgerLine("rotateCCW")} />
    </button>
  );
};

export default Hamburger;

Hamburger.propTypes = {
  open: PropTypes.bool.isRequired
};
