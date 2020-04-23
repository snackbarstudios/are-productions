/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx } from "theme-ui";
import { useContext } from "react";
import { ToggleContext } from "./toggleContext";

const AnchorLink = ({ children, href, isBold }) => {
  const { closeNavigation } = useContext(ToggleContext);
  return (
    <a
      aria-label={`Scroll to ${href}`}
      href={href}
      onClick={closeNavigation}
      sx={{
        fontWeight: isBold ? "heading" : "body",
        textDecoration: "none",
        color: isBold ? "primary" : "background",
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
AnchorLink.defaultProps = {
  isBold: false
};

AnchorLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  isBold: PropTypes.bool
};

export default AnchorLink;
