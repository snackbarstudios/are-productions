/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import Hamburger from "./hamburger";

function toggle(setState, state) {
  setState(!state);
}

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div sx={{ display: ["block", "none"] }}>
      <Hamburger setOpen={() => toggle(setOpen, open)} open={open} />
    </div>
  );
};

export default MobileNavigation;
