/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import AnchorLink from "./anchorLink";
import Hamburger from "./hamburger";
import DropDownDesktop from "./dropdownDesktop";
import { ToggleContextProvider } from "./toggleContext";

const NavMenuDesktop = ({ navitems, anchorBold }) => {
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
          <ul
            sx={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            {navitems.map(link => (
              <li
                key={link.id}
                sx={{
                  listStyle: "none"
                }}
              >
                <AnchorLink
                  href={`#${link.link.slug}`}
                  isBold={anchorBold === link.link.slug}
                >
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
