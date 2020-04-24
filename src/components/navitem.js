/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ToggleContext } from "./toggleContext";

const NavItem = ({ children }) => {
  const { open } = useContext(ToggleContext);

  const item = action => {
    let animation = {};
    if (open) {
      switch (action) {
        case "colorChange":
          animation.opacity = 1;
          animation.transform = " translateY(100px)";
          break;
        default:
      }
    }
    return {
      color: "primary",
      fontFamily: "heading",
      fontWeight: "body",
      transition: "all 0.3s ease-out",
      transitionDelay: "0.1s",
      transitionProperty: "opacity, transform",
      transform: " translateY(-20px)",
      opacity: 0,
      ...animation
    };
  };
  return <li sx={item("colorChange")}>{children}</li>;
};

export default NavItem;

NavItem.propTypes = {
  children: PropTypes.node.isRequired
};
