/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx } from "theme-ui";
import { useContext } from "react";
import { ToggleContext } from "./toggleContext";

const AnchorLink = ({ children, href }) => {
  const { closeNavigation } = useContext(ToggleContext);
  return (
    <a
      aria-label={`Scroll to ${href}`}
      href={href}
      onClick={closeNavigation}
      sx={{
        fontWeight: "body",
        textDecoration: "none",
        textTransform: "uppercase",
        color: "background",
        ":hover": {
          fontWeight: "heading"
        },
        ":focus": { fontWeight: "heading" }
      }}
    >
      {children}
    </a>
  );
};


AnchorLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired
};

export default AnchorLink;
