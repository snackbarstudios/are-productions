/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import AnchorLink from "./anchorLink";
import DesktopHamburger from "./desktopHamburger";
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
        <DesktopHamburger />
        <DropDownDesktop>
          <ul
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 3,
              marginRight: "1.45rem"
            }}
          >
            {navitems.map(link => (
              <li
                key={link.id}
                sx={{
                  listStyle: "none",
                  fontSize: 1,
                  marginLeft: 5,
                  ":first-of-type": {
                    marginLeft: "0"
                  }
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
