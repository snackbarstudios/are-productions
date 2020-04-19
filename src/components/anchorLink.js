/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx } from "theme-ui";
import { useContext } from "react";

import { ToggleContext } from "./toggleContext";

const AnchorLink = ({ children, href, handleClick, isBold }) => {
  const { closeNavigation } = useContext(ToggleContext);
  return (
    <a
      aria-label={`Scroll to ${href}`}
      href={href}
      onClick={closeNavigation}
      sx={{
        fontWeight: isBold ? "heading" : "body",
        textDecoration: "none",
        ":hover": {
          fontWeight: "heading"
        },
        ":focus": { fontWeight: "heading" },
        ":active": { fontWeight: "heading" }
      }}
    >
      {children}
    </a>
  );
};
AnchorLink.defaultProps = {
  isBold: false
};

AnchorLink.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
  href: PropTypes.string.isRequired,
  isBold: PropTypes.bool
};

export default AnchorLink;
