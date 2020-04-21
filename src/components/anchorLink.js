/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx } from "theme-ui";
import { useContext } from "react";
import { ToggleContext } from "./toggleContext";

const AnchorLink = ({ children, href, isBold }) => {
  const { closeNavigation } = useContext(ToggleContext);
  return (
    <div>
      <a
        aria-label={`Scroll to ${href}`}
        href={href}
        onClick={closeNavigation}
        sx={{
          fontWeight: isBold ? "heading" : "body",
          position: "relative",
          textDecoration: "none",
          color: "primary",
          ":hover": {
            fontWeight: "heading"
          },
          ":focus": { fontWeight: "heading" },
          ":hover ~ div": {
            width: "40px",
            background: "#810904"
          }
        }}
      >
        {children}
      </a>
      <div
        sx={{
          width: "0px",
          height: "2px",
          background: "#810904",
          top: "50px",
          position: "absolute",
          transition: "0.5s ease"
        }}
      ></div>
    </div>
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
