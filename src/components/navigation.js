/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql, Link } from "gatsby";
import { useState } from "react";
import NavMenuDesktop from "./navMenuDesktop";
import NavigationMobile from "./navigationMobile";
import useDocumentScrollThrottled from "../hooks/useDocumentScrollThrottled";
import Image from "./image";

const Navigation = () => {
  const { datoCmsNavigation, datoCmsLogo } = useStaticQuery(
    graphql`
      query {
        datoCmsLogo {
          logoMobile {
            fluid(maxWidth: 1600) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
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
  const { logoMobile } = datoCmsLogo;

  const [showBackground, setBackground] = useState(false);
  const MINIMUM_SCROLL = 800;
  const TIMEOUT_DELAY = 100;

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
        height: "60px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        backgroundColor: showBackground ? "background" : "transparent",
        transform: showBackground
          ? "transform: translate3d(0, 0, 0);"
          : "translate3d(0, 0, 0)",
        transition: "all ease-out 0.5s"
      }}
    >
      
      <Link
        to="/"
        sx={{
          width: "25px",
          marginLeft: "16px",
          position: "realtive",
          zIndex: 99
        }}
      >
        <Image image={logoMobile.fluid} />
      </Link>
      
      <NavigationMobile
        sx={{
          display: ["block", "none", null],
          ml: "auto"
        }}
        navitems={navMenu}
      />
      <NavMenuDesktop
        sx={{
          display: ["none", "block", null],
          ml: "auto"
        }}
        navitems={navMenu}
      />
    </nav>
  );
};

export default Navigation;
