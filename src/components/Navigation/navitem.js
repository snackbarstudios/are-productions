/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const NavItem = ({ children }) => {
  return <li sx={{ color: "primary", fontFamily: "body" }}>{children}</li>;
};

export default NavItem;

NavItem.propTypes = {
  children: PropTypes.node.isRequired
};
