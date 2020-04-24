/** @jsx jsx */
import { jsx } from "theme-ui";
import Hamburger from "./hamburger";
import DropDownMobile from "./dropDownMobile";
import PropTypes from "prop-types";
import { ToggleContextProvider } from "./toggleContext";
import NavItem from "./navitem";
import AnchorLink from "./anchorLink";

const NavigationMobile = ({ navitems }) => {
  return (
    <ToggleContextProvider>
      <div
        sx={{
          display: ["block", "none", null]
        }}
      >
        <Hamburger />
        <DropDownMobile>
          <ul
            sx={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              fontSize: 6,
              m: 0,
              width: "100%",
              height: "auto",
              li: { margin: "28px" }
            }}
          >
            {navitems.map(link => (
              <NavItem key={link.id}>
                <AnchorLink href={`#${link.link.slug}`}>
                  {link.linkName}
                </AnchorLink>
              </NavItem>
            ))}
          </ul>
        </DropDownMobile>
      </div>
    </ToggleContextProvider>
  );
};

export default NavigationMobile;

NavigationMobile.propTypes = {
  navitems: PropTypes.array.isRequired
};
