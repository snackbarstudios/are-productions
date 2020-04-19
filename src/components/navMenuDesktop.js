/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const NavMenuDesktop = ({ navitems, open }) => {
  return (
    <ul
      sx={{
        listStyle: "none",
        display: "flex",
        flexDirection: "row",
        fontSize: 3,
        m: 0,
        li: {
          margin: 4,
          color: "primary",
          fontFamily: "heading",
          fontWeight: "body"
        }
      }}
    >
      {navitems.map((link, index) => (
        <li key={index} open={open}>
          {link.linkName}
        </li>
      ))}
    </ul>
  );
};

export default NavMenuDesktop;

NavMenuDesktop.propTypes = {
  navitems: PropTypes.array.isRequired
};
