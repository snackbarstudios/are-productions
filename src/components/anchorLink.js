/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx } from "theme-ui";
import { useContext } from "react";
import { ToggleContext } from "./toggleContext";

const AnchorLink = ({ children, href }) => {
  const { closeNavigation } = useContext(ToggleContext);
  const { open } = useContext(ToggleContext);

  const slide = action => {
    let animation = {};
    if (open) {
      switch (action) {
        case "hideText":
          animation.opacity = "1";
          animation.transitionDelay = "0.2s";
          animation.transition = "opacity 0.5s";
          break;
        default:
      }
    }
    return {
      fontWeight: ["heading", "bold", "bold"],
      textDecoration: "none",
      textTransform: "uppercase",
      color: ["primary", "background"],
      opacity: "0",
      transition: "opacity 0.1s",
      ":hover": {
        fontWeight: "heading"
      },
      ":focus": { fontWeight: "heading" },
      ...animation
    };
  };
  return (
    <a
      aria-label={`Scroll to ${href}`}
      href={href}
      onClick={closeNavigation}
      sx={slide("hideText")}
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
