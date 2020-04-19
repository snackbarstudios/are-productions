/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const NavItem = ({ children, open }) => {
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
      transition: "all 1s ease-in",
      transitionProperty: "opacity, transform",
      transform: " translateY(-100px)",
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
