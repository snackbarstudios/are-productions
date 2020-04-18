/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import NavItem from "./navitem";

const Navmenu = ({ navitems }) => {
  console.log(navitems);
  return (
    <ul
      sx={{
        listStyle: "none",
        display: "flex",
        m: 0,
        li: { m: 2 }
      }}
    >
      {navitems.map((link, index) => (
        <NavItem key={index}>{link.linkName}</NavItem>
      ))}
    </ul>
  );
};

export default Navmenu;

Navmenu.propTypes = {
  navitems: PropTypes.array.isRequired
};
