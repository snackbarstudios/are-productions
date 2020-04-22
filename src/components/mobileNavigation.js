/** @jsx jsx */
import { jsx } from "theme-ui";
import Hamburger from "./hamburger";
import DropDown from "./dropDown";
import NavMenuMobile from "./navmenumobile";
import PropTypes from "prop-types";
import { ToggleContextProvider } from "./toggleContext";

const MobileNavigation = ({ navitems }) => {
  return (
    <ToggleContextProvider>
      <div
        sx={{
          display: ["block", null, "none"],
          border: "1px solid black",
          width: "100%",
          height: "100%",
          padding: 2
        }}
      >
        <Hamburger />
        <DropDown>
          <NavMenuMobile navitems={navitems} />
        </DropDown>
      </div>
    </ToggleContextProvider>
  );
};

export default MobileNavigation;

MobileNavigation.propTypes = {
  navitems: PropTypes.array.isRequired
};
