/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import NavItem from "./navitem";

const Navmenu = ({ navitems, open }) => {
  return (
    <ul
      sx={{
        listStyle: "none",
        display: "flex",
        flexDirection: ["column", null, "row"],
        fontSize: [7, null, 3],
        m: 0,
        li: { margin: 4 }
      }}
    >
      {navitems.map((link, index) => (
        <NavItem key={index} open={open}>
          {link.linkName}
        </NavItem>
      ))}
    </ul>
  );
};

export default Navmenu;

Navmenu.propTypes = {
  navitems: PropTypes.array.isRequired
};
