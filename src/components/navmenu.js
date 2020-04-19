/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

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
        <li
          sx={{
            color: "primary",
            fontFamily: "heading",
            fontWeight: "body"
          }}
          key={index}
          open={open}
        >
          {link.linkName}
        </li>
      ))}
    </ul>
  );
};

export default Navmenu;

Navmenu.propTypes = {
  navitems: PropTypes.array.isRequired
};
