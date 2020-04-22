/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import NavMenuDesktop from "./navMenuDesktop";
import MobileNavigation from "./mobileNavigation";
import { useState } from "react";
import useDocumentScrollThrottled from "../hooks/useDocumentScrollThrottled";

const Navigation = () => {
  const { datoCmsNavigation } = useStaticQuery(
    graphql`
      query {
        datoCmsNavigation {
          navMenu {
            id
            linkName
            link {
              ... on DatoCmsAboutSection {
                id
                slug
              }
              ... on DatoCmsVideoSection {
                id
                slug
              }
              ... on DatoCmsContactSection {
                id
                slug
              }
            }
          }
        }
      }
    `
  );

  const { navMenu } = datoCmsNavigation;
  const [showBackground, setBackground] = useState(false);
  const MINIMUM_SCROLL = 300;
  const TIMEOUT_DELAY = 200;

  useDocumentScrollThrottled(callbackData => {
    const { currentScrollTop } = callbackData;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    // adds a bit of delay effect to the header’s hide/show movement after scrolling
    setTimeout(() => {
      setBackground(isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  return (
    <nav
      sx={{
        position: "fixed",
        zIndex: 3,
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        backgroundColor: showBackground ? "background" : "transparent",
        opacity: showBackground ? 1 : 0,
        height: showBackground ? "50px" : "0%",
        transition: " height ease-out 0.3s"
      }}
    >
      <MobileNavigation navitems={navMenu} />
      <div
        sx={{
          display: ["none", null, "block"],
          ml: "auto"
        }}
      >
        <NavMenuDesktop navitems={navMenu} />
      </div>
    </nav>
  );
};

export default Navigation;
