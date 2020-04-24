/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import AnchorLink from "./anchorLink";
import Hamburger from "./hamburger";
import DropDownDesktop from "./dropdownDesktop";
import { ToggleContextProvider } from "./toggleContext";

const NavMenuDesktop = ({ navitems }) => {
  return (
    <ToggleContextProvider>
      <div
        sx={{
          display: ["none", "block", null],
          width: "100%",
          height: "100%",
          padding: 2
        }}
      >
        <Hamburger />
        <DropDownDesktop>
          <div
            sx={{
              height: "1px",
              width: "88%",
              backgroundColor: "black",
              marginX: "auto",
              marginTop: "30px"
            }}
          />
          <ul
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: 3,
              marginRight: "6vw"
            }}
          >
            {navitems.map(link => (
              <li
                key={link.id}
                sx={{
                  listStyle: "none",
                  fontSize: 1,
                  marginLeft: 3
                }}
              >
                <AnchorLink href={`#${link.link.slug}`}>
                  {link.linkName}
                </AnchorLink>
              </li>
            ))}
          </ul>
        </DropDownDesktop>
      </div>
    </ToggleContextProvider>
  );
};

export default NavMenuDesktop;

NavMenuDesktop.propTypes = {
  navitems: PropTypes.array.isRequired
};
