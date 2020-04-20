/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import NavItem from "./navitem";

const NavMenuMobile = ({ navitems }) => {
  return (
    <ul
      sx={{
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        fontSize: 6,
        m: 0,
        li: { margin: "20px" }
      }}
    >
      {navitems.map(link => (
        <NavItem key={link.id} href={link.link.slug}>
          {link.linkName}
        </NavItem>
      ))}
    </ul>
  );
};

export default NavMenuMobile;

NavMenuMobile.propTypes = {
  navitems: PropTypes.array.isRequired
};
