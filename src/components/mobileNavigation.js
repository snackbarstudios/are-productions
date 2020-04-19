/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import Hamburger from "./hamburger";
import DropDown from "./dropDown";
import Navmenu from "./navmenu";
import PropTypes from "prop-types";

function toggle(setState, state) {
  setState(!state);
}

const MobileNavigation = ({ navitems }) => {
  const [open, setOpen] = useState(false);
  return (
    <div sx={{ display: ["block", null, "none"] }}>
      <Hamburger setOpen={() => toggle(setOpen, open)} open={open} />
      <DropDown open={open}>
        <Navmenu navitems={navitems} open={open} />
      </DropDown>
    </div>
  );
};

export default MobileNavigation;

MobileNavigation.propTypes = {
  navitems: PropTypes.array.isRequired
};
