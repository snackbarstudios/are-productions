/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const DropDown = ({ open, setOpen, children }) => {
  const slide = action => {
    let animation = {};
    if (open) {
      switch (action) {
        case "dropdown":
          animation.visibility = "visible";
          animation.backgroundColor = "background";

          break;
        default:
      }
    }
    return {
      backgroundColor: "background",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: 10,
      width: "100%",
      visibility: "hidden",
      justifyContent: "center",
      transition: "ease-in-out 0.3s",
      ...animation
    };
  };

  return <div sx={slide("dropdown")}>{children}</div>;
};

export default DropDown;

DropDown.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};
