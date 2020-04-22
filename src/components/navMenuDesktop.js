/** @jsx jsx */
import { jsx } from "theme-ui";
// import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AnchorLink from "./anchorLink";
import Hamburger from "./hamburger";
import DropDownDesktop from "./dropDownDesktop";
import { ToggleContextProvider } from "./toggleContext";

const NavMenuDesktop = ({ navitems }) => {
  return (
    <ToggleContextProvider>
      <div
        sx={{
          display: ["none", null, "block"],
          border: "1px solid black",
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
                sx={{
                  listStyle: "none"
                }}
              >
                <AnchorLink key={link.id} href={`#${link.link.slug}`}>
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
